/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Logo } from "./Logo";
import { PageId } from "../types";
import { Mail, Phone, MapPin, Award, CheckCircle2, ChevronRight, ArrowUpRight } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  
  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-slate-300 border-t-8 border-[#1C0863] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand & Credentials */}
        <div className="space-y-6">
          <Logo light className="h-12" />
          <p className="text-xs text-slate-400 leading-relaxed pt-2">
            Established in 1980 in Lahore, Pakistan, SEMZON Engineering has delivered over four decades of premium turnkey solutions for livestock, poultry, aquaculture, bio-energy, and bio-fertilizer industries.
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-widest">
              <Award size={16} />
              <span>ISO 9001:2015 Registered</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <CheckCircle2 size={15} className="text-red-500 shrink-0" />
              <span>PCSIR Tested & Approved Designs</span>
            </div>
          </div>
        </div>

        {/* Column 2: Turnkey Engineering Plants */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-4 border-red-700 pl-3 mb-6">
            Turnkey Plants
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleNavClick("products")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Poultry & Livestock Feed Mills</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("products")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Extruded Floating Aqua Feed Plants</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("products")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Biomass Wood Pellet Production Lines</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("products")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Organic Compost & Fertilizer Plants</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("products")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>SSP & BOP Fertilizer Granulators</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation Links */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-4 border-red-700 pl-3 mb-6">
            Company Resources
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li>
              <button onClick={() => handleNavClick("about")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>About SEMZON Group</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("services")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Turnkey Operations Flow</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("process")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>9-Step Working Process</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("global")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Global Trading & Markets</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("tech-docs")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left text-indigo-400 hover:text-white font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Multilingual Technical Hub</span>
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick("faq")} className="hover:text-white flex items-center gap-1.5 transition-colors text-left font-bold">
                <ChevronRight size={12} className="text-red-500" />
                <span>Technical FAQs</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Locations */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest border-l-4 border-red-700 pl-3 mb-6">
            Head Office
          </h4>
          <ul className="space-y-4 text-xs text-slate-400">
            <li className="flex items-start gap-3 font-bold text-slate-300">
              <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                2.5 km Manga Raiwind Road, Manga Mandi, Lahore, Pakistan
              </span>
            </li>
            <li className="flex items-center gap-3 font-bold text-slate-300">
              <Phone size={16} className="text-red-500 shrink-0" />
              <a href="tel:03238845411" className="hover:text-white transition-colors">
                03238845411
              </a>
            </li>
            <li className="flex items-center gap-3 font-bold text-slate-300">
              <Mail size={16} className="text-red-500 shrink-0" />
              <a href="mailto:semzoneng@gmail.com" className="hover:text-white transition-colors">
                semzoneng@gmail.com
              </a>
            </li>
            <li className="pt-2">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#840C0C] hover:bg-red-950 text-white font-black uppercase text-[10px] tracking-widest rounded-none border-2 border-slate-200 transition-colors shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>Inquire Online</span>
                <ArrowUpRight size={13} />
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright row */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <div>
          <p>© {new Date().getFullYear()} SEMZON Engineering. All Rights Reserved. Manufactured in Lahore, Pakistan.</p>
          <p className="text-[10px] text-slate-600 mt-1">ISO 9001:2015 registration certificate and PCSIR testing certifications apply to industrial machinery outputs.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={() => handleNavClick("privacy")} className="hover:text-slate-300 transition-colors">Privacy Policy</button>
          <span>•</span>
          <button onClick={() => handleNavClick("terms")} className="hover:text-slate-300 transition-colors">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};
