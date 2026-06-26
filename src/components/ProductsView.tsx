/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PRODUCTS } from "../data/products";
import { Product } from "../types";
import { Filter, Info, Phone, Check, ArrowUpRight, FileSpreadsheet, Award } from "lucide-react";

export const ProductsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>("poultry-feed-plant");

  const categories = [
    { id: "all", label: "All Catalog" },
    { id: "feed-plants", label: "Feed Plants" },
    { id: "biomass", label: "Biomass Lines" },
    { id: "fertilizer", label: "Fertilizer Plants" },
    { id: "machinery", label: "Machinery Units" },
    { id: "ancillary", label: "Ancillary & Conveying" }
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    return selectedCategory === "all" || p.category === selectedCategory;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryProduct(null);
    }, 2500);
  };

  return (
    <div id="products-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Official Catalog</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Turnkey Plants & Machinery</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Browse our complete range of certified industrial machinery, feed production plants, biomass systems, and fertilizer granulators since 1980.
          </p>
        </div>
      </section>

      {/* 2. Catalog Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b-4 border-black scrollbar-none">
          <Filter size={16} className="text-slate-900 shrink-0 mr-2" />
          {categories.map(cat => (
            <button
              id={`btn-product-filter-${cat.id}`}
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Reset expanded
                const matched = PRODUCTS.find(p => cat.id === "all" || p.category === cat.id);
                if (matched) setExpandedProduct(matched.id);
              }}
              className={`px-4 py-2 border-2 border-black rounded-none text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#1C0863] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Catalog Split List and Detailed Specification Inspector */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column: Product Selection Cards */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4">
            {filteredProducts.map(prod => (
              <button
                id={`btn-product-card-${prod.id}`}
                key={prod.id}
                onClick={() => setExpandedProduct(prod.id)}
                className={`p-5 rounded-none border-3 text-left transition-all flex flex-col justify-between gap-4 ${
                  expandedProduct === prod.id
                    ? "border-[#1C0863] bg-indigo-50/10 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]"
                    : "border-black hover:border-red-800 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start border-b border-slate-200 pb-2">
                    <span className="text-[9px] font-black text-red-800 uppercase tracking-widest bg-red-50 border border-red-200 px-2 py-0.5 rounded-none">
                      {prod.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">SEMZON ORIGINAL</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mt-2.5 uppercase tracking-tight">{prod.name}</h3>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed mt-0.5">{prod.tagline}</p>
                </div>

                <div className="flex justify-between items-center text-xs border-t-2 border-slate-100 pt-3 font-black uppercase tracking-wider">
                  <span className="text-slate-400">Models and Specs</span>
                  <span className="text-[#1C0863] flex items-center gap-1 font-sans">
                    <span>Inspect Specs</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Premium Active Product Specification Board */}
          <div className="flex-1 bg-white border-4 border-black rounded-none p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(132,12,12,1)]">
            {expandedProduct ? (() => {
              const prod = PRODUCTS.find(p => p.id === expandedProduct);
              if (!prod) return null;

              return (
                <div className="space-y-6">
                  <div>
                    <span className="px-2.5 py-1 bg-red-50 text-[#840C0C] border-2 border-[#840C0C] rounded-none text-xs font-black uppercase tracking-widest mb-3.5 inline-block">
                      {prod.category} Specification
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase leading-none tracking-tight">
                      {prod.name}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 font-bold mt-1 uppercase tracking-wider">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-xs md:text-sm font-semibold">
                    {prod.description}
                  </p>

                  {prod.detailedDescription && (
                    <p className="text-slate-600 leading-relaxed text-xs md:text-sm bg-slate-50 p-4 rounded-none border-2 border-slate-200 font-medium">
                      {prod.detailedDescription}
                    </p>
                  )}

                  {/* Features list */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Features & Engineering Highlights</h4>
                    <ul className="space-y-2 text-xs text-slate-700 font-bold uppercase tracking-wider">
                      {prod.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={14} className="text-[#840C0C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="bg-white border-3 border-black rounded-none p-4 md:p-5 overflow-hidden">
                    <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest mb-4 flex items-center gap-1.5 border-b-2 border-black pb-2">
                      <FileSpreadsheet size={15} className="text-[#1C0863]" />
                      Model & Technical Parameter Matrix
                    </h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b-2 border-black text-slate-900 font-black uppercase tracking-wider">
                            <th className="pb-2.5 pr-4">Model No.</th>
                            {prod.specs[0].capacity && <th className="pb-2.5 pr-4">Capacity</th>}
                            {prod.specs[0].power && <th className="pb-2.5 pr-4">Power</th>}
                            {prod.specs[0].speed && <th className="pb-2.5 pr-4">Speed / Dia</th>}
                            {prod.specs[0].dimensions && <th className="pb-2.5">Dimensions</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-mono text-slate-800 font-bold">
                          {prod.specs.map((spec, index) => (
                            <tr key={index} className="hover:bg-slate-50">
                              <td className="py-3 pr-4 font-black text-slate-950">{spec.model}</td>
                              {spec.capacity && <td className="py-3 pr-4 text-slate-700">{spec.capacity}</td>}
                              {spec.power && <td className="py-3 pr-4 text-indigo-900">{spec.power}</td>}
                              {spec.speed && <td className="py-3 pr-4 text-slate-700">{spec.speed}</td>}
                              {spec.dimensions && <td className="py-3 text-slate-600">{spec.dimensions}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button
                      id={`btn-product-inquire-direct-${prod.id}`}
                      onClick={() => setInquiryProduct(prod)}
                      className="flex-1 py-3.5 px-6 bg-[#1C0863] hover:bg-indigo-950 text-white font-black uppercase text-xs tracking-widest rounded-none border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 text-center"
                    >
                      Request Quotation
                    </button>
                    <a
                      id="btn-product-call-engineer"
                      href="tel:03238845411"
                      className="py-3.5 px-6 bg-slate-950 hover:bg-black text-white font-black uppercase text-xs tracking-widest rounded-none border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(132,12,12,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 text-center flex items-center justify-center gap-2"
                    >
                      <Phone size={14} className="text-red-500" />
                      <span>Call Engineering Desk</span>
                    </a>
                  </div>

                </div>
              );
            })() : (
              <div className="text-center py-24 text-slate-400">
                <Info className="mx-auto mb-2 text-slate-300" size={32} />
                <p className="text-sm">Choose a plant or machine from the left column to view industrial data sheets.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. INQUIRY POPUP MODAL */}
      {inquiryProduct && (
        <div id="modal-product-inquiry" className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-none border-4 border-black p-6 md:p-8 max-w-md w-full relative shadow-[8px_8px_0px_0px_rgba(28,8,99,1)] animate-fade-in">
            <h3 className="text-lg md:text-2xl font-black text-slate-900 uppercase tracking-tight border-b-2 border-black pb-2 mb-2">Request Technical Quotation</h3>
            <p className="text-xs text-slate-600 font-bold mb-6 leading-relaxed">
              You are requesting design layouts and quotation parameters for: <br />
              <strong className="text-[#1C0863] uppercase font-black text-sm">{inquiryProduct.name}</strong>
            </p>

            {inquirySent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-none bg-emerald-100 border-2 border-emerald-800 text-emerald-800 mx-auto flex items-center justify-center font-black">
                  ✓
                </div>
                <h4 className="font-black text-slate-900 uppercase">Inquiry Sent Successfully</h4>
                <p className="text-xs text-slate-600 font-semibold">Our senior design engineers will contact you with custom drawings within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs uppercase font-black tracking-wider text-slate-800">
                <div>
                  <label className="block font-black text-slate-700 mb-1">Company Name *</label>
                  <input
                    id="input-inquiry-company"
                    type="text"
                    required
                    placeholder="E.g. Roshan Feeds"
                    className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Your Name *</label>
                    <input
                      id="input-inquiry-name"
                      type="text"
                      required
                      placeholder="E.g. Ali Gondal"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Phone Number *</label>
                    <input
                      id="input-inquiry-phone"
                      type="tel"
                      required
                      placeholder="E.g. 03238845411"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-black text-slate-700 mb-1">Target Capacity *</label>
                  <input
                    id="input-inquiry-capacity"
                    type="text"
                    required
                    placeholder="E.g. 10 Tons/Hour or 50 Tons/Day"
                    className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                  />
                </div>
                <div>
                  <label className="block font-black text-slate-700 mb-1">Project Site / City *</label>
                  <input
                    id="input-inquiry-location"
                    type="text"
                    required
                    placeholder="E.g. Gujranwala"
                    className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    id="btn-inquiry-cancel"
                    type="button"
                    onClick={() => setInquiryProduct(null)}
                    className="flex-1 py-2.5 border-2 border-black hover:bg-slate-100 rounded-none font-black text-slate-800 uppercase tracking-widest transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    id="btn-inquiry-submit"
                    type="submit"
                    className="flex-1 py-2.5 bg-[#1C0863] text-white hover:bg-indigo-950 rounded-none border-2 border-black font-black uppercase tracking-widest transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
