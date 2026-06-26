/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ThreeDShowcase } from "./ThreeDShowcase";
import { PageId } from "../types";
import { Award, Zap, Shield, CheckCircle2, Factory, Globe2, ArrowRight, HelpCircle, FileSpreadsheet, Cpu, HeartHandshake } from "lucide-react";

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentPage }) => {
  
  const stats = [
    { value: "1980", label: "Established Year", desc: "45+ Years of Legacy" },
    { value: "150+", label: "Turnkey Plants Commissioned", desc: "Across Pakistan & Regional Markets" },
    { value: "50+", label: "Custom Machinery Designs", desc: "PCSIR Approved Blueprints" },
    { value: "5+", label: "International Trading Markets", desc: "Pakistan, China, UAE, Afghanistan" }
  ];

  const expertises = [
    {
      title: "Animal Feed Plant Systems",
      capacity: "2 to 60 Tons/Hour",
      desc: "Fully integrated poultry and livestock pelleting plants engineered with custom multi-stage steam conditioners for supreme nutrient retention.",
      icon: <Factory className="text-white" size={24} />
    },
    {
      title: "Extruded Aqua Feed Lines",
      capacity: "1 to 20 Tons/Hour",
      desc: "Twin-screw cookers producing high-durability floating and sinking feed pellets, complete with integrated vacuum fat coaters.",
      icon: <Cpu className="text-white" size={24} />
    },
    {
      title: "Biomass Wood Pellet Lines",
      capacity: "1 to 20 Tons/Hour",
      desc: "Converting agricultural residue and softwoods into premium fuel pellets without chemicals under heavy mechanical compression.",
      icon: <Zap className="text-white" size={24} />
    },
    {
      title: "Organic Fertilizer Granulation",
      capacity: "50 to 200 Tons/Day",
      desc: "Turnkey installations for Single Super Phosphate (SSP) and Bio Organic Phosphate (BOP) fertilizer compounds with chemical-resistant lining."
    }
  ];

  return (
    <div id="home-view" className="space-y-20 pb-16 bg-white">
      
      {/* 1. HERO SECTION WITH ELITE INDUSTRIAL TYPOGRAPHY */}
      <section className="relative bg-black text-white pt-24 pb-28 px-4 md:px-8 overflow-hidden border-b-8 border-[#1C0863]">
        {/* Subtle engineering line grids in background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-red-950/90 border-2 border-red-700 text-xs font-black uppercase tracking-widest text-red-400 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.15)]">
              <Award size={13} />
              <span>ISO 9001:2015 CERTIFIED MANUFACTURING</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] font-sans uppercase">
              Engineering Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-white">
                That Feeds The World.
              </span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl font-medium">
              SEMZON is a premier international engineering house specializing in designing, fabricating, installing, and servicing complete turnkey industrial plants since 1980. From animal feed to bio-energy, we deliver guaranteed production output.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="btn-hero-explore-machinery"
                onClick={() => {
                  setCurrentPage("products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2.5 py-4 px-7 bg-[#840C0C] hover:bg-red-950 text-white font-black uppercase text-xs tracking-widest rounded-none border-2 border-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>Explore Machinery</span>
                <ArrowRight size={15} />
              </button>
              <button
                id="btn-hero-blueprint"
                onClick={() => {
                  const el = document.getElementById("cad-blueprint-showcase");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2.5 py-4 px-7 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-slate-200 font-black uppercase text-xs tracking-widest rounded-none transition-all"
              >
                <span>View CAD Blueprints</span>
              </button>
            </div>

            {/* Quick credentials badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t-2 border-slate-800 text-xs text-slate-400 max-w-md font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Turnkey Supply</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Urdu/Eng Docs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>On-site Testing</span>
              </div>
            </div>
          </div>

          {/* Graphical/Illustrative right side representing high tech industrial work */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="w-full max-w-[450px] aspect-square rounded-none bg-slate-950 border-4 border-[#1C0863] p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(132,12,12,1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-red-700/10 rounded-full blur-3xl" />
              
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] text-indigo-400 font-bold">SYS_MODULE: CORE_LEVEL</span>
                <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[9px] font-black rounded-none uppercase tracking-wider">
                  Active Plant Output
                </span>
              </div>

              {/* Vector representation of a feed plant flow */}
              <div className="my-8 py-4 flex flex-col gap-4 border-y-2 border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-400">Raw Intake Feeders</span>
                  <span className="font-mono text-emerald-400 font-bold">100% Flow</span>
                </div>
                <div className="w-full bg-slate-900 h-3 rounded-none border border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-amber-500 h-full w-[85%]" />
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-400">Steam Gelatinization Temperature</span>
                  <span className="font-mono text-amber-400 font-bold">95.4 °C</span>
                </div>
                <div className="w-full bg-slate-900 h-3 rounded-none border border-slate-700 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-600 to-indigo-500 h-full w-[95%] animate-pulse" />
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-400">Die Compaction Pressure</span>
                  <span className="font-mono text-[#FF6B6B] font-bold">350 MPa</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>SE_KILN_ROTATION_SPEED</span>
                <span className="font-mono text-slate-300">1480 RPM</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DYNAMIC REAL-TIME STATS BANNER */}
      <section className="-mt-14 relative z-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto bg-white rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(28,8,99,1)] p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x-4 divide-black text-center lg:text-left">
          {stats.map((stat, idx) => (
            <div key={idx} className={`space-y-1.5 ${idx > 0 ? "pt-6 lg:pt-0 lg:pl-6" : ""}`}>
              <div className="text-4xl md:text-5xl font-black text-[#1C0863] tracking-tighter font-sans uppercase border-b-2 border-red-700 pb-1 inline-block mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-black text-slate-900 uppercase tracking-widest block">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 font-medium leading-normal">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE INDUSTRIAL SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-black uppercase tracking-widest text-red-800">Custom Engineering Fields</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase">
            Industrial Plant Engineering & Machinery
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-bold">
            We do not just supply separate machines. We deliver complete, coordinated industrial complexes tailored to raw inputs, spatial limits, and budget structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((exp, idx) => (
            <div key={idx} className="bg-white hover:bg-slate-50 border-3 border-black rounded-none p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(132,12,12,1)] hover:shadow-none transition-all duration-150 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b-2 border-slate-100 pb-3">
                  <span className="text-xs font-black text-indigo-900 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-none uppercase tracking-widest">
                    Capacity: {exp.capacity}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-bold">PROJECT_SERIES_0{idx+1}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{exp.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">{exp.desc}</p>
              </div>
              
              <button
                id={`btn-home-exp-inquire-${idx}`}
                onClick={() => {
                  setCurrentPage("products");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-950 border-b-2 border-black hover:border-[#840C0C] hover:text-[#840C0C] transition-all w-fit pb-1"
              >
                <span>View Full Specifications</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CAD BLUEPRINT / 3D SHOWCASE SECTION (SCROLL TARGET) */}
      <section id="cad-blueprint-showcase" className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 border-black pb-6">
          <div className="space-y-2">
            <span className="text-xs font-black text-red-800 uppercase tracking-widest block">Interactive Machinery Models</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
              Interactive 3D Engineering Stage
            </h2>
            <p className="text-xs text-slate-600 font-bold max-w-xl">
              Rotate, inspect, and explode our high-precision industrial machinery below in real-time. Created to demonstrate the exact internal mechanical tolerance.
            </p>
          </div>
          <button
            id="btn-home-techdocs-redirect"
            onClick={() => {
              setCurrentPage("tech-docs");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 py-3 px-5 bg-black hover:bg-slate-900 text-white rounded-none border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(132,12,12,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span>Open Technical Manuals</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Render 3D Canvas Showcase */}
        <ThreeDShowcase />
      </section>

      {/* 5. THE TURNKEY OPERATIONAL PROMISE */}
      <section className="bg-black text-white py-16 px-4 md:px-8 overflow-hidden relative border-y-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-6">
            <span className="text-xs font-black text-red-400 uppercase tracking-widest block">Our Operational Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight uppercase">
              Complete Turnkey Plant Integration. <br />
              No Middleware, No Excuses.
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              We handle every microscopic variable in industrial construction. Rather than sourcing individual components from fragmented suppliers, SEMZON acts as your single point of absolute engineering accountability.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
              <div className="flex gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="font-black text-white uppercase tracking-wider block mb-0.5">Consultation & Layout Design</span>
                  Tailored to local raw grains and available facility footprint.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="font-black text-white uppercase tracking-wider block mb-0.5">Heavy Alloy Manufacturing</span>
                  High-chromium steels and dynamically balanced rotors.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="font-black text-white uppercase tracking-wider block mb-0.5">On-Site Commissioning</span>
                  We perform physical test batches before final handover.
                </div>
              </div>
              <div className="flex gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <span className="font-black text-white uppercase tracking-wider block mb-0.5">After-Sales Technical Hub</span>
                  Immediate wear-parts support (ring dies, hammers).
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-6 md:p-8 rounded-none border-4 border-red-800 space-y-6 shadow-[8px_8px_0px_0px_rgba(28,8,99,1)]">
            <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2">
              <HeartHandshake className="text-red-500" size={20} />
              Guaranteed Plant Performance
            </h3>
            
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-medium">
              <p>
                All SEMZON installations carry our full 12-month operational guarantee. If your feed plant, biomass pellet line, or organic fertilizer granulator does not meet the specified output capacity (tons/hour) during testing, our engineers will modify and optimize the line on-site.
              </p>
              <p>
                Our machinery relies on high-end components (Siemens/Weichai motors, Schneider electric components, and Shell lubricants). Every setup includes a detailed Urdu and English manual.
              </p>
            </div>

            <div className="pt-4 border-t-2 border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">ISO Registrations standard</span>
              <button
                id="btn-home-consult-cta"
                onClick={() => {
                  setCurrentPage("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="py-2.5 px-4 bg-[#840C0C] hover:bg-red-950 text-white rounded-none border-2 border-white text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROMINENT PROJECTS CAROUSEL SHORTCUT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 border-b-2 border-black pb-4">
          <div className="space-y-1.5">
            <span className="text-xs font-black text-red-800 uppercase tracking-widest">Client Success Highlights</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">Prominent Installed Projects</h2>
          </div>
          <button
            id="btn-home-projects-redirect"
            onClick={() => {
              setCurrentPage("projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-black uppercase tracking-widest text-[#1C0863] hover:text-[#840C0C] flex items-center gap-1 transition-colors border-b-2 border-transparent hover:border-[#840C0C] pb-0.5"
          >
            <span>View All Historical Case Studies</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-3 border-black rounded-none p-5 hover:bg-slate-50 transition-all bg-white shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]">
            <span className="text-[10px] font-black text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-none uppercase tracking-widest">Poultry Feed Plant</span>
            <h4 className="text-lg font-black text-slate-900 mt-2.5 uppercase">Arif Gondal Feed</h4>
            <p className="text-[11px] text-slate-500 font-bold mt-0.5">Ghakhar, Gujranwala, Pakistan</p>
            <p className="text-xs text-slate-600 font-medium mt-3 line-clamp-3 leading-relaxed">
              Turnkey delivery of a fully integrated 10 TPH animal feed line. Incorporates automated batch scaling and dynamically balanced hammer mills.
            </p>
            <div className="border-t-2 border-slate-100 pt-3 mt-4 flex justify-between items-center text-xs font-black uppercase tracking-wider">
              <span className="text-slate-500">Capacity</span>
              <span className="font-bold text-slate-900 font-mono text-sm">10 Tons/Hour</span>
            </div>
          </div>

          <div className="border-3 border-black rounded-none p-5 hover:bg-slate-50 transition-all bg-white shadow-[4px_4px_0px_0px_rgba(132,12,12,1)]">
            <span className="text-[10px] font-black text-indigo-800 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-none uppercase tracking-widest">International Plant</span>
            <h4 className="text-lg font-black text-slate-900 mt-2.5 uppercase">Albadar Feed Plant</h4>
            <p className="text-[11px] text-slate-500 font-bold mt-0.5">Kabul, Afghanistan</p>
            <p className="text-xs text-slate-600 font-medium mt-3 line-clamp-3 leading-relaxed">
              High-capacity 20 TPH automated poultry feed production plant built to withstand cold high-altitude mountain environments.
            </p>
            <div className="border-t-2 border-slate-100 pt-3 mt-4 flex justify-between items-center text-xs font-black uppercase tracking-wider">
              <span className="text-slate-500">Capacity</span>
              <span className="font-bold text-slate-900 font-mono text-sm">20 Tons/Hour</span>
            </div>
          </div>

          <div className="border-3 border-black rounded-none p-5 hover:bg-slate-50 transition-all bg-white shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]">
            <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-none uppercase tracking-widest">BOP Fertilizer Plant</span>
            <h4 className="text-lg font-black text-slate-900 mt-2.5 uppercase">Auriga BOP</h4>
            <p className="text-[11px] text-slate-500 font-bold mt-0.5">Nooriabad, Karachi, Pakistan</p>
            <p className="text-xs text-slate-600 font-medium mt-3 line-clamp-3 leading-relaxed">
              50 Tons/Day bio-organic phosphate fertilizer compounding plant, built with high-torque rotary drums and chemical-resistant alloys.
            </p>
            <div className="border-t-2 border-slate-100 pt-3 mt-4 flex justify-between items-center text-xs font-black uppercase tracking-wider">
              <span className="text-slate-500">Capacity</span>
              <span className="font-bold text-slate-900 font-mono text-sm">50 Tons/Day</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
