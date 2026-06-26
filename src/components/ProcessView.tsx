/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, Award } from "lucide-react";

export const ProcessView: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "1. Raw Material Receiving",
      short: "Material intake and dust isolation.",
      desc: "Raw grains (maize, wheat, soybean) are fed through localized intake grids. Incorporates an independent dedusting suction network to eliminate crop dust and protect operators.",
      highlights: ["Multi-point localized safety grids", "High-capacity bag filters for dust suction"]
    },
    {
      title: "2. Raw Material Cleaning",
      short: "Trapping stones and iron impurities.",
      desc: "High-intensity rare-earth permanent magnets deiron the stream to trap screws or nails. Concurrently, rotary sieves scalp stones, mud, and straw to protect down-line mills.",
      highlights: ["99.9% metallic deironing", "Double-deck rotary screens"]
    },
    {
      title: "3. Grinding Process",
      short: "Fine pulverization in Hammer Mills.",
      desc: "Feeds crop material into the SMSP Hammer Mill. Symmetrical hammers spin up to 1480 rpm, fracturing grain against the screen until it drops into collection hoppers.",
      highlights: ["Dynamically balanced rotors", "Screen sizes 0.8mm to 4.0mm"]
    },
    {
      title: "4. Conveying Process",
      short: "Moving materials securely.",
      desc: "Vertical bucket elevators and dust-tight flight screw feeders lift and transport fine powders into automatic batching silos without friction or material losses.",
      highlights: ["Wear-resistant steel elevator heads", "Completely enclosed flight casings"]
    },
    {
      title: "5. Distribution to Silos",
      short: "Automated route selection.",
      desc: "Pneumatic or motorized slide gates and multi-channel distributors allocate specific powder grades into designated formula ingredient silos.",
      highlights: ["Double-wing slide gate selectors", "Computer-controlled route divert"]
    },
    {
      title: "6. Automatic Batching",
      short: "Precision weighing and recipe control.",
      desc: "Eccentric hopper buckets prevent material bridging or lumping. Heavy-duty load cells scale individual ingredients precisely according to recipe codes.",
      highlights: ["Anti-bridging tapper hoppers", "Dynamic weighing load-cells accuracy"]
    },
    {
      title: "7. Blending & Mixing",
      short: "Dry powder homogenization.",
      desc: "Powder batches dump into the horizontal Ribbon Blender or Twin-Shaft Paddle mixer. The mixing ribbons fold the material to achieve an ultra-high uniformity index.",
      highlights: ["Mixing coefficient (CV) < 5%", "Full bottom clean-out gate"]
    },
    {
      title: "8. Oil & Liquid Addition",
      short: "Adding nutritional fats.",
      desc: "A computerized micro-dispenser sprays exact volumes of warm oil, molasses, or liquid vitamins through fogging nozzles directly into the active mixing stream.",
      highlights: ["Automated liquid weighing controllers", "Fogging nozzles for uniform distribution"]
    },
    {
      title: "9. Conditioning & Pelleting",
      short: "Steam gelatinization and compaction.",
      desc: "Dry mash undergoes intense steam injection in the conditioner (up to 95°C) to cook starch. The warm material is then squeezed through alloy steel ring dies to form pellets.",
      highlights: ["Starch gelatinization > 85%", "Overload shear-pin safeties"]
    },
    {
      title: "10. Cooling & Crumbling",
      short: "Gentle heat removal and crushing.",
      desc: "Counterflow coolers draw ambient air through the bed to slowly lower temperature. Starters and pre-starters then go through fluted roll-crumblers.",
      highlights: ["Counterflow thermodynamics", "Adjustable roll gaps for crumbling"]
    },
    {
      title: "11. Screen & Classification",
      short: "Filtering fine dust.",
      desc: "A planar rotary screen shakes the pellets, sifting off fine dust (which goes back to pelleting) and sorting perfect sizing for packaging.",
      highlights: ["Triple-deck classification", "Return-loop dust reclaiming"]
    },
    {
      title: "12. Automatic Bagging",
      short: "Weighing, sealing, and coding.",
      desc: "Perfect pellets slide into automatic bagging scales. Bags are filled to exactly 25kg or 50kg, sealed via heavy sewing lines, and stamped with batch numbers.",
      highlights: ["Digital bagging scales", "Heavy sewing and labeling integration"]
    }
  ];

  return (
    <div id="process-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Step-by-Step Flow</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Plant Working Process</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Our plants are configured as cohesive systems where every second is calculated. Inspect our 12-step engineering flow from intake to shipment.
          </p>
        </div>
      </section>

      {/* 2. Interactive Timeline Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Timeline Steps Selector */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[600px] overflow-y-auto scrollbar-thin pr-2">
            {steps.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  id={`btn-process-step-tab-${idx}`}
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-none border-3 text-left transition-all flex items-start gap-3.5 relative ${
                    isActive
                      ? "border-[#1C0863] bg-indigo-50/10 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]"
                      : "border-black hover:border-red-800 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-none shrink-0 flex items-center justify-center text-[10px] font-black border border-black ${
                    isActive ? "bg-black text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    {idx + 1}
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-slate-900 leading-none uppercase tracking-tight">{st.title}</h4>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider truncate mt-1">{st.short}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Phase Highlight and Explanation */}
          <div className="lg:col-span-7 bg-white border-4 border-black rounded-none p-6 md:p-8 flex flex-col justify-between min-h-[480px] shadow-[8px_8px_0px_0px_rgba(132,12,12,1)]">
            <div className="space-y-6 text-left">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-3">
                <span className="px-3 py-1 bg-red-50 text-[#840C0C] border-2 border-[#840C0C] rounded-none text-[10px] font-black uppercase tracking-widest">
                  Process Stage 0{activeStep + 1}
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">SEMZON STANDARD</span>
              </div>

              <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                {steps[activeStep].title.replace(/^\d+\.\s*/, "")}
              </h2>

              <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-none border-3 border-black font-semibold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
                {steps[activeStep].desc}
              </p>

              {/* Sub features highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Engineering Safeguards & Specs</h4>
                <div className="space-y-2">
                  {steps[activeStep].highlights.map((hl, i) => (
                    <div key={i} className="flex gap-2.5 items-center text-xs text-slate-800 font-bold uppercase tracking-wide">
                      <CheckCircle2 size={15} className="text-[#1C0863] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick footer helper */}
            <div className="border-t-2 border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">Verified in Arif Gondal Feed & Albadar Feed</span>
              {activeStep < steps.length - 1 ? (
                <button
                  id="btn-process-next"
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="flex items-center gap-1.5 py-2.5 px-4 bg-[#1C0863] hover:bg-indigo-900 text-white rounded-none border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <span>Next Step</span>
                  <ChevronRight size={13} />
                </button>
              ) : (
                <button
                  id="btn-process-reset"
                  onClick={() => setActiveStep(0)}
                  className="py-2.5 px-4 bg-red-800 hover:bg-red-900 text-white rounded-none border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Reset Tour
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
