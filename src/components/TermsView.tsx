/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Scale } from "lucide-react";

export const TermsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-left space-y-8 text-xs md:text-sm text-slate-755 leading-relaxed font-semibold bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_rgba(28,8,99,1)] my-12">
      <div className="flex items-center gap-3 border-b-4 border-black pb-5">
        <span className="p-3 bg-[#840C0C] text-white rounded-none border-2 border-black">
          <Scale size={24} />
        </span>
        <div>
          <h1 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Terms and Conditions</h1>
          <p className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mt-1">Last updated: June 2026</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">1. Validity of Quotes</h3>
        <p className="normal-case">
          All technical quotations, mechanical pricing lists, delivery times, and layout drafts supplied by SEMZON are valid for a period of **30 days** from the date of issue, owing to global raw steel and components price fluctuations.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">2. Turnkey Warranties</h3>
        <p className="normal-case">
          Machinery warranties (12 months) cover pure manufacturing faults or premature weld fatigue under standard operating parameters described in our English/Urdu manuals. Failure caused by introducing raw metals into mills or operating without grease nullifies the warranty.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-1">3. Governing Jurisdiction</h3>
        <p className="normal-case">
          Any commercial disputes, purchase agreements, or site performance claims are governed by the industrial laws and arbitration procedures of Lahore, Pakistan, where our fabrication units reside.
        </p>
      </div>
    </div>
  );
};
