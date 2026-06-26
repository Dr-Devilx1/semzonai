/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeView } from "./components/HomeView";
import { AboutView } from "./components/AboutView";
import { ServicesView } from "./components/ServicesView";
import { ProductsView } from "./components/ProductsView";
import { ProjectsView } from "./components/ProjectsView";
import { ProcessView } from "./components/ProcessView";
import { GlobalView } from "./components/GlobalView";
import { DocHub } from "./components/DocHub";
import { BlogView } from "./components/BlogView";
import { FAQView } from "./components/FAQView";
import { PrivacyView } from "./components/PrivacyView";
import { TermsView } from "./components/TermsView";
import { PageId } from "./types";
import { ContactView } from "./components/ContactView";
import { HeartHandshake, PhoneCall, Award } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");

  // Keep page changes synchronized with smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return <HomeView setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView />;
      case "products":
        return <ProductsView />;
      case "projects":
        return <ProjectsView />;
      case "process":
        return <ProcessView />;
      case "global":
        return <GlobalView />;
      case "tech-docs":
        return <DocHub />;
      case "blog":
        return <BlogView />;
      case "faq":
        return <FAQView />;
      case "contact":
        return <ContactView />;
      case "privacy":
        return <PrivacyView />;
      case "terms":
        return <TermsView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 font-sans selection:bg-red-800 selection:text-white">
      {/* Global Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Stage with Framer Motion Page Transition animations */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating immediate action CTA widget for phone calls / WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          id="floating-cta-phone"
          href="tel:03238845411"
          className="flex items-center gap-2.5 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:scale-105 transition-all group"
          title="Call Technical Support"
        >
          <PhoneCall size={20} className="group-hover:animate-bounce" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            03238845411 Support
          </span>
        </a>
      </div>

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
