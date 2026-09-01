"use client";

import React, { useState } from "react";
import { FAQS, CONTACT_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-brand-navy-900 overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Clear Answers. <span className="text-gold-gradient">Zero Ambiguity.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Everything you need to know about local digital advertising, creative formats, and display schedules.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? "bg-brand-navy-850 border-brand-gold-500/50 shadow-lg shadow-black/40"
                    : "bg-brand-navy-950/80 border-brand-navy-700/70 hover:border-brand-navy-600 hover:bg-brand-navy-900/60"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white pr-2 flex items-center gap-3">
                    <span className="text-xs font-mono text-brand-gold-400/80">0{idx + 1}.</span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-gold-400 text-brand-navy-950 rotate-180"
                        : "bg-brand-navy-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-brand-navy-750/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-navy-950 border border-brand-navy-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a specific question about your location?</h4>
            <p className="text-xs text-slate-400">Our local campaign coordinators are available on WhatsApp.</p>
          </div>
          <a
            href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I have a question about advertising in my area")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
