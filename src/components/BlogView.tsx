/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { User, Calendar } from "lucide-react";

export const BlogView: React.FC = () => {
  const posts = [
    {
      id: "starch-gelatinization",
      title: "Optimizing Starch Gelatinization in Poultry Feed Pelleting",
      summary: "How multi-stage steam conditioning parameters affect pellet durability, pathogen elimination, and livestock digestibility indexes.",
      date: "June 15, 2026",
      category: "Feed Mill Technology",
      author: "Engr. S. A. Gondal",
      readTime: "6 Min Read",
      content: "Gelatinization of starch is crucial for high-quality poultry pellets. Under temperatures of 85°C to 95°C and moisture levels of 15% to 18%, starch granules swell and rupture, forming a natural binding paste. This article details the exact thermodynamics of steam injection within SEMZON's multi-stage conditioners."
    },
    {
      id: "biomass-compaction",
      title: "Compression Ratios: Overcoming Wear in Wood Pellet Dies",
      summary: "An analysis of mechanical shear stress when processing dense softwood fibers and cotton stalks into biomass energy pellets.",
      date: "May 28, 2026",
      category: "Bio-Energy Systems",
      author: "Dr. Zhang Wei (Joint Research Center)",
      readTime: "8 Min Read",
      content: "Wood fibers have high lignin content and resistance to compression. Squeezing wood sawdust requires customized compression ratios (typically 1:5 to 1:8 depending on tree species). This whitepaper covers the manufacturing of chromium stainless steel ring dies that withstand up to 400 MPa of localized compression forces."
    },
    {
      id: "automation-scada",
      title: "PLC Automation & SCADA in Modern Turnkey Plants",
      summary: "Reviewing how automatic batching scales and moisture-loop feedback cycles reduce batch losses and optimize human resource allocation.",
      date: "April 10, 2026",
      category: "Industrial Automation",
      author: "Engr. Faisal Jameel",
      readTime: "5 Min Read",
      content: "Modern engineering is defined by automation. Transitioning from manual cattle feed mixing to centralized PLC control panels protects formula uniformity. In this post, we discuss the wiring setups of Siemens S7-1200 units within SEMZON's Motor Control Centers."
    }
  ];

  return (
    <div id="blog-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Engineering Insights</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">SEMZON Industrial Blog</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Technical analysis, agricultural science, and green energy research published by SEMZON's process architects and joint research centers.
          </p>
        </div>
      </section>

      {/* 2. Blog Post Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="bg-white border-3 border-black rounded-none p-6 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-slate-500 font-black uppercase tracking-widest border-b border-slate-100 pb-2">
                  <span className="text-[#840C0C]">{post.category}</span>
                  <span className="font-mono">{post.readTime}</span>
                </div>

                <h3 className="text-base md:text-lg font-black text-slate-900 hover:text-[#1C0863] transition-colors leading-snug uppercase tracking-tight">
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {post.summary}
                </p>

                <p className="text-[11px] text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-none border-2 border-slate-200 font-semibold">
                  {post.content}
                </p>
              </div>

              <div className="border-t-2 border-black pt-4 mt-6 flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <User size={12} className="text-[#1C0863]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <Calendar size={12} className="text-[#840C0C]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
};
