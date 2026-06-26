/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, ChevronUp, FileQuestion } from "lucide-react";

export const FAQView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does SEMZON's 'Turnkey Operation' actually cover?",
      a: "Our turnkey projects cover the absolute full lifespan of factory construction: custom site layouts, 3D CAD blueprints, dynamic load-stress calculations, full machinery fabrication, raw structural towers and ducts erection, central SCADA/PLC software wiring, dynamic trial batches commissioning, and rigorous operators training. You receive a fully functioning, certified plant ready to run."
    },
    {
      q: "Are replacement parts immediately available?",
      a: "Yes. SEMZON manufactures and maintains a massive domestic inventory of standard wear-parts at our Lahore works on Manga Raiwind Road. We stock alloy-steel ring dies (SZLH range), dynamically balanced hammer beaters (SMSP range), custom perforated screen plates, conveying screw flights, and boiler gaskets. These parts can be dispatched and installed on your site within 24 hours."
    },
    {
      q: "What guarantees do you offer on machinery performance?",
      a: "We offer a full 12-month mechanical and electrical warranty on all turnkey plants and individual machinery units. Furthermore, we guarantee that the plant will physically achieve the agreed-upon output capacity (e.g., 10 Tons/Hour) during commissioning under dynamic load testing before the final project handover is complete."
    },
    {
      q: "Can you design custom machinery for specific local grains?",
      a: "Absolutely. Raw grain properties vary dramatically by region. Cotton seed hull, rice husks, wheat straws, and regional maize varieties require distinct screen mesh sizes, hammer mill speeds, and pellet mill compression ratios. Our design division customizes machinery dimensions to ensure maximum durability indices (PDI)."
    },
    {
      q: "Do you supply and install steam boilers as well?",
      a: "Yes. High-quality poultry feed pelleting and aqua feed extrusion require stable dry saturated steam. SEMZON supplies and integrates industrial horizontal steam boilers (coal, gas, or biomass-fired) with precise automated pressure regulators directly into your plant conditioning systems."
    }
  ];

  return (
    <div id="faq-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">FAQ Center</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Find immediate answers regarding custom factory timelines, machinery guarantees, spare parts supply, and automation integrations.
          </p>
        </div>
      </section>

      {/* 2. Interactive FAQ Accordions */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 space-y-6">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="border-3 border-black rounded-none bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(28,8,99,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <button
                id={`btn-faq-accordion-toggle-${idx}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-black text-slate-900 text-xs md:text-sm uppercase tracking-tight transition-colors focus:outline-none"
              >
                <span className="flex items-start gap-2.5">
                  <FileQuestion className="text-[#840C0C] shrink-0 mt-0.5 animate-pulse" size={16} />
                  <span>{faq.q}</span>
                </span>
                {isOpen ? <ChevronUp size={16} className="text-slate-900 shrink-0 border-2 border-black" /> : <ChevronDown size={16} className="text-slate-900 shrink-0 border-2 border-black" />}
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 pt-3 text-xs md:text-sm text-slate-700 leading-relaxed border-t-3 border-black pl-9 font-semibold bg-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </section>

    </div>
  );
};
