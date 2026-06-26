/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle2, Award } from "lucide-react";

export const ServicesView: React.FC = () => {
  const services = [
    {
      title: "Consultation & Facility Layouts",
      desc: "Our engineers analyze raw input materials (maize, bagasse, wood chips), evaluate available space, and design optimal structural layouts for smooth gravity flow, minimal elevators, and high safety.",
      highlights: ["3D floor footprint planning", "Crop flow optimization", "Energy consumption analysis"]
    },
    {
      title: "Precision Engineering & Custom Drafting",
      desc: "We generate custom machine blueprints using state-of-the-art CAD systems. We adjust compression ratios on ring dies and rotor speeds on hammer mills according to specific density and pellet durability criteria.",
      highlights: ["Custom compression ratios", "Stress testing simulations", "Dynamic rotor models"]
    },
    {
      title: "Heavy Alloy Manufacturing & Fabrication",
      desc: "All critical parts are manufactured inside our Lahore facility. We process high-chromium alloy steel into ring dies, dynamically test rotors for vibrations, and weld robust wear-plates for intake chutes.",
      highlights: ["In-house vacuum heat tempering", "Dynamically balanced rotors (< 2mm/s)", "Heavy carbon-steel casing welds"]
    },
    {
      title: "Automation & Electrical PLC Panels",
      desc: "We assemble central Motor Control Centers (MCC) and advanced Programmable Logic Controllers (PLC). The custom touchscreens provide full batch recipe control and early safety interlocks.",
      highlights: ["Siemens and Schneider assemblies", "Touchscreen recipe management", "Automatic overload shutdowns"]
    },
    {
      title: "Erection, Structural Assembly & Piping",
      desc: "SEMZON field crews assemble steel support towers, place storage bins, install heavy machinery, and route steam-boiler networks safely under expert on-site supervisor control.",
      highlights: ["Industrial steel support towers", "Insulated steam line piping", "Bucket elevator alignment"]
    },
    {
      title: "Commissioning & Batch Optimization",
      desc: "We do not leave after bolting. Our process engineers run trial batches, adjust moisture, verify temperatures, inspect pellet durability (PDI), and train local staff on safety.",
      highlights: ["Live raw batch trials", "Staff operation tutoring", "Moisture and PDI calibration"]
    }
  ];

  return (
    <div id="services-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Engineering Capabilities</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Turnkey Engineering Services</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            From raw drafting table to active high-volume production, SEMZON delivers complete coordinated plant engineering with a single point of absolute accountability.
          </p>
        </div>
      </section>

      {/* 2. Turnkey Phase Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((ser, idx) => (
            <div key={idx} className="bg-white border-3 border-black rounded-none p-6 md:p-8 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-3">
                  <span className="w-8 h-8 rounded-none bg-black text-white flex items-center justify-center font-mono font-black text-xs border border-white">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">{ser.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{ser.desc}</p>
              </div>

              <div className="border-t-2 border-slate-100 pt-4 mt-6">
                <h4 className="text-[10px] uppercase font-black text-slate-900 tracking-widest mb-2">Key Highlights</h4>
                <ul className="space-y-1.5 text-xs text-slate-700 font-bold uppercase tracking-wide">
                  {ser.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#840C0C] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. On-Site Guarantee Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-black text-white rounded-none p-6 md:p-10 border-4 border-red-800 relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center shadow-[8px_8px_0px_0px_rgba(28,8,99,1)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-800/10 rounded-full blur-3xl" />
          
          <div className="flex-1 space-y-4 relative z-10 text-left">
            <span className="text-xs font-black uppercase text-red-400 tracking-widest">After-Sales & Wear-Parts Guarantee</span>
            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight">Immediate Wear-Parts Support</h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              We understand that downtime in an industrial plant is incredibly expensive. That is why SEMZON maintains a massive inventory of ready-to-use replacement parts. We manufacture and stock spare ring dies, rollers, hammer blades, screens, flight conveyors, and elevator buckets for all our plants.
            </p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              If a critical machine part fails, our dedicated support crew can dispatch immediate replacements and arrive on-site within 24 hours anywhere in Pakistan.
            </p>
          </div>

          <div className="w-full lg:w-[320px] bg-slate-950 p-5 rounded-none border-2 border-slate-700 space-y-4 shrink-0 relative z-10 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            <h4 className="text-xs font-black uppercase text-white tracking-widest border-b-2 border-slate-800 pb-2 flex items-center gap-2">
              <Award size={14} className="text-red-500" />
              Support Highlights
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-bold uppercase tracking-wider">
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Immediate dispatch on standard ring dies and hammers.</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>On-site mechanical and software backup.</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Urdu-speaking engineers for rapid communication.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
