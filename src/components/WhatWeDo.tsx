"use client";

import React from "react";
import { WHAT_WE_DO_CARDS } from "@/lib/data";
import { MonitorPlay, Film, Share2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface WhatWeDoProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  MonitorPlay: <MonitorPlay className="w-7 h-7 text-brand-gold-400 stroke-[1.5]" />,
  Film: <Film className="w-7 h-7 text-sky-400 stroke-[1.5]" />,
  Share2: <Share2 className="w-7 h-7 text-brand-gold-300 stroke-[1.5]" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-amber-400 stroke-[1.5]" />,
};

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="what-we-do" className="relative py-24 bg-brand-navy-950/80 overflow-hidden border-t border-brand-navy-800">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            We Make Local Businesses <span className="text-gold-gradient">Visible.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Great businesses deserve great visibility. Local Sanchar connects your brand with potential customers through strategically placed digital advertising.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_WE_DO_CARDS.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-brand-navy-900/80 hover:bg-brand-navy-800/90 rounded-2xl p-7 border border-brand-navy-700/70 hover:border-brand-gold-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Card Decorator */}
              <div className="absolute top-0 right-7 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-brand-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                {/* Minimal Line Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 group-hover:border-brand-gold-500/40 flex items-center justify-center transition-colors shadow-inner">
                  {iconMap[card.iconName]}
                </div>

                {/* Card Title & Text */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Step Number */}
              <div className="mt-6 pt-4 border-t border-brand-navy-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>PILLAR 0{index + 1}</span>
                <span className="text-brand-gold-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
