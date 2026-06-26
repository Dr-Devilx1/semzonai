/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Logo } from "./Logo";
import { PageId } from "../types";
import { Phone, Mail, MapPin, Menu, X, Globe, Shield, FileSpreadsheet } from "lucide-react";

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Machinery" },
    { id: "projects", label: "Projects" },
    { id: "process", label: "Working Process" },
    { id: "global", label: "Global Presence" },
    { id: "tech-docs", label: "Technical Hub" },
    { id: "blog", label: "Insights" },
    { id: "faq", label: "FAQs" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b-4 border-[#1C0863] shadow-md">
      
      {/* Top Bar for trust info and contact details */}
      <div className="bg-[#1C0863] text-white py-2 px-4 md:px-8 text-xs font-bold flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-black">
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-200">
          <a href="tel:03238845411" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
            <Phone size={13} className="text-red-500" />
            <span>03238845411</span>
          </a>
          <a href="mailto:semzoneng@gmail.com" className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
            <Mail size={13} className="text-red-500" />
            <span>semzoneng@gmail.com</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin size={13} className="text-red-500" />
            <span>Manga Raiwind Road, Lahore, Pakistan</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-200 text-[11px] uppercase tracking-wider">
          <div className="flex items-center gap-1 text-emerald-400 font-extrabold">
            <Shield size={12} />
            <span>ISO 9001:2015 Certified</span>
          </div>
          <span className="hidden sm:inline text-slate-600">|</span>
          <div className="flex items-center gap-1 text-indigo-300 font-extrabold">
            <FileSpreadsheet size={12} />
            <span>Turnkey Engineering Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button id="btn-header-logo" onClick={() => handleNavClick("home")} className="focus:outline-none transition-transform hover:scale-105">
          <Logo className="h-11" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map(item => {
            const isActive = currentPage === item.id;
            return (
              <button
                id={`btn-nav-desktop-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all duration-150 border-b-2 relative ${
                  isActive
                    ? "text-[#1C0863] border-[#1C0863] bg-slate-100/50 font-black"
                    : "text-slate-800 border-transparent hover:text-[#1C0863] hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Free quotation button */}
        <div className="hidden xl:flex items-center">
          <button
            id="btn-nav-desktop-quote"
            onClick={() => handleNavClick("contact")}
            className="bg-[#840C0C] hover:bg-red-950 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-none border-2 border-black transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            Request Turnkey Quote
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            id="btn-nav-mobile-quote-shortcut"
            onClick={() => handleNavClick("contact")}
            className="bg-[#840C0C] text-white text-[10px] font-black uppercase tracking-widest px-3.5 py-2 rounded-none border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Quote
          </button>
          
          <button
            id="btn-nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 hover:text-white hover:bg-[#1C0863] rounded-none border border-black transition-all focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="panel-mobile-menu" className="xl:hidden bg-white border-t-2 border-black border-b-4 border-b-[#1C0863] shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`btn-nav-mobile-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-none text-xs font-black uppercase tracking-widest border border-black transition-all ${
                    isActive
                      ? "bg-[#1C0863] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-black"
                      : "bg-white text-slate-900 hover:bg-slate-50 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-slate-200 px-2">
              <p className="text-xs text-slate-600 font-bold mb-3 uppercase tracking-wider">ISO 9001:2015 certified engineering works since 1980.</p>
              <button
                id="btn-nav-mobile-quote-cta"
                onClick={() => handleNavClick("contact")}
                className="w-full bg-[#840C0C] hover:bg-red-950 text-white py-3 rounded-none border-2 border-black text-xs font-black uppercase tracking-widest text-center block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                Request Turnkey Quotation
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
