/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Shield, Globe } from "lucide-react";

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    plantType: "poultry",
    capacity: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    // Map ID to form key
    const key = id.replace("contact-", "") as keyof typeof formData;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        company: "",
        name: "",
        phone: "",
        email: "",
        plantType: "poultry",
        capacity: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div id="contact-view" className="space-y-16 pb-16 bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-black text-white py-16 px-4 md:px-8 text-center relative overflow-hidden border-b-8 border-[#1C0863]">
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-red-500">Contact Engineering Desk</span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">Initiate Your Plant Project</h1>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto font-medium">
            Schedule an on-site consultation at our Lahore works or request custom drafting layouts and budgetary breakdowns.
          </p>
        </div>
      </section>

      {/* 2. Form & Contact cards split */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left: Contact Coordinates Card List */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6 justify-between">
            <div className="space-y-6 text-left">
              <span className="text-xs font-black uppercase text-red-800 tracking-widest block">SEMZON Headquarters</span>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 border-b-4 border-black pb-2 mb-4">Get In Touch</h3>
              <p className="text-xs md:text-sm text-slate-600 font-semibold leading-relaxed">
                Contact our head office directly or write to our design department. We respond to all formal turnkey queries with customized drawings within 24 hours.
              </p>

              <div className="space-y-4 pt-4 text-xs font-bold uppercase tracking-wider text-slate-800">
                {/* Address Card */}
                <div className="flex gap-4 p-4 border-3 border-black rounded-none bg-white shadow-[3px_3px_0px_0px_rgba(28,8,99,1)]">
                  <span className="p-3 bg-[#1C0863] text-white rounded-none border border-black shrink-0 flex items-center">
                    <MapPin size={20} />
                  </span>
                  <div className="text-left font-black">
                    <span className="text-[9px] uppercase text-slate-500 block mb-0.5">Physical Factory Works</span>
                    <strong className="text-slate-900 block text-sm uppercase">SEMZON Engineering</strong>
                    <p className="text-slate-600 leading-relaxed normal-case font-bold mt-1">2.5 km Manga Raiwind Road, Manga Mandi, Lahore, Pakistan</p>
                  </div>
                </div>

                {/* Cell Number Card */}
                <div className="flex gap-4 p-4 border-3 border-black rounded-none bg-white shadow-[3px_3px_0px_0px_rgba(28,8,99,1)]">
                  <span className="p-3 bg-[#1C0863] text-white rounded-none border border-black shrink-0 flex items-center">
                    <Phone size={20} />
                  </span>
                  <div className="text-left font-black">
                    <span className="text-[9px] uppercase text-slate-500 block mb-0.5">Cell / WhatsApp Hotlines</span>
                    <a href="tel:03238845411" className="text-slate-900 block text-sm hover:text-red-800 transition-colors">
                      03238845411
                    </a>
                    <p className="text-slate-600 leading-relaxed normal-case font-bold mt-1">Available for immediate mechanical queries and site layouts.</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex gap-4 p-4 border-3 border-black rounded-none bg-white shadow-[3px_3px_0px_0px_rgba(28,8,99,1)]">
                  <span className="p-3 bg-[#1C0863] text-white rounded-none border border-black shrink-0 flex items-center">
                    <Mail size={20} />
                  </span>
                  <div className="text-left font-black">
                    <span className="text-[9px] uppercase text-slate-500 block mb-0.5">Official Inquiries</span>
                    <a href="mailto:semzoneng@gmail.com" className="text-slate-900 block text-sm hover:text-red-800 transition-colors lowercase">
                      semzoneng@gmail.com
                    </a>
                    <p className="text-slate-600 leading-relaxed normal-case font-bold mt-1">Send your purchase tenders, blueprints, and machinery lists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick credentials details */}
            <div className="bg-black text-white p-5 rounded-none border-4 border-red-800 flex items-start gap-3 text-xs uppercase font-black tracking-wider mt-6 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]">
              <Shield size={20} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-black text-white block mb-0.5">Formal Tender Specifications</span>
                Our pricing proposals include full material grade declarations, motor certificates, wiring schemas, and structural integrity reports.
              </div>
            </div>
          </div>

          {/* Right: Technical Consultation Form Panel */}
          <div className="flex-1 bg-white border-4 border-black rounded-none p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(132,12,12,1)]">
            <h3 className="text-lg md:text-2xl font-black uppercase tracking-tight text-slate-900 border-b-2 border-black pb-2 mb-2">Request Turnkey Plant Consultation</h3>
            <p className="text-xs text-slate-500 font-bold mb-6 uppercase tracking-wider leading-relaxed">
              Fill in your plant details below. Our engineering team will review your raw ingredients and site layout parameters.
            </p>

            {formSubmitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-14 h-14 rounded-none border-3 border-emerald-800 bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center font-black text-xl">
                  ✓
                </div>
                <h4 className="text-lg font-black uppercase text-slate-900">Project Request Received</h4>
                <p className="text-xs text-slate-600 font-bold max-w-sm mx-auto uppercase tracking-wide">
                  Thank you for contacting SEMZON. Our senior process architects are preparing custom plant design files for your project. We will call you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs text-left uppercase font-black tracking-wider text-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Company Name *</label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="E.g. Roshan Feeds Pvt. Ltd."
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Contact Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="E.g. Shoukat Ali Gondal"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="E.g. 03238845411"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E.g. customer@example.com"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold normal-case"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Target Plant Field *</label>
                    <select
                      id="contact-plantType"
                      value={formData.plantType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold uppercase text-[10px]"
                    >
                      <option value="poultry">Poultry & Livestock Feed Mill</option>
                      <option value="aqua">Aqua Feed Floating Extruder Line</option>
                      <option value="biomass">Biomass Wood Pellet Line</option>
                      <option value="fertilizer">Organic Fertilizer Compost / SSP</option>
                      <option value="individual">Individual Machinery (Hammer mill, etc.)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-black text-slate-700 mb-1">Target Capacity *</label>
                    <input
                      id="contact-capacity"
                      type="text"
                      required
                      value={formData.capacity}
                      onChange={handleInputChange}
                      placeholder="E.g. 10 Tons/Hour or 50 Tons/Day"
                      className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-black text-slate-700 mb-1">Raw Ingredients & Project Site details</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your raw grain properties, available plot coordinates, and power grid options..."
                    className="w-full px-3.5 py-2.5 border-2 border-black rounded-none focus:outline-none focus:bg-slate-50 font-bold normal-case"
                  />
                </div>

                <button
                  id="btn-contact-submit"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#840C0C] hover:bg-red-950 text-white font-black uppercase text-xs tracking-widest rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <Send size={14} />
                  <span>Request Turnkey Quotation</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Geographic Industrial Map Card */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white border-4 border-black rounded-none p-6 md:p-8 space-y-4 shadow-[8px_8px_0px_0px_rgba(28,8,99,1)]">
          <div className="flex items-center gap-2 text-indigo-900 text-xs font-black uppercase tracking-widest">
            <Globe size={16} />
            <span>Map & Factory Coordinates</span>
          </div>
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Find Our Factory In Lahore</h4>
          <p className="text-xs text-slate-600 font-bold leading-relaxed max-w-xl">
            Our state-of-the-art plant is situated at **2.5 km Manga Raiwind Road, Manga Mandi, Lahore, Pakistan**. Visitors and project directors are welcome to schedule visual machine trials on dynamically balanced rotors.
          </p>

          {/* Interactive simulated maps placeholder with rich vectors */}
          <div className="w-full h-44 bg-black border-2 border-black rounded-none overflow-hidden relative flex items-center justify-center text-center">
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="space-y-2 relative z-10 p-4">
              <MapPin className="text-red-500 mx-auto animate-bounce" size={28} />
              <div className="text-xs font-black text-white uppercase tracking-widest">SEMZON Manufacturing Facility</div>
              <div className="text-[10px] text-slate-400 font-mono font-bold">GPS: 31.2582° N, 74.0725° E | Manga Raiwind Road, Lahore</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
