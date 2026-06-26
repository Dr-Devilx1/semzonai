/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Globe, MapPin, CheckCircle2, ShieldCheck, Ship } from "lucide-react";

export const GlobalView: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<string>("pakistan");

  const markets = [
    {
      id: "pakistan",
      name: "Pakistan (Domestic Hub)",
      role: "Manufacturing Base & Core Market",
      desc: "Headquartered on Manga Raiwind Road, Lahore. Over four decades, SEMZON has supplied more than 150 turnkey installations across Punjab, Sindh, Balochistan, and KPK, serving domestic livestock giants.",
      highlights: [
        "Headquarters & Fabrication plants in Lahore",
        "Active plants in Gujranwala, Kasur, Qabola, Karachi, Quetta",
        "Strategic proximity to major grain corridors"
      ]
    },
    {
      id: "china",
      name: "China (Strategic Sourcing)",
      role: "Component Joint Ventures",
      desc: "SEMZON partners with leading Chinese material science research centers to import specialized vacuum-heat-treated alloy forgings, which we then gun-drill and perforate in Lahore into high-durability ring dies.",
      highlights: [
        "Importing high-end electronic PLC modules (Siemens/Schneider joint ventures)",
        "Direct trade pipelines for specialized carbon-steel sheets",
        "Collaborative testing on high-capacity twin-screw expansion profiles"
      ]
    },
    {
      id: "uae",
      name: "United Arab Emirates (UAE)",
      role: "Organic Recycling Trade",
      desc: "Shipping customized organic fertilizer plants and biomass wood pellet lines to Dubai and regional zones, supporting desert greening initiatives and local compost reclamation.",
      highlights: [
        "Custom heat-resistant chemical mixers",
        "Advanced high-torque organic granulating drums",
        "Direct sea cargo shipping from Karachi Port to Jebel Ali Port"
      ]
    },
    {
      id: "afghanistan",
      name: "Afghanistan (Turnkey Export)",
      role: "Cross-Border Industrial Projects",
      desc: "Successfully commissioned massive turnkey animal feed plants in regional centers like Kabul (e.g., Albadar Feed, 20 TPH). SEMZON provides full cross-border transport, erection, and commissioning.",
      highlights: [
        "Erecting robust thermal insulation lines for mountain climates",
        "Dispatching multi-lingual engineers for on-site commissioning",
        "Active, durable feed mills processing regional cotton-seed meals"
      ]
    }
  ];

  return (
    <div id="global-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Logistics & Trade</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Global Trading & Presence</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            While based in Lahore, Pakistan, SEMZON has established strong commercial trading roots, material joint-ventures, and turnkey projects internationally.
          </p>
        </div>
      </section>

      {/* 2. Interactive Regions Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive regional tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-4 bg-black text-white rounded-none border-3 border-black mb-2 shadow-[3px_3px_0px_0px_rgba(132,12,12,1)]">
              <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-2 mb-1">
                <Globe className="text-red-500 animate-spin-slow shrink-0" size={16} />
                International Markets
              </h3>
              <p className="text-[11px] text-slate-300 font-semibold uppercase tracking-wider">Select an active commercial trade zone to inspect SEMZON's operations.</p>
            </div>

            {markets.map(m => (
              <button
                id={`btn-global-tab-${m.id}`}
                key={m.id}
                onClick={() => setActiveMarket(m.id)}
                className={`p-4 rounded-none border-3 text-left transition-all flex items-start gap-3.5 relative ${
                  activeMarket === m.id
                    ? "border-[#1C0863] bg-indigo-50/10 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] font-black"
                    : "border-black hover:border-red-800 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
                }`}
              >
                <MapPin className={`shrink-0 mt-0.5 ${activeMarket === m.id ? "text-[#1C0863]" : "text-slate-700"}`} size={16} />
                <div className="flex-1 min-w-0 font-black uppercase tracking-tight">
                  <h4 className="text-xs text-slate-900 leading-none">{m.name}</h4>
                  <p className="text-[10px] text-slate-500 tracking-wider truncate mt-1.5">{m.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed trade description board */}
          <div className="lg:col-span-8 bg-white border-4 border-black rounded-none p-6 md:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(132,12,12,1)]">
            {(() => {
              const market = markets.find(m => m.id === activeMarket);
              if (!market) return null;

              return (
                <div className="space-y-6 text-left">
                  <div className="flex justify-between items-start border-b-2 border-slate-100 pb-3">
                    <div>
                      <span className="px-2.5 py-1 bg-red-50 text-[#840C0C] border-2 border-[#840C0C] rounded-none text-[10px] font-black uppercase tracking-widest">
                        Trade Sector
                      </span>
                      <h3 className="text-xl md:text-3xl font-black text-[#1C0863] uppercase tracking-tight mt-2.5">{market.name}</h3>
                      <p className="text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-wider">{market.role}</p>
                    </div>
                    <Ship className="text-indigo-900 shrink-0" size={36} />
                  </div>

                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-none border-3 border-black font-semibold shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]">
                    {market.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Strategic Trade Operations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {market.highlights.map((h, i) => (
                        <div key={i} className="flex gap-2.5 items-center text-xs text-slate-800 font-bold uppercase tracking-wide">
                          <CheckCircle2 size={15} className="text-[#1C0863] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}

            <div className="border-t-2 border-slate-100 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                Customs & Cargo cleared designs
              </span>
              <span className="font-mono text-[10px]">ISO: 9001:2015 Trading Registration</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
