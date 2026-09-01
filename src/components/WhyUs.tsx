"use client";

import React from "react";
import { WHY_US_BENEFITS } from "@/lib/data";
import { Tag, MapPin, Tv2, Sparkles, SlidersHorizontal, Radio, ArrowUpRight } from "lucide-react";

interface WhyUsProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const benefitIcons: Record<string, React.ReactNode> = {
  Tag: <Tag className="w-6 h-6 text-brand-gold-400 stroke-[1.75]" />,
  MapPin: <MapPin className="w-6 h-6 text-sky-400 stroke-[1.75]" />,
  Tv2: <Tv2 className="w-6 h-6 text-emerald-400 stroke-[1.75]" />,
  Sparkle: <Sparkles className="w-6 h-6 text-pink-400 stroke-[1.75]" />,
  SlidersHorizontal: <SlidersHorizontal className="w-6 h-6 text-amber-400 stroke-[1.75]" />,
  Radio: <Radio className="w-6 h-6 text-indigo-400 stroke-[1.75]" />,
};

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="why-us" className="relative py-24 bg-brand-navy-950 overflow-hidden border-t border-brand-navy-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400 bg-brand-navy-900 px-3.5 py-1.5 rounded-full border border-brand-gold-500/30">
            The Local Sanchar Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Advertise With <span className="text-gold-gradient">Local Sanchar?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A purposeful, transparent advertising platform engineered for local businesses that want genuine neighborhood impact.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-brand-navy-900/80 hover:bg-brand-navy-850 rounded-2xl p-7 border border-brand-navy-700/70 hover:border-brand-gold-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Corner Micro Accent */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-500 group-hover:text-brand-gold-400 transition-colors">
                #0{index + 1}
              </div>

              <div className="space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-navy-950 border border-brand-navy-700 group-hover:border-brand-gold-500/40 flex items-center justify-center transition-colors shadow-inner">
                  {benefitIcons[benefit.iconName]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl font-black text-white">
              Ready to take your local brand to the next level?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Stop relying only on flyers that get discarded or algorithm shifts on social media. Put your business in front of real customers every day.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenEnquiry) onOpenEnquiry();
              else {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="shrink-0 px-7 py-3.5 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 shadow-gold-sm hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-2"
          >
            <span>Book Your Screen Slot</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
