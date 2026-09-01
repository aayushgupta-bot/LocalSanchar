"use client";

import React from "react";
import { CONTACT_INFO } from "@/lib/data";
import { ArrowUpRight, PhoneCall, Sparkles, MessageCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 overflow-hidden text-center border-t border-brand-navy-800">
      {/* Background Animated Light & Rays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy-800 border border-brand-gold-500/40 text-xs font-bold uppercase tracking-wider text-brand-gold-300 shadow-gold-sm">
          <Sparkles className="w-4 h-4 text-brand-gold-400" />
          <span>Launch Your First Screen Campaign</span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Make Your <br />
          <span className="text-gold-shimmer">Business Visible?</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal">
          Start advertising with Local Sanchar from just ₹300.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              if (onOpenEnquiry) onOpenEnquiry();
              else {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-base text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 shadow-gold-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Advertise With Us</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I would like to talk about advertising packages")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base text-white bg-brand-navy-800 hover:bg-brand-navy-700 border border-brand-navy-700 hover:border-brand-gold-500/40 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Talk to Our Team</span>
          </a>
        </div>

        {/* Categories Strip strictly from prompt */}
        <div className="pt-8 border-t border-brand-navy-800/80">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
            Restaurants <span className="text-brand-gold-400">•</span> Gyms <span className="text-brand-gold-400">•</span> Salons <span className="text-brand-gold-400">•</span> Clinics <span className="text-brand-gold-400">•</span> Cafés <span className="text-brand-gold-400">•</span> Retail <span className="text-brand-gold-400">•</span> Local Brands
          </p>
        </div>
      </div>
    </section>
  );
};
