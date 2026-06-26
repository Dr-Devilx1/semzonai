/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck } from "lucide-react";

export const PrivacyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-left space-y-8 text-xs md:text-sm text-slate-750 leading-relaxed font-semibold bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(28,8,99,1)] my-12">
      <div className="flex items-center gap-3 border-b-4 border-black pb-5">
        <span className="p-3 bg-[#840C0C] text-white rounded-none border-2 border-black">
          <ShieldCheck size={24} />
        </span>
        <div>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mt-1">Last updated: June 2026</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">1. Information Collection</h3>
        <p className="normal-case">
          We collect and store information provided through our contact forms, plant specs calculators, and quote request forms. This information includes your company name, personal contact name, phone number, email address, and technical specifications regarding your project.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">2. Use of Information</h3>
        <p className="normal-case">
          We use the collected information exclusively to prepare customized CAD blueprints, estimate structural equipment pricing, and establish communication during direct plant consulting services. We do not sell or lease your commercial data to third-party marketing companies.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">3. Information Protection</h3>
        <p className="normal-case">
          All technical drawings, recipes, site coordinates, and capacity estimations are treated as strictly confidential proprietary assets of your business. These documents are stored within secured company drives to prevent intellectual theft or unauthorized leaking.
        </p>
      </div>
    </div>
  );
};
