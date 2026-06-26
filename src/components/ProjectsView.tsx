/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PROJECTS } from "../data/projects";
import { Project } from "../types";
import { Landmark, MapPin, Gauge, Cpu, CheckSquare, Info, Star } from "lucide-react";

export const ProjectsView: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS[0]);

  return (
    <div id="projects-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Case Studies</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Prominent Installed Projects</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            From Gujranwala to Kabul, SEMZON has completed massive agricultural and chemical engineering plants with zero operational compromises.
          </p>
        </div>
      </section>

      {/* 2. Projects Interactive Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Project Selector List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {PROJECTS.map(proj => {
              const isActive = activeProject.id === proj.id;
              return (
                <button
                  id={`btn-project-select-${proj.id}`}
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className={`p-4 rounded-none border-3 text-left transition-all flex flex-col gap-1.5 ${
                    isActive
                      ? "border-[#1C0863] bg-indigo-50/10 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]"
                      : "border-black hover:border-red-800 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
                  }`}
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                    <span className="text-[9px] uppercase font-black text-red-800 tracking-wider">
                      {proj.type}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold">{proj.year}</span>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase leading-tight mt-1">{proj.title}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                    <MapPin size={11} className="text-red-700 shrink-0" />
                    <span className="truncate">{proj.location}, {proj.country}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Case Study Inspector */}
          <div className="flex-1 bg-white border-4 border-black rounded-none p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(132,12,12,1)]">
            <div className="space-y-6">
              
              {/* Client and stats banner */}
              <div className="border-b-4 border-black pb-5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <span className="text-xs font-black text-red-800 uppercase tracking-widest">{activeProject.type}</span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase leading-none mt-1 tracking-tight">
                      {activeProject.title}
                    </h2>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="px-3 py-1.5 bg-[#1C0863] text-white border-2 border-black rounded-none text-xs font-black font-mono tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Completed: {activeProject.year}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="bg-slate-50 border-2 border-black p-3 rounded-none flex items-center gap-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Landmark className="text-indigo-900 shrink-0" size={18} />
                    <div>
                      <span className="text-[9px] text-slate-400 block font-black uppercase">Client</span>
                      <span className="text-xs font-black text-slate-900 truncate block uppercase">{activeProject.client}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border-2 border-black p-3 rounded-none flex items-center gap-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <MapPin className="text-red-800 shrink-0" size={18} />
                    <div>
                      <span className="text-[9px] text-slate-400 block font-black uppercase">Location</span>
                      <span className="text-xs font-black text-slate-900 truncate block uppercase">{activeProject.location}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border-2 border-black p-3 rounded-none flex items-center gap-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Gauge className="text-emerald-800 shrink-0" size={18} />
                    <div>
                      <span className="text-[9px] text-slate-400 block font-black uppercase">Capacity</span>
                      <span className="text-xs font-black text-slate-900 truncate block font-mono uppercase">{activeProject.capacity}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 border-2 border-black p-3 rounded-none flex items-center gap-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Star className="text-amber-600 shrink-0" size={18} />
                    <div>
                      <span className="text-[9px] text-slate-400 block font-black uppercase">Quality PDI</span>
                      <span className="text-xs font-black text-slate-900 truncate block font-mono uppercase">&gt; 97.8%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project narrative description */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Engineering Narrative & Case Scope</h4>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-none border-3 border-black font-semibold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
                  {activeProject.description}
                </p>
              </div>

              {/* Technical highlights checklist */}
              <div className="space-y-3.5">
                <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest flex items-center gap-1.5">
                  <Cpu size={15} className="text-[#840C0C]" />
                  Detailed Technical Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeProject.technicalHighlights.map((hl, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start p-3 bg-white border-2 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(28,8,99,1)]">
                      <CheckSquare size={16} className="text-[#840C0C] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-900 font-bold uppercase tracking-wide leading-normal">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom trust banner */}
              <div className="bg-amber-50 border-2 border-amber-500 p-4 rounded-none text-[10px] text-amber-950 uppercase tracking-widest font-black leading-relaxed flex items-start gap-3 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.2)]">
                <Info size={16} className="text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Note: All specifications listed have been physically audited and certified by the local food safety authorities and chemical departments on site during hand over.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
