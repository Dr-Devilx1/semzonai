/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Target, Landmark, ShieldCheck, Sparkles, User } from "lucide-react";

export const AboutView: React.FC = () => {
  return (
    <div id="about-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Corporate Profile</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Four Decades of Engineering Precision</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Founded in 1980 in Lahore, Pakistan, SEMZON has grown from a specialized manufacturing workshop into an international engineering enterprise.
          </p>
        </div>
      </section>

      {/* 2. Brand Legacy & Profile */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 border-b-4 border-black pb-3 mb-6">About SEMZON Engineering</h2>
          <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
            <p>
              SEMZON Engineering began its journey with a focus on chicken feed machinery and quickly expanded its engineering capabilities to design and fabricate full turn-key fertilizer mills, bio-energy systems, and automated bulk handling equipment. Today, we deliver complete turn-key solutions including consultation, custom drafting, manufacturing, and on-site testing.
            </p>
            <p>
              Our manufacturing facilities on Manga Raiwind Road, Lahore are outfitted with high-capacity steel-shaping rollers, dynamically balanced rotor testing rigs, precision CNC mills, and heavy-duty casting furnaces. We fabricate primary rollers, alloy steel ring dies, and high-wear hammer beaters completely in-house to maintain strict quality thresholds.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-3 border-black p-4 bg-slate-50 shadow-[3px_3px_0px_0px_rgba(28,8,99,1)]">
              <span className="font-black uppercase tracking-wider text-slate-900 text-xs block mb-1">Our Guiding Principle</span>
              <p className="text-xs text-red-800 italic font-bold">"Quality First, Service First, Price Reasonable."</p>
            </div>
            <div className="border-3 border-black p-4 bg-slate-50 shadow-[3px_3px_0px_0px_rgba(132,12,12,1)]">
              <span className="font-black uppercase tracking-wider text-slate-900 text-xs block mb-1">Core Expertise</span>
              <p className="text-xs text-slate-600 font-bold">Continuous feed pelleting lines, twin-screw cookers, and rotating drying drums.</p>
            </div>
          </div>
        </div>

        {/* Brand highlights cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white border-3 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] space-y-3">
            <Target className="text-[#840C0C]" size={28} />
            <h3 className="font-black text-slate-900 text-base uppercase tracking-wider">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              To remain at the absolute vanguard of feed and industrial machinery engineering, delivering stable, automated systems that increase operational efficiency, protect nutrition, and fuel agricultural progress.
            </p>
          </div>

          <div className="p-6 bg-white border-3 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(132,12,12,1)] space-y-3">
            <Sparkles className="text-[#1C0863]" size={28} />
            <h3 className="font-black text-slate-900 text-base uppercase tracking-wider">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              To act as Pakistan’s premier industrial engineering brand, establishing global standards in sustainability and green energy through biomass pelleting and organic compost recycling plants.
            </p>
          </div>

          <div className="p-6 bg-white border-3 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] space-y-3">
            <ShieldCheck className="text-emerald-800" size={28} />
            <h3 className="font-black text-slate-900 text-base uppercase tracking-wider">Quality Assurance</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Operating under strict ISO 9001:2015 management cycles. Every weld, dynamic balance, and electrical wiring assembly undergoes multi-step pressure and stress testing before load out.
            </p>
          </div>

          <div className="p-6 bg-white border-3 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(132,12,12,1)] space-y-3">
            <Landmark className="text-indigo-950" size={28} />
            <h3 className="font-black text-slate-900 text-base uppercase tracking-wider">Our Legacy</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              Proudly fabricating premium machinery in Lahore. We support the domestic economy, cultivate local engineering talent, and provide immediately accessible replacement parts.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CEO Message Section */}
      <section className="bg-[#1C0863]/5 border-y-4 border-black py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Simulated CEO Avatar Profile */}
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="w-48 h-48 rounded-none bg-[#1C0863]/10 border-4 border-[#1C0863] overflow-hidden flex items-center justify-center p-2 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <User size={120} className="text-[#1C0863]/40" />
              <div className="absolute bottom-0 inset-x-0 bg-[#1C0863] text-white py-1.5 text-center font-mono text-[9px] font-black tracking-widest">
                ESTABLISHED 1980
              </div>
            </div>
            <div className="text-center mt-4">
              <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Shoukat Ali</h4>
              <p className="text-xs text-[#840C0C] font-black uppercase tracking-widest">Chief Executive Officer</p>
              <p className="text-[10px] text-slate-500 font-bold mt-0.5">SEMZON Engineering Group</p>
            </div>
          </div>

          {/* CEO Message Text */}
          <div className="flex-1 space-y-6">
            <span className="text-xs font-black text-red-800 uppercase tracking-widest block">Message from the Leadership</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1C0863]">
              "We don't just build machinery — we forge trust and a lasting legacy of innovation."
            </h3>
            
            <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed font-sans font-medium">
              <p>
                Welcome to SEMZON Engineering. Our journey over the last forty years has always been guided by a singular, unyielding vision: to innovate, fabricate, and lead with complete operational integrity. From our humble beginnings to becoming a globally recognized name in complete turnkey processing plants, our focus has never wavered from delivering absolute mechanical excellence and long-term reliability to our clients.
              </p>
              <p>
                We believe that true industrial progress lies in combining advanced material science with sustainable practices. Every pellet mill, twin-screw cooker, or biological organic granulator we design reflects our deep commitment to safety, energy efficiency, and operational ease. Backed by an extraordinary team of fabrication specialists and our state-of-the-art facilities on Manga Raiwind Road, we do not aim to merely meet expectations — we consistently exceed them.
              </p>
              <p>
                Together, we are not just shaping the local agricultural and biomass energy sector — we are engineering the future itself.
              </p>
            </div>

            <div className="pt-2 border-t-2 border-slate-200 text-xs text-slate-500 font-black uppercase tracking-wider">
              Shoukat Ali • Lahore, Pakistan
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
