/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { DOC_ARTICLES } from "../data/docs";
import { Search, Globe, Download, HelpCircle, FileText, Settings, ShieldAlert, BookOpen, X } from "lucide-react";

type Lang = "en" | "ur" | "zh" | "ar";

export const DocHub: React.FC = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedDoc, setExpandedDoc] = useState<string | null>("pellet-mill-maintenance");
  const [notification, setNotification] = useState<string | null>(null);

  const categories = [
    { id: "all", label: { en: "All Manuals", ur: "تمام مینوئلز", zh: "所有手册", ar: "جميع الكتيبات" } },
    { id: "installation", label: { en: "Installation", ur: "انسٹالیشن", zh: "安装指南", ar: "التركيب" } },
    { id: "operation", label: { en: "Operation", ur: "آپریشن گائیڈ", zh: "操作规程", ar: "التشغيل" } },
    { id: "maintenance", label: { en: "Maintenance", ur: "دیکھ بھال", zh: "维护保养", ar: "الصيانة" } },
    { id: "plc", label: { en: "Automation / PLC", ur: "آٹومیشن اور پی ایل سی", zh: "自动化与PLC", ar: "الأتمتة والتحكم" } }
  ];

  const languageNames = {
    en: { name: "English", native: "English", dir: "ltr" },
    ur: { name: "Urdu", native: "اردو", dir: "rtl" },
    zh: { name: "Chinese", native: "简体中文", dir: "ltr" },
    ar: { name: "Arabic", native: "العربية", dir: "rtl" }
  };

  // Filter docs
  const filteredDocs = DOC_ARTICLES.filter(doc => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const titleText = doc.title[lang].toLowerCase();
    const summaryText = doc.summary[lang].toLowerCase();
    const contentText = doc.content[lang].toLowerCase();
    const matchesSearch =
      titleText.includes(searchQuery.toLowerCase()) ||
      summaryText.includes(searchQuery.toLowerCase()) ||
      contentText.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const isRtl = languageNames[lang].dir === "rtl";

  // Quick texts translated
  const t = {
    searchPlaceholder: {
      en: "Search technical documentation...",
      ur: "تکنیکی دستاویزات تلاش کریں...",
      zh: "搜索技术文档...",
      ar: "البحث في الوثائق الفنية..."
    },
    quickSpecs: {
      en: "Critical Parameters",
      ur: "اہم تکنیکی پیرامیٹرز",
      zh: "关键技术参数",
      ar: "المعلمات الحرجة"
    },
    downloadPdf: {
      en: "Download PDF Specification",
      ur: "پی ڈی ایف فائل ڈاؤن لوڈ کریں",
      zh: "下载 PDF 说明书",
      ar: "تحميل مواصفات PDF"
    },
    supportButton: {
      en: "Request Engineering Support",
      ur: "انجینئرنگ سپورٹ کی درخواست",
      zh: "申请工程技术支持",
      ar: "طلب دعم هندسي"
    },
    noResults: {
      en: "No documentation found matching your filters.",
      ur: "تلاش کے مطابق کوئی دستاویز نہیں ملی۔",
      zh: "未找到符合筛选条件的技术文档。",
      ar: "لم يتم العثور على وثائق تطابق الفلاتر."
    },
    disclaimer: {
      en: "Important: These manuals are intended for certified SEMZON technicians and experienced plant operators. Always isolate power before performing maintenance.",
      ur: "اہم نوٹ: یہ مینوئلز صرف سرٹیفائیڈ سیمزون ٹیکنیشنز اور تجربہ کار آپریٹرز کے لیے ہیں۔ دیکھ بھال کے کام سے پہلے بجلی بند کرنا لازمی ہے۔",
      zh: "重要提示：这些手册仅面向经过认证的 SEMZON 技术人员及经验丰富的工厂操作员。执行任何维护前，请务必切断电源并锁定。",
      ar: "هام: هذه الكتيبات مخصصة لفنيي SEMZON المعتمدين ومشغلي المصانع ذوي الخبرة. قم دائماً بعزل الطاقة قبل إجراء الصيانة."
    }
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  return (
    <div id="multilingual-doc-hub" className="bg-white rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(28,8,99,1)] overflow-hidden">
      
      {/* Custom Brutalist Toast Notification */}
      {notification && (
        <div className="bg-emerald-500 text-black border-b-4 border-black px-4 py-3 font-black uppercase text-xs tracking-widest flex justify-between items-center z-50 relative">
          <span>✓ {notification}</span>
          <button onClick={() => setNotification(null)} className="hover:bg-emerald-600 p-1">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Top Header Section */}
      <div className="bg-black text-white p-6 md:p-8 border-b-4 border-black">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-[#840C0C] text-white border border-white rounded-none">
              <BookOpen size={24} />
            </span>
            <div>
              <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight">SEMZON Technical Hub</h3>
              <p className="text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">Multilingual manuals, operation blueprints, and technical safety guides since 1980.</p>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900 p-1.5 rounded-none border-2 border-white self-stretch md:self-auto shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            {(Object.keys(languageNames) as Lang[]).map(l => (
              <button
                id={`btn-doc-lang-${l}`}
                key={l}
                onClick={() => setLang(l)}
                className={`flex-1 md:flex-none px-3 py-1.5 rounded-none text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 ${
                  lang === l
                    ? "bg-[#840C0C] text-white border border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Globe size={11} />
                <span>{languageNames[l].native}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Categories */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              id="input-doc-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder[lang]}
              className="w-full pl-10 pr-4 py-3 bg-slate-900 border-2 border-white rounded-none text-xs font-bold uppercase tracking-widest text-white placeholder-slate-400 focus:outline-none focus:bg-black transition-all"
            />
          </div>

          {/* Categories select or scroll */}
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                id={`btn-doc-cat-${cat.id}`}
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-none text-[10px] font-black uppercase tracking-widest border-2 transition-all ${
                  selectedCategory === cat.id
                    ? "bg-white text-[#1C0863] border-white shadow-[2px_2px_0px_0px_rgba(28,8,99,1)]"
                    : "bg-slate-900 text-slate-300 border-slate-700 hover:bg-black"
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Document Title list */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {filteredDocs.length === 0 ? (
              <div className="text-center py-12 px-4 border-3 border-dashed border-black rounded-none bg-slate-50">
                <FileText className="mx-auto text-slate-400 mb-2" size={32} />
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.noResults[lang]}</p>
              </div>
            ) : (
              filteredDocs.map(doc => (
                <button
                  id={`btn-doc-select-${doc.id}`}
                  key={doc.id}
                  onClick={() => setExpandedDoc(doc.id)}
                  className={`p-4 rounded-none border-3 text-left transition-all flex flex-col gap-2 ${
                    expandedDoc === doc.id
                      ? "border-[#1C0863] bg-indigo-50/10 shadow-[4px_4px_0px_0px_rgba(28,8,99,1)]"
                      : "border-black hover:border-red-800 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]"
                  }`}
                  style={{ direction: isRtl ? "rtl" : "ltr" }}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`p-1.5 rounded-none border border-black shrink-0 ${expandedDoc === doc.id ? "bg-black text-white" : "bg-slate-100 text-slate-700"}`}>
                      <FileText size={16} />
                    </span>
                    <div className="flex-1 min-w-0 font-black uppercase tracking-tight">
                      <span className="text-[9px] font-black text-red-800 tracking-widest block mb-0.5">{doc.category}</span>
                      <h4 className="text-xs text-slate-950 leading-tight line-clamp-2">{doc.title[lang]}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold line-clamp-2 pl-7">{doc.summary[lang]}</p>
                </button>
              ))
            )}
          </div>

          {/* Right Column: Active Document Viewer */}
          <div className="flex-1 bg-white border-4 border-black rounded-none p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(132,12,12,1)]">
            {expandedDoc ? (() => {
              const doc = DOC_ARTICLES.find(d => d.id === expandedDoc);
              if (!doc) return null;

              return (
                <div className="space-y-6" style={{ direction: isRtl ? "rtl" : "ltr" }}>
                  
                  {/* Title & category */}
                  <div className="border-b-4 border-black pb-5">
                    <span className="px-2.5 py-1 bg-red-50 text-[#840C0C] border-2 border-[#840C0C] rounded-none text-xs font-black uppercase tracking-widest mb-2.5 inline-block">
                      {doc.category} MANUAL
                    </span>
                    <h2 className="text-xl md:text-3xl font-black text-slate-900 uppercase leading-none tracking-tight">
                      {doc.title[lang]}
                    </h2>
                  </div>

                  {/* Safety alerts disclaimer */}
                  <div className="bg-amber-50 border-3 border-amber-500 p-4 rounded-none text-xs text-amber-950 uppercase tracking-wider font-black leading-relaxed flex items-start gap-3 shadow-[2px_2px_0px_0px_rgba(245,158,11,0.15)]">
                    <ShieldAlert size={18} className="text-amber-700 shrink-0 mt-0.5" />
                    <p>{t.disclaimer[lang]}</p>
                  </div>

                  {/* HTML formatted content - beautifully styled markdown-like with custom list spacing */}
                  <div className="text-slate-800 leading-relaxed text-xs md:text-sm font-semibold space-y-4">
                    {doc.content[lang].split("\n\n").map((para, i) => {
                      if (para.startsWith("###")) {
                        return (
                          <h4 key={i} className="text-sm md:text-base font-black text-slate-900 pt-3 flex items-center gap-2 uppercase tracking-wide border-b border-slate-200 pb-1">
                            <Settings size={16} className="text-[#840C0C] shrink-0" />
                            {para.replace("###", "").trim()}
                          </h4>
                        );
                      }
                      if (para.startsWith("*")) {
                        return (
                          <ul key={i} className="list-disc pl-6 space-y-1.5 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                            {para.split("\n").map((line, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {line.replace("*", "").trim()}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      if (para.match(/^\d+\./)) {
                        return (
                          <ol key={i} className="list-decimal pl-6 space-y-2 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                            {para.split("\n").map((line, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {line.replace(/^\d+\./, "").trim()}
                              </li>
                            ))}
                          </ol>
                        );
                      }
                      return <p key={i}>{para}</p>;
                    })}
                  </div>

                  {/* Critical parameters table */}
                  {doc.specs && (
                    <div className="bg-slate-50 border-3 border-black rounded-none p-4 md:p-5 mt-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <h4 className="text-xs font-black uppercase text-slate-900 tracking-widest mb-3.5 border-b-2 border-black pb-1">
                        {t.quickSpecs[lang]}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {doc.specs.map((spec, index) => (
                          <div key={index} className="flex justify-between border-b border-slate-200 pb-2 text-xs uppercase font-bold">
                            <span className="text-slate-500">{spec.label}</span>
                            <span className="text-slate-950 font-black font-mono">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive actions block */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-slate-100">
                    <button
                      id="btn-doc-download-pdf"
                      onClick={() => showNotification(`PDF compilation prepared for ${doc.title[lang]}`)}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-950 hover:bg-black text-white rounded-none border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(132,12,12,1)] transition-all"
                    >
                      <Download size={15} />
                      {t.downloadPdf[lang]}
                    </button>
                    <button
                      id="btn-doc-engineer-support"
                      onClick={() => showNotification(`Engineering desk has received a support request regarding: ${doc.title[lang]}`)}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-[#1C0863] hover:bg-indigo-900 text-white rounded-none border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <HelpCircle size={15} />
                      {t.supportButton[lang]}
                    </button>
                  </div>

                </div>
              );
            })() : (
              <div className="text-center py-24 text-slate-400">
                <FileText className="mx-auto text-slate-300 mb-3" size={48} />
                <p className="text-sm">Select a technical manual from the left list to view specifications.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
