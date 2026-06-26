/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Hammer, CircleDot, Cpu, Eye, RotateCw, Settings, Info } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  color?: string;
  name?: string;
  desc?: string;
}

interface Edge {
  a: number;
  b: number;
  color?: string;
  width?: number;
}

interface Face {
  indices: number[];
  color: string;
  name?: string;
  desc?: string;
}

interface ModelData {
  vertices: Point3D[];
  edges: Edge[];
  faces: Face[];
  components: {
    name: string;
    indices: number[];
    explodeOffset: Point3D;
    desc: string;
  }[];
}

export const ThreeDShowcase: React.FC = () => {
  const [selectedMachine, setSelectedMachine] = useState<"pellet" | "hammer" | "extruder" | "dryer">("pellet");
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isExploded, setIsExploded] = useState<boolean>(false);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({ x: -0.5, y: 0.6 });
  const [activeComponent, setActiveComponent] = useState<{ name: string; desc: string } | null>(null);
  const [explodeProgress, setExplodeProgress] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Handle continuous rotation
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Generate 3D models mathematically to guarantee high fidelity and correctness
  const getModel = (type: string): ModelData => {
    const vertices: Point3D[] = [];
    const edges: Edge[] = [];
    const faces: Face[] = [];
    const components: ModelData["components"] = [];

    if (type === "pellet") {
      // PELLET MILL MODEL (Cylinder for Ring Die, boxes for gear house, motor, and feeder)
      // 1. Feeder block (Top)
      const feedStart = vertices.length;
      vertices.push(
        { x: -30, y: -80, z: -20 }, { x: 30, y: -80, z: -20 },
        { x: 30, y: -50, z: -20 }, { x: -30, y: -50, z: -20 },
        { x: -20, y: -80, z: 20 }, { x: 20, y: -80, z: 20 },
        { x: 20, y: -50, z: 20 }, { x: -20, y: -50, z: 20 }
      );
      components.push({
        name: "Forced Screw Feeder",
        indices: Array.from({ length: 8 }, (_, i) => feedStart + i),
        explodeOffset: { x: 0, y: -40, z: 0 },
        desc: "Variable-frequency stainless steel screw feeder ensures consistent feeding volume and prevents raw material blockages."
      });

      // 2. Main Gearbox Housing (Middle box)
      const gearStart = vertices.length;
      vertices.push(
        { x: -50, y: -50, z: -50 }, { x: 50, y: -50, z: -50 },
        { x: 50, y: 40, z: -50 }, { x: -50, y: 40, z: -50 },
        { x: -50, y: -50, z: 50 }, { x: 50, y: -50, z: 50 },
        { x: 50, y: 40, z: 50 }, { x: -50, y: 40, z: 50 }
      );
      components.push({
        name: "Heavy-Duty Cast Iron Gearbox",
        indices: Array.from({ length: 8 }, (_, i) => gearStart + i),
        explodeOffset: { x: 0, y: 0, z: -30 },
        desc: "Precision ground helical gear-driven transmission with overload shear-pin protection, offering 98% energy transmission efficiency."
      });

      // 3. Ring Die Chamber (Front cylinder)
      const dieStart = vertices.length;
      const cylinderSegments = 16;
      const rOuter = 40;
      const rInner = 28;
      // Front and back rings of outer die
      for (let i = 0; i < cylinderSegments; i++) {
        const theta = (i / cylinderSegments) * Math.PI * 2;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        // Back circle of Ring Die
        vertices.push({ x: cos * rOuter, y: sin * rOuter, z: 50 });
        // Front circle of Ring Die
        vertices.push({ x: cos * rOuter, y: sin * rOuter, z: 85 });
        // Inner Back circle
        vertices.push({ x: cos * rInner, y: sin * rInner, z: 50 });
        // Inner Front circle
        vertices.push({ x: cos * rInner, y: sin * rInner, z: 85 });
      }

      const dieIndices: number[] = [];
      for (let i = dieStart; i < vertices.length; i++) {
        dieIndices.push(i);
      }
      components.push({
        name: "Precision Alloy Ring Die",
        indices: dieIndices,
        explodeOffset: { x: 0, y: 0, z: 60 },
        desc: "Vacuum heat-treated high-chromium stainless steel die, custom perforated to provide ideal compression ratios for poultry or aqua feed pellets."
      });

      // 4. Main Electric Motor (Rear block)
      const motorStart = vertices.length;
      vertices.push(
        { x: -35, y: -10, z: -100 }, { x: 35, y: -10, z: -100 },
        { x: 35, y: 40, z: -100 }, { x: -35, y: 40, z: -100 },
        { x: -35, y: -10, z: -55 }, { x: 35, y: -10, z: -55 },
        { x: 35, y: 40, z: -55 }, { x: -35, y: 40, z: -55 }
      );
      components.push({
        name: "Siemens/Weichai Main Motor",
        indices: Array.from({ length: 8 }, (_, i) => motorStart + i),
        explodeOffset: { x: 0, y: 0, z: -50 },
        desc: "High-torque, IP55-insulated energy-efficient motor providing stable torque for continuous pellet compression."
      });

      // Draw Edges & Faces
      // Feed block edges
      addEdgeBox(edges, feedStart, 1.5, "#A5B4FC");
      addFaceBox(faces, feedStart, "rgba(28, 8, 99, 0.25)");

      // Gear house
      addEdgeBox(edges, gearStart, 1.5, "#94A3B8");
      addFaceBox(faces, gearStart, "rgba(71, 85, 105, 0.15)");

      // Ring Die chamber edges
      for (let i = 0; i < cylinderSegments; i++) {
        const base = dieStart + i * 4;
        const next = dieStart + ((i + 1) % cylinderSegments) * 4;
        // Outer cylinder edges
        edges.push({ a: base, b: base + 1, color: "#EF4444", width: 2 });
        edges.push({ a: base, b: next, color: "#EF4444", width: 1 });
        edges.push({ a: base + 1, b: next + 1, color: "#EF4444", width: 2 });

        // Inner circle edges
        edges.push({ a: base + 2, b: base + 3, color: "#FCA5A5", width: 1 });
        edges.push({ a: base + 2, b: next + 2, color: "#FCA5A5", width: 1 });
        edges.push({ a: base + 3, b: next + 3, color: "#FCA5A5", width: 1 });

        // Outer surface faces
        faces.push({
          indices: [base, base + 1, next + 1, next],
          color: "rgba(132, 12, 12, 0.35)"
        });
      }

      // Motor edges
      addEdgeBox(edges, motorStart, 1.5, "#64748B");
      addFaceBox(faces, motorStart, "rgba(15, 23, 42, 0.2)");
    } else if (type === "hammer") {
      // HAMMER MILL MODEL (Grinding casing + central rotor shaft + fly hammer lines)
      // 1. Outer Casing (Tall teardrop-ish octagon prism)
      const casingStart = vertices.length;
      const points = [
        { x: -60, y: -70 }, { x: 60, y: -70 },
        { x: 80, y: -20 }, { x: 80, y: 40 },
        { x: 40, y: 80 }, { x: -40, y: 80 },
        { x: -80, y: 40 }, { x: -80, y: -20 }
      ];
      // Back plane
      points.forEach(p => vertices.push({ x: p.x, y: p.y, z: -40 }));
      // Front plane
      points.forEach(p => vertices.push({ x: p.x, y: p.y, z: 40 }));

      components.push({
        name: "Double-Direction Grinding Casing",
        indices: Array.from({ length: 16 }, (_, i) => casingStart + i),
        explodeOffset: { x: 0, y: -45, z: 0 },
        desc: "Symmetrical structural chamber allowing dynamic dual-rotation. Material is shattered instantly upon impact against internal gear plates."
      });

      // 2. Rotor Shaft & Plates (Center)
      const rotorStart = vertices.length;
      vertices.push(
        { x: -10, y: 0, z: -55 }, { x: 10, y: 0, z: -55 },
        { x: 10, y: 0, z: 55 }, { x: -10, y: 0, z: 55 }
      ); // central shaft
      // Rotor circular disc 1
      vertices.push({ x: 0, y: -35, z: -20 }, { x: 30, y: -15, z: -20 }, { x: 30, y: 20, z: -20 }, { x: 0, y: 35, z: -20 }, { x: -30, y: 20, z: -20 }, { x: -30, y: -15, z: -20 });
      // Rotor circular disc 2
      vertices.push({ x: 0, y: -35, z: 20 }, { x: 30, y: -15, z: 20 }, { x: 30, y: 20, z: 20 }, { x: 0, y: 35, z: 20 }, { x: -30, y: 20, z: 20 }, { x: -30, y: -15, z: 20 });

      const rotorIndices: number[] = [];
      for (let i = rotorStart; i < vertices.length; i++) rotorIndices.push(i);
      components.push({
        name: "Dynamically Balanced Rotor",
        indices: rotorIndices,
        explodeOffset: { x: 0, y: 0, z: 40 },
        desc: "Precisely machined central rotor shaft holding fly-hammer plates. Dynamically balanced to reduce operating vibrations to under 2.0 mm/s."
      });

      // 3. Hammers (Beaters)
      const hammerStart = vertices.length;
      // Symmetrical hammer lines extending from rotor disc vertices
      vertices.push(
        { x: 0, y: -62, z: -18 }, { x: 0, y: -62, z: -22 },
        { x: 45, y: -25, z: -18 }, { x: 45, y: -25, z: -22 },
        { x: -45, y: 25, z: 18 }, { x: -45, y: 25, z: 22 },
        { x: 0, y: 62, z: 18 }, { x: 0, y: 62, z: 22 }
      );
      components.push({
        name: "Tungsten Carbide-Tipped Hammers",
        indices: Array.from({ length: 8 }, (_, i) => hammerStart + i),
        explodeOffset: { x: 40, y: 0, z: 0 },
        desc: "Wear-resistant high-carbon steel beaters with reinforced tungsten carbide tips. Symmetrical arrangement allows flipping for four-way use."
      });

      // Casing edges and faces
      for (let i = 0; i < 8; i++) {
        const next = (i + 1) % 8;
        edges.push({ a: casingStart + i, b: casingStart + next, color: "#1C0863", width: 2 });
        edges.push({ a: casingStart + i + 8, b: casingStart + next + 8, color: "#1C0863", width: 2 });
        edges.push({ a: casingStart + i, b: casingStart + i + 8, color: "#4F46E5", width: 1 });

        // Face
        faces.push({
          indices: [casingStart + i, casingStart + next, casingStart + next + 8, casingStart + i + 8],
          color: "rgba(28, 8, 99, 0.08)"
        });
      }

      // Rotor shaft
      edges.push({ a: rotorStart, b: rotorStart + 3, color: "#EF4444", width: 3 });
      edges.push({ a: rotorStart + 1, b: rotorStart + 2, color: "#EF4444", width: 3 });
      // Rotor discs
      for (let i = 0; i < 6; i++) {
        const next = (i + 1) % 6;
        edges.push({ a: rotorStart + 4 + i, b: rotorStart + 4 + next, color: "#EF4444", width: 1.5 });
        edges.push({ a: rotorStart + 10 + i, b: rotorStart + 10 + next, color: "#EF4444", width: 1.5 });
        edges.push({ a: rotorStart + 4 + i, b: rotorStart + 10 + i, color: "#F87171", width: 1 });
      }

      // Hammers
      edges.push({ a: hammerStart, b: hammerStart + 1, color: "#B91C1C", width: 3 });
      edges.push({ a: hammerStart + 2, b: hammerStart + 3, color: "#B91C1C", width: 3 });
      edges.push({ a: hammerStart + 4, b: hammerStart + 5, color: "#B91C1C", width: 3 });
      edges.push({ a: hammerStart + 6, b: hammerStart + 7, color: "#B91C1C", width: 3 });
    } else if (type === "extruder") {
      // TWIN SCREW EXTRUDER (Horizontal modular cylinder barrel, twin intertwined screws, drive motor)
      // 1. Barrel zones (Modular segments block)
      const barrelStart = vertices.length;
      vertices.push(
        { x: -20, y: -25, z: -80 }, { x: 20, y: -25, z: -80 },
        { x: 20, y: 25, z: -80 }, { x: -20, y: 25, z: -80 },
        { x: -20, y: -25, z: 60 }, { x: 20, y: -25, z: 60 },
        { x: 20, y: 25, z: 60 }, { x: -20, y: 25, z: 60 }
      );
      components.push({
        name: "Modular Heated Extrusion Barrel",
        indices: Array.from({ length: 8 }, (_, i) => barrelStart + i),
        explodeOffset: { x: 0, y: -35, z: 0 },
        desc: "Sectional jacketed barrel equipped with integrated electrical band heaters and micro-channel oil/water cooling jackets for precise zone temperature management."
      });

      // 2. Twin Inter intertwined Screws
      const screwStart = vertices.length;
      // Screw A (Left helical representation)
      vertices.push(
        { x: -8, y: 0, z: -90 }, { x: -8, y: 0, z: 70 }
      );
      // Screw B (Right helical representation)
      vertices.push(
        { x: 8, y: 0, z: -90 }, { x: 8, y: 0, z: 70 }
      );

      // Helical loops
      const helixPoints = 16;
      for (let i = 0; i <= helixPoints; i++) {
        const ratio = i / helixPoints;
        const zCoord = -90 + ratio * 160;
        const theta = ratio * Math.PI * 8; // 4 full loops
        // Screw Left
        vertices.push({
          x: -8 + Math.cos(theta) * 11,
          y: Math.sin(theta) * 11,
          z: zCoord
        });
        // Screw Right
        vertices.push({
          x: 8 + Math.cos(theta + Math.PI) * 11,
          y: Math.sin(theta + Math.PI) * 11,
          z: zCoord
        });
      }

      const screwIndices: number[] = [];
      for (let i = screwStart; i < vertices.length; i++) screwIndices.push(i);
      components.push({
        name: "Co-Rotating Twin Screws",
        indices: screwIndices,
        explodeOffset: { x: 0, y: 0, z: 50 },
        desc: "Intermeshing co-rotating screws designed with modular kneading blocks and mixing lobes, delivering intense thermo-mechanical shear for superior starch gelatinization."
      });

      // 3. Discharge Die head
      const dieStart = vertices.length;
      vertices.push(
        { x: -15, y: -15, z: 60 }, { x: 15, y: -15, z: 60 },
        { x: 15, y: 15, z: 60 }, { x: -15, y: 15, z: 60 },
        { x: -10, y: -10, z: 80 }, { x: 10, y: -10, z: 80 },
        { x: 10, y: 10, z: 80 }, { x: -10, y: 10, z: 80 }
      );
      components.push({
        name: "Variable-Speed Pellet Die & Cutter",
        indices: Array.from({ length: 8 }, (_, i) => dieStart + i),
        explodeOffset: { x: 0, y: 0, z: 80 },
        desc: "Multi-hole die plate combined with high-precision pneumatic cutters, adjustable in real-time to control feed length and diameter."
      });

      // Draw Barrel
      addEdgeBox(edges, barrelStart, 1.5, "#4F46E5");
      addFaceBox(faces, barrelStart, "rgba(28, 8, 99, 0.12)");

      // Draw Screws (Core lines)
      edges.push({ a: screwStart, b: screwStart + 1, color: "#DC2626", width: 3 });
      edges.push({ a: screwStart + 2, b: screwStart + 3, color: "#DC2626", width: 3 });
      // Draw Helices
      for (let i = 0; i < helixPoints; i++) {
        const leftBase = screwStart + 4 + i * 2;
        const rightBase = screwStart + 4 + i * 2 + 1;
        edges.push({ a: leftBase, b: leftBase + 2, color: "#EF4444", width: 1.5 });
        edges.push({ a: rightBase, b: rightBase + 2, color: "#B91C1C", width: 1.5 });
      }

      // Draw Die Head
      addEdgeBox(edges, dieStart, 1.5, "#D97706");
      addFaceBox(faces, dieStart, "rgba(217, 119, 6, 0.2)");
    } else {
      // ROTARY DRYER MODEL (Giant cylinder laying horizontally, tilted, supporting rings, furnace block)
      // 1. Heavy Rotary Cylinder Drum
      const cylStart = vertices.length;
      const cylSegments = 16;
      const rDryer = 35;
      const dryerLength = 160;

      for (let i = 0; i < cylSegments; i++) {
        const theta = (i / cylSegments) * Math.PI * 2;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        // Back ring (Left side, slightly elevated for gravity flow angle)
        vertices.push({ x: cos * rDryer, y: sin * rDryer + 10, z: -dryerLength / 2 });
        // Front ring (Right side, slightly lowered)
        vertices.push({ x: cos * rDryer, y: sin * rDryer - 10, z: dryerLength / 2 });
      }

      const cylIndices: number[] = [];
      for (let i = cylStart; i < vertices.length; i++) cylIndices.push(i);
      components.push({
        name: "Industrial Rotary Drum Shell",
        indices: cylIndices,
        explodeOffset: { x: 0, y: 30, z: 0 },
        desc: "High-grade alloy steel drum shell, tilted at 3-5 degrees, equipped with interior cascading lift-flights that scoop and shower material through the hot air stream."
      });

      // 2. Support Riding Rings (Girth gears)
      const ringStart = vertices.length;
      // Ring A
      vertices.push(
        { x: -rDryer - 8, y: 8, z: -40 }, { x: rDryer + 8, y: 8, z: -40 },
        { x: rDryer + 8, y: -20, z: -40 }, { x: -rDryer - 8, y: -20, z: -40 }
      );
      // Ring B
      vertices.push(
        { x: -rDryer - 8, y: -8, z: 40 }, { x: rDryer + 8, y: -8, z: 40 },
        { x: rDryer + 8, y: -30, z: 40 }, { x: -rDryer - 8, y: -30, z: 40 }
      );
      components.push({
        name: "Girth Gear & Riding Rings",
        indices: Array.from({ length: 8 }, (_, i) => ringStart + i),
        explodeOffset: { x: 0, y: -25, z: 0 },
        desc: "Forged steel riding rings supporting the entire kiln load, driven by high-efficiency pinion gears for slow, high-torque steady rotations."
      });

      // Draw Cylinder lines
      for (let i = 0; i < cylSegments; i++) {
        const base = cylStart + i * 2;
        const next = cylStart + ((i + 1) % cylSegments) * 2;

        edges.push({ a: base, b: base + 1, color: "#1C0863", width: 1.5 });
        edges.push({ a: base, b: next, color: "#1C0863", width: 1 });
        edges.push({ a: base + 1, b: next + 1, color: "#1C0863", width: 1 });

        faces.push({
          indices: [base, base + 1, next + 1, next],
          color: "rgba(28, 8, 99, 0.15)"
        });
      }

      // Draw Support Rings
      addEdgeBox(edges, ringStart, 2, "#DC2626");
      addEdgeBox(edges, ringStart + 4, 2, "#DC2626");
    }

    return { vertices, edges, faces, components };
  };

  // Helper box builders to keep code extremely neat
  const addEdgeBox = (edges: Edge[], start: number, width = 1, color = "#64748B") => {
    edges.push(
      { a: start, b: start + 1, color, width }, { a: start + 1, b: start + 2, color, width },
      { a: start + 2, b: start + 3, color, width }, { a: start + 3, b: start, color, width },
      { a: start + 4, b: start + 5, color, width }, { a: start + 5, b: start + 6, color, width },
      { a: start + 6, b: start + 7, color, width }, { a: start + 7, b: start + 4, color, width },
      { a: start, b: start + 4, color, width }, { a: start + 1, b: start + 5, color, width },
      { a: start + 2, b: start + 6, color, width }, { a: start + 3, b: start + 7, color, width }
    );
  };

  const addFaceBox = (faces: Face[], start: number, color: string) => {
    faces.push(
      { indices: [start, start + 1, start + 2, start + 3], color }, // Back
      { indices: [start + 4, start + 5, start + 6, start + 7], color }, // Front
      { indices: [start, start + 1, start + 5, start + 4], color }, // Top
      { indices: [start + 3, start + 2, start + 6, start + 7], color }, // Bottom
      { indices: [start, start + 3, start + 7, start + 4], color }, // Left
      { indices: [start + 1, start + 2, start + 6, start + 5], color } // Right
    );
  };

  // Rotation matrices applied in real-time
  const rotatePoint = (pt: Point3D, rx: number, ry: number): Point3D => {
    // Rotate Y
    const cosY = Math.cos(ry);
    const sinY = Math.sin(ry);
    const x1 = pt.x * cosY - pt.z * sinY;
    const z1 = pt.x * sinY + pt.z * cosY;

    // Rotate X
    const cosX = Math.cos(rx);
    const sinX = Math.sin(rx);
    const y2 = pt.y * cosX - z1 * sinX;
    const z2 = pt.y * sinX + z1 * cosX;

    return { x: x1, y: y2, z: z2 };
  };

  // Draw the actual canvas scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let localRot = { ...rotation };

    // Get current model data
    const model = getModel(selectedMachine);

    const render = () => {
      if (autoRotate && !isDragging.current) {
        localRot.y += 0.007; // slow rotation
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = Math.min(canvas.width, canvas.height) * 0.0035;

      // 1. Calculate displaced/exploded vertices
      const currentVertices = model.vertices.map((v, idx) => {
        let offset = { x: 0, y: 0, z: 0 };
        // Find which component this vertex belongs to
        const comp = model.components.find(c => c.indices.includes(idx));
        if (comp && isExploded) {
          offset = {
            x: comp.explodeOffset.x * explodeProgress,
            y: comp.explodeOffset.y * explodeProgress,
            z: comp.explodeOffset.z * explodeProgress
          };
        }
        return {
          x: v.x + offset.x,
          y: v.y + offset.y,
          z: v.z + offset.z
        };
      });

      // 2. Project rotated vertices
      const projected = currentVertices.map(v => {
        const rotated = rotatePoint(v, localRot.x, localRot.y);
        // Orthographic projection with basic depth
        return {
          x: centerX + rotated.x * scale,
          y: centerY + rotated.y * scale,
          z: rotated.z, // depth
          orig: v
        };
      });

      // 3. Render Solid Faces if not Wireframe
      if (!isWireframe) {
        // Sort faces by average depth (Back-to-Front painter's algorithm)
        const sortedFaces = model.faces
          .map((f, idx) => {
            const zSum = f.indices.reduce((sum, i) => sum + projected[i].z, 0);
            return { face: f, avgZ: zSum / f.indices.length, idx };
          })
          .sort((a, b) => a.avgZ - b.avgZ);

        sortedFaces.forEach(({ face }) => {
          ctx.beginPath();
          face.indices.forEach((val, i) => {
            if (i === 0) ctx.moveTo(projected[val].x, projected[val].y);
            else ctx.lineTo(projected[val].x, projected[val].y);
          });
          ctx.closePath();
          ctx.fillStyle = face.color;
          ctx.fill();

          // Draw soft translucent outline for shading depth
          ctx.strokeStyle = "rgba(255,255,255,0.1)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      }

      // 4. Draw Edges
      model.edges.forEach(e => {
        const p1 = projected[e.a];
        const p2 = projected[e.b];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = e.color || "#475569";
        ctx.lineWidth = e.width || 1;
        ctx.stroke();
      });

      // 5. Draw interactive hotspots at the centers of major components
      model.components.forEach(comp => {
        // Calculate average projected center
        let cx = 0, cy = 0;
        comp.indices.forEach(idx => {
          cx += projected[idx].x;
          cy += projected[idx].y;
        });
        cx /= comp.indices.length;
        cy /= comp.indices.length;

        // Draw outer glowing ring
        ctx.beginPath();
        ctx.arc(cx, cy, 11, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(132, 12, 12, 0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#840C0C";
        ctx.fill();

        // Draw subtle text tag
        ctx.fillStyle = "rgba(30, 41, 59, 0.9)";
        ctx.font = "bold 9px sans-serif";
      });

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [selectedMachine, isWireframe, isExploded, rotation, autoRotate, explodeProgress]);

  // Smooth animate explode progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isExploded && explodeProgress < 1) {
      interval = setInterval(() => {
        setExplodeProgress(prev => Math.min(prev + 0.1, 1));
      }, 30);
    } else if (!isExploded && explodeProgress > 0) {
      interval = setInterval(() => {
        setExplodeProgress(prev => Math.max(prev - 0.1, 0));
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isExploded, explodeProgress]);

  // Handle Dragging to rotate
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    setAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch Support
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches.length === 1) {
      lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setAutoRotate(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - lastMousePos.current.x;
    const deltaY = e.touches[0].clientY - lastMousePos.current.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));

    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const machineDetails = {
    pellet: {
      name: "SZLH Ring-Die Pellet Mill",
      desc: "SEMZON's high-compression pellet mill designed for robust livestock and poultry feed pellet production. Features premium direct-gear coupling and automatic force-feeding conditioners.",
      parts: [
        { name: "Precision Alloy Ring Die", desc: "High chromium stainless steel die forged via gun-drilling and vacuum tempering. Provides consistent compression force for maximum pellet density." },
        { name: "Forced Screw Feeder", desc: "Anti-arching design equipped with variable frequency speeds to handle high volume intake seamlessly." },
        { name: "Heavy-Duty Cast Iron Gearbox", desc: "Precision helical gearing transferring 98% motor output without slippage, coupled with shear-pin load protectors." }
      ]
    },
    hammer: {
      name: "SMSP High-Efficiency Hammer Mill",
      desc: "A coarse and fine pulverizer optimized for poultry feed grains and biomass fibers. Incorporates double-direction rotor spin to prolong hammer life.",
      parts: [
        { name: "Dynamically Balanced Rotor", desc: "Solid forged central shaft tested dynamically to reduce vibration levels to under 2.0 mm/s, protecting mechanical mounts." },
        { name: "Tungsten Carbide Hammers", desc: "Symmetrical arrangement of tungsten alloy-tipped beaters capable of breaking down tough fiber hulls." },
        { name: "Double Grinding Casing", desc: "Dual internal chamber design that creates high-velocity crop fracturing and efficient particle screening." }
      ]
    },
    extruder: {
      name: "SMHS Twin-Screw Cooker Extruder",
      desc: "Thermal extrusion cooker for floating aqua feed and pet foods. Delivers extreme shear stress to cook and expand starches cleanly.",
      parts: [
        { name: "Co-Rotating Twin Screws", desc: "Modular segmented screws that interlock to deliver extreme mechanical shear and 100% self-cleaning actions." },
        { name: "Heated Modular Barrel", desc: "Sectional barrel outfitted with liquid cooling channels and electric band heaters for micro-zone temperature profiling." },
        { name: "Discharge Die & Cutter", desc: "Features pneumatic cutter mounts that slide flush against the die plate to shear floating pellets cleanly." }
      ]
    },
    dryer: {
      name: "Heavy Rotary Drum Dryer / Kiln",
      desc: "Massive thermal rotary drying drum for biomass wood pellet systems and organic fertilizer compost lines. Evaporates high moisture down to stable 10% levels.",
      parts: [
        { name: "Rotary Drum Shell", desc: "Thick carbon steel cylinder tilted at 3-5 degrees, equipped with cascading flights to scoop and shower materials." },
        { name: "Girth Gear & Riding Rings", desc: "Forged riding rings supporting structural weight, sitting on secondary dual roller bearings for rotation stability." }
      ]
    }
  };

  return (
    <div id="interactive-3d-showcase" className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Left Side: interactive 3D canvas stage */}
        <div className="flex-1 flex flex-col relative bg-slate-950 rounded-xl border border-slate-800 p-4 min-h-[400px] select-none">
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <button
              id="btn-wireframe-toggle"
              onClick={() => setIsWireframe(!isWireframe)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isWireframe ? "bg-red-950/40 border-red-800 text-red-200" : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Eye size={14} />
              {isWireframe ? "Solid Render" : "Wireframe CAD"}
            </button>
            <button
              id="btn-explode-toggle"
              onClick={() => setIsExploded(!isExploded)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isExploded ? "bg-indigo-950/40 border-indigo-800 text-indigo-200" : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Settings className="animate-spin-slow" size={14} />
              {isExploded ? "Assemble Model" : "Explode Components"}
            </button>
            <button
              id="btn-autorotate-toggle"
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                autoRotate ? "bg-emerald-950/40 border-emerald-800 text-emerald-200" : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <RotateCw className={autoRotate ? "animate-spin" : ""} size={14} />
              {autoRotate ? "Pause Rotation" : "Auto Rotate"}
            </button>
          </div>

          <div className="absolute bottom-4 left-4 z-10 text-[10px] text-slate-500 font-mono">
            Drag mouse or swipe to rotate 3D viewport | Click red dots for parts
          </div>

          {/* Machine selector tabs */}
          <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
            {(["pellet", "hammer", "extruder", "dryer"] as const).map(machine => (
              <button
                id={`tab-machine-${machine}`}
                key={machine}
                onClick={() => {
                  setSelectedMachine(machine);
                  setActiveComponent(null);
                }}
                className={`px-3 py-1 text-left rounded-md text-xs font-medium uppercase tracking-wider transition-all ${
                  selectedMachine === machine
                    ? "bg-red-900 text-white shadow-md border-l-2 border-red-500"
                    : "bg-slate-900/60 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {machine === "pellet" && "Pellet Mill"}
                {machine === "hammer" && "Hammer Mill"}
                {machine === "extruder" && "Extruder"}
                {machine === "dryer" && "Rotary Dryer"}
              </button>
            ))}
          </div>

          {/* Interactive 3D Canvas */}
          <div className="flex-1 flex items-center justify-center cursor-grab active:cursor-grabbing">
            <canvas
              ref={canvasRef}
              width={560}
              height={420}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              className="max-w-full h-auto drop-shadow-[0_15px_30px_rgba(28,8,99,0.3)]"
            />
          </div>
        </div>

        {/* Right Side: technical specifications panel */}
        <div className="w-full lg:w-[350px] flex flex-col justify-between bg-slate-950/50 rounded-xl border border-slate-800 p-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-1.5 bg-red-950 text-red-400 rounded-lg">
                <CircleDot size={18} />
              </span>
              <span className="text-xs font-semibold uppercase text-red-500 tracking-widest">Interactive Engineering CAD</span>
            </div>
            
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">{machineDetails[selectedMachine].name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">{machineDetails[selectedMachine].desc}</p>
            
            <div className="border-t border-slate-800 pt-5">
              <h4 className="text-xs font-semibold uppercase text-slate-300 tracking-wider mb-3 flex items-center gap-1.5">
                <Info size={14} className="text-indigo-400" />
                Component Highlight Index
              </h4>
              <div className="space-y-3">
                {machineDetails[selectedMachine].parts.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveComponent({ name: p.name, desc: p.desc })}
                    className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      activeComponent?.name === p.name
                        ? "bg-indigo-950/40 border-indigo-500"
                        : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                    }`}
                  >
                    <div className="text-xs font-bold text-white flex justify-between items-center">
                      {p.name}
                      <span className="text-[9px] bg-indigo-900 text-indigo-200 px-1.5 py-0.5 rounded uppercase">0{idx+1}</span>
                    </div>
                    {activeComponent?.name === p.name && (
                      <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed transition-all duration-300">
                        {p.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-lg text-xs text-slate-400 flex items-start gap-2.5 mt-6">
            <Cpu size={16} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Automated PLC Interlocks</span>
              Ready to sync with SEMZON's Electronic Control panels. Tested under dynamic load since 1980.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
