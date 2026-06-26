/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "../types";

export const PRODUCTS: Product[] = [
  {
    id: "poultry-feed-plant",
    name: "Poultry & Livestock Feed Production Plant",
    tagline: "High-capacity turnkey feed mills engineered for precision and reliability.",
    description: "Complete automated solution covering raw material receiving, storage, cleaning, fine grinding, uniform mixing, multi-phase steam conditioning, ring-die pelleting, counterflow cooling, crumbling, screening, and robotic packaging.",
    category: "feed-plants",
    features: [
      "Turnkey capacity from 2 to 60 tons/hour",
      "Fully integrated Programmable Logic Controller (PLC) with touch interface",
      "Advanced multi-stage steam conditioning for improved nutrient absorption and starch gelatinization",
      "High-efficiency dust collection system (bag filter) for clean work environment",
      "Accurate automated micro-ingredient dosing and weighing system"
    ],
    specs: [
      { model: "SZ-PFL-10", capacity: "10 Tons/Hour", power: "145 kW", speed: "Automated", dimensions: "Requires 18m x 12m x 15m Space" },
      { model: "SZ-PFL-20", capacity: "20 Tons/Hour", power: "280 kW", speed: "Automated", dimensions: "Requires 24m x 15m x 18m Space" },
      { model: "SZ-PFL-40", capacity: "40 Tons/Hour", power: "510 kW", speed: "Automated", dimensions: "Requires 32m x 18m x 22m Space" }
    ],
    detailedDescription: "SEMZON's poultry feed mills are the backbone of Pakistan's livestock industry. Engineered specifically to handle diverse grains like maize, wheat, and soybean meal. The plant achieves outstanding pellet quality and nutritional density, with exact moisture control and minimized process losses. Every component is synchronized through our custom electronic control panel, facilitating seamless operation and complete batch traceability."
  },
  {
    id: "aqua-feed-plant",
    name: "Extruded Aqua Feed & Pet Food Plant",
    tagline: "High-tech twin-screw extrusion systems for floating, sinking, and micro-pellets.",
    description: "State-of-the-art extrusion line featuring fine pulverization, high-moisture preconditioning, twin-screw high-shear extrusion, steam drying, vacuum liquid coating (for oils, vitamins, and enzymes), and cooling.",
    category: "feed-plants",
    features: [
      "Production capacity of 1 to 20 tons/hour",
      "Precision twin-screw extruder ensuring stable starch expansion and water stability (up to 24 hours)",
      "Uniform oil-adding vacuum coater for core fat enrichment",
      "Gentle steam-heated belt dryer preserving vitamins and minerals",
      "Interchangeable die plates for pellet diameters from 0.8mm to 12.0mm"
    ],
    specs: [
      { model: "SZ-AFL-02", capacity: "2 Tons/Hour", power: "185 kW", speed: "Variable Frequency", dimensions: "Requires 22m x 8m x 9m Space" },
      { model: "SZ-AFL-05", capacity: "5 Tons/Hour", power: "320 kW", speed: "Variable Frequency", dimensions: "Requires 28m x 10m x 11m Space" },
      { model: "SZ-AFL-10", capacity: "10 Tons/Hour", power: "590 kW", speed: "Variable Frequency", dimensions: "Requires 36m x 12m x 14m Space" }
    ],
    detailedDescription: "Aquaculture requires feed with precise buoyancy and nutritional retention. SEMZON's aqua feed lines use high-precision thermo-mechanical shear in twin-screw extruders to control water stability and sinking rates. Integrated vacuum coating ensures that nutritional lipids penetrate the pellet core without leaking into water, protecting pond ecology and optimizing feed conversion ratios (FCR)."
  },
  {
    id: "biomass-pellet-plant",
    name: "Biomass Wood Pellet Production Line",
    tagline: "Converting agricultural and forestry waste into high-density clean energy.",
    description: "Industrial-grade pelleting plant designed to process wood chips, sawdust, rice husk, cotton stalk, wheat straw, and bagasse into premium, standardized heating pellets.",
    category: "biomass",
    features: [
      "Capacities ranging from 1 to 20 tons/hour",
      "Heavy-duty wood chipper and log splitter upstream integration",
      "High-efficiency rotary drum dryer with automated furnace and temperature control",
      "Specialized ring-die pellet mill with reinforced gearbox and twin roller drives",
      "Optimized pellet cooling and high-density packaging systems"
    ],
    specs: [
      { model: "SZ-WPL-02", capacity: "2 Tons/Hour", power: "220 kW", speed: "Constant/Gear-driven", dimensions: "Requires 25m x 12m x 10m Space" },
      { model: "SZ-WPL-05", capacity: "5 Tons/Hour", power: "410 kW", speed: "Constant/Gear-driven", dimensions: "Requires 34m x 15m x 12m Space" },
      { model: "SZ-WPL-10", capacity: "10 Tons/Hour", power: "780 kW", speed: "Constant/Gear-driven", dimensions: "Requires 45m x 18m x 14m Space" }
    ],
    detailedDescription: "SEMZON is a pioneer in green energy engineering. Our biomass pelleting lines address the intense wear and compression requirements of raw wood fibers. By refining moisture content to 10-12% and compressing material under high pressure (without chemical binders), our systems produce wood pellets with high calorific value, exceeding standard energy thresholds with low ash production."
  },
  {
    id: "fertilizer-plant",
    name: "Organic Compost, BOP & SSP Fertilizer Plant",
    tagline: "Eco-friendly nutrient manufacturing lines with advanced granulation.",
    description: "Comprehensive turn-key projects for Single Super Phosphate (SSP), Bio Organic Phosphate (BOP), and organic compost. Covers compounding, fermentation, mixing, rotary granulating, drying, screening, and coating.",
    category: "fertilizer",
    features: [
      "Plant capacity from 50 to 200 tons/day",
      "Durable acid-resistant and wear-resistant alloy construction for corrosive raw materials",
      "High-torque rotary drum granulator producing smooth, highly soluble spherical granules",
      "Heavy-duty industrial rotary dryers (up to 48 feet long) with combustion furnace",
      "Environmental scrubbers and cyclones ensuring minimal atmospheric emissions"
    ],
    specs: [
      { model: "SZ-FERT-50", capacity: "50 Tons/Day", power: "115 kW", speed: "Continuous", dimensions: "Requires 50m x 20m x 12m Site" },
      { model: "SZ-FERT-100", capacity: "100 Tons/Day", power: "210 kW", speed: "Continuous", dimensions: "Requires 75m x 25m x 14m Site" },
      { model: "SZ-FERT-200", capacity: "200 Tons/Day", power: "390 kW", speed: "Continuous", dimensions: "Requires 110m x 30m x 16m Site" }
    ],
    detailedDescription: "Supporting sustainable agriculture, SEMZON fertilizer plants process municipal waste, poultry manure, and rock phosphate into premium bio-fertilizers. Our advanced acid dilution, mixing, curing den, and rotary granulation techniques guarantee consistent particle sizing, slow-release nutrient profiles, and exceptional mechanical strength, preventing dust formation during field application."
  },
  {
    id: "hammer-mill",
    name: "SMSP Series High-Efficiency Hammer Mill",
    tagline: "Fine-grinding powerhouse with double-direction rotor rotation.",
    description: "Designed for fine grinding of raw materials in poultry feed, aqua feed, and biomass industries. Features a dynamically balanced rotor, wear-resistant carbide-tipped hammers, and quick-change screens.",
    category: "machinery",
    features: [
      "Dynamic balancing on rotor reducing vibrations to < 2.0mm/s",
      "Symmetrical design allowing double-direction rotation, doubling the service life of hammers",
      "Fully interlocked access doors with safety limit switches",
      "Integrated magnetic separator in the feeder to trap metallic impurities"
    ],
    specs: [
      { model: "SMSP965x400", capacity: "5 - 10 t/h", power: "55 / 75 kW", speed: "1480 rpm", dimensions: "1650 x 1200 x 1400 mm" },
      { model: "SMSP965x500", capacity: "8 - 12 t/h", power: "90 / 110 kW", speed: "1480 rpm", dimensions: "1650 x 1300 x 1400 mm" },
      { model: "SMSP965x600", capacity: "15 - 20 t/h", power: "132 / 160 kW", speed: "1480 rpm", dimensions: "1650 x 1400 x 1400 mm" },
      { model: "SMSP965x800", capacity: "20 - 35 t/h", power: "200 / 220 kW", speed: "1480 rpm", dimensions: "1650 x 1600 x 1400 mm" }
    ]
  },
  {
    id: "ribbon-mixer",
    name: "SMHY Series Horizontal Ribbon Mixer",
    tagline: "Highly homogeneous blending with zero dead corners.",
    description: "Industrial ribbon blender designed for dry powders and liquids addition. The dual-outer-and-inner ribbon design forces material in multiple directions, achieving a high mixing homogeneity.",
    category: "machinery",
    features: [
      "Mixing uniformity coefficient of variation (CV) <= 5% in 90-120 seconds",
      "Full-length bottom discharge gate minimizing residual material to < 0.5%",
      "Heavy-duty pneumatic or electric discharging cylinder drive",
      "Liquid spraying pipes for adding molasses, oil, or water during mixing"
    ],
    specs: [
      { model: "SMHY0.6", capacity: "250 kg/batch", power: "5.5 kW", speed: "32 rpm", dimensions: "1800 x 950 x 1250 mm" },
      { model: "SMHY1", capacity: "500 kg/batch", power: "11 kW", speed: "28 rpm", dimensions: "2100 x 1100 x 1450 mm" },
      { model: "SMHY2.5", capacity: "1000 kg/batch", power: "15 kW", speed: "24 rpm", dimensions: "2800 x 1350 x 1800 mm" },
      { model: "SMHY5", capacity: "2000 kg/batch", power: "37 kW", speed: "20 rpm", dimensions: "3600 x 1600 x 2200 mm" }
    ]
  },
  {
    id: "pellet-mill",
    name: "SZLH Series Ring-Die Feed Pellet Mill",
    tagline: "The gold standard in pellet compaction and durability.",
    description: "Equipped with direct-coupled gear-driven transmission, overload shear-pin protection, heavy-duty bearings, and precision-engineered alloy or stainless steel ring dies.",
    category: "machinery",
    features: [
      "Precision alloy/stainless-steel ring die with vacuum heat treatment for long life",
      "Overload safety mechanisms including mechanical shear pin and automatic electrical bypass",
      "Force feeder with variable speed frequency control for consistent intake",
      "Dual or triple motor drive option for high-capacity continuous industrial duties"
    ],
    specs: [
      { model: "SZLH350", capacity: "2 - 5 t/h", power: "55 kW", speed: "350mm Die Dia", dimensions: "2200 x 1500 x 1950 mm" },
      { model: "SZLH400", capacity: "3 - 8 t/h", power: "75 / 90 kW", speed: "400mm Die Dia", dimensions: "2450 x 1700 x 2150 mm" },
      { model: "SZLH420", capacity: "5 - 12 t/h", power: "110 kW", speed: "420mm Die Dia", dimensions: "2600 x 1800 x 2300 mm" },
      { model: "SZLH508", capacity: "8 - 15 t/h", power: "132 / 160 kW", speed: "508mm Die Dia", dimensions: "3100 x 2100 x 2600 mm" },
      { model: "SZLH578", capacity: "10 - 20 t/h", power: "160 / 185 kW", speed: "578mm Die Dia", dimensions: "3400 x 2300 x 2850 mm" },
      { model: "SZLH768", capacity: "20 - 35 t/h", power: "250 / 280 kW", speed: "768mm Die Dia", dimensions: "4100 x 2800 x 3400 mm" }
    ]
  },
  {
    id: "extruder",
    name: "SMHS Series Twin-Screw Feed Extruder",
    tagline: "High-temperature short-time (HTST) precision texturizer.",
    description: "Advanced twin-screw extrusion system featuring modular barrels, electric heating/cooling, and high-intensity mechanical shear, ideal for floating/sinking aquatic feeds and high-grade pet foods.",
    category: "machinery",
    features: [
      "Twin-screw co-rotating configuration for excellent self-cleaning and processing flexibility",
      "Touchscreen PLC with precise temperature controls on each barrel zone",
      "Direct-coupled oil-circulating lubrication system for high durability",
      "Variable speed cutter with pneumatic clearance adjustments"
    ],
    specs: [
      { model: "SMHS128", capacity: "0.8 - 1.2 t/h", power: "45 / 55 kW", speed: "VFD Controlled", dimensions: "3800 x 1200 x 1850 mm" },
      { model: "SMHS135", capacity: "1.5 - 2.0 t/h", power: "55 / 75 kW", speed: "VFD Controlled", dimensions: "4200 x 1350 x 1900 mm" },
      { model: "SMHS165", capacity: "3.0 - 5.0 t/h", power: "132 / 160 kW", speed: "VFD Controlled", dimensions: "5100 x 1600 x 2100 mm" },
      { model: "SMHS185", capacity: "4.0 - 6.0 t/h", power: "160 / 185 kW", speed: "VFD Controlled", dimensions: "5800 x 1800 x 2400 mm" }
    ]
  },
  {
    id: "counterflow-cooler",
    name: "SKLN Series Counterflow Pellet Cooler",
    tagline: "Gentle cooling with optimized thermodynamics.",
    description: "Cools pellets discharged from the pellet mill to within 3-5°C of room temperature, preventing pellet cracking, locking in moisture levels, and extending shelf life.",
    category: "machinery",
    features: [
      "Counterflow cooling principle avoiding rapid cooling thermal shocks",
      "Smooth slide gate or swinging discharge mechanism minimizing pellet breakage",
      "Inlet level sensors (capacitive) for automatic loading and unloading",
      "Highly efficient closed-loop cyclone air lock integration"
    ],
    specs: [
      { model: "SKLN2.5", capacity: "6 t/h", power: "1.5 kW", speed: "2.5m³ Vol", dimensions: "1800 x 1800 x 2600 mm" },
      { model: "SKLN4", capacity: "10 t/h", power: "2.2 kW", speed: "4.0m³ Vol", dimensions: "2100 x 2100 x 2900 mm" },
      { model: "SKLN6", capacity: "15 t/h", power: "2.2 kW", speed: "6.0m³ Vol", dimensions: "2400 x 2400 x 3200 mm" },
      { model: "SKLN8", capacity: "20 t/h", power: "2.2 kW", speed: "8.0m³ Vol", dimensions: "2700 x 2700 x 3500 mm" }
    ]
  },
  {
    id: "ancillary-equipment",
    name: "Conveying & Ancillary Automation Equipment",
    tagline: "The arteries of industrial production.",
    description: "Includes high-wear bucket elevators, chain conveyors, screw feeders, air locks, blower fans, pneumatic slide gates, pre-cleaning screens, and dynamic bag packing systems.",
    category: "ancillary",
    features: [
      "Bucket elevators with robust head section and wear plate backings",
      "Fully sealed dust-tight screw conveyors",
      "Double-wing gates and pneumatic slide dividers for route diverting",
      "PLC-integrated automatic packing scale with high-accuracy load cells"
    ],
    specs: [
      { model: "SZ-TGD-30", capacity: "15 - 30 m³/h", power: "3.0 - 5.5 kW", speed: "Bucket Elevator", dimensions: "Custom Height" },
      { model: "SZ-LS-250", capacity: "10 - 25 t/h", power: "4.0 - 7.5 kW", speed: "Screw Conveyor", dimensions: "Custom Length" },
      { model: "SDBLY-PD", capacity: "200 - 500 bags/h", power: "2.2 kW", speed: "Packing Scale", dimensions: "1400 x 1200 x 3100 mm" }
    ]
  }
];
