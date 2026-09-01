"use client";

import React from "react";
import { Store, Megaphone, Eye, BrainCircuit, TrendingUp, Sparkles, HeartHandshake } from "lucide-react";

interface BusinessStoryProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const JOURNEY_STEPS = [
  {
    stage: "01",
    label: "Business",
    title: "Your Passion & Product",
    desc: "You built great food, fitness classes, salon care, or products with authentic craft.",
    icon: <Store className="w-6 h-6 text-brand-gold-400" />,
  },
  {
    stage: "02",
    label: "Advertisement",
    title: "Compelling Creative",
    desc: "We transform your specialty into a sharp, irresistible visual promo for nearby crowds.",
    icon: <Megaphone className="w-6 h-6 text-sky-400" />,
  },
  {
    stage: "03",
    label: "Visibility",
    title: "10-12 Hours Daily",
    desc: "Broadcast on high-brightness digital screens across prime commercial footfall junctions.",
    icon: <Eye className="w-6 h-6 text-emerald-400" />,
  },
  {
    stage: "04",
    label: "Brand Recall",
    title: "Top of Mind",
    desc: "When customers plan a dinner, gym session, or shopping trip, your name comes first.",
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
  },
  {
    stage: "05",
    label: "Growth",
    title: "Sustained Local Success",
    desc: "Higher walk-ins, repeat customers, and an established authority in your neighborhood.",
    icon: <TrendingUp className="w-6 h-6 text-brand-gold-300" />,
  },
];

export const BusinessStory: React.FC<BusinessStoryProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-24 bg-brand-navy-900 overflow-hidden border-t border-brand-navy-800">
      {/* Ambient background rays */}
      <div className="absolute inset-0 bg-dots-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-navy-700/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>The Local Entrepreneur's Journey</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Small Business. <span className="text-gold-gradient">Big Ambition.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            “Every local business has a story, a product and a reason customers should choose them. Our job is to help more people discover it.”
          </p>
        </div>

        {/* Visual Journey: Business → Advertisement → Visibility → Brand Recall → Growth */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-brand-gold-500/20 via-brand-gold-400/80 to-brand-gold-500/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <div
                key={step.stage}
                className="group bg-brand-navy-950/80 hover:bg-brand-navy-850 rounded-2xl p-6 border border-brand-navy-700/80 hover:border-brand-gold-500/50 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-1"
              >
                {/* Step Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-navy-900 border border-brand-navy-700 group-hover:border-brand-gold-500/50 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-inner">
                  {step.icon}
                </div>

                {/* Stage Pill */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-400 font-bold bg-brand-navy-900 px-2 py-0.5 rounded border border-brand-gold-500/20 mb-2">
                  {step.label}
                </span>

                {/* Step Title */}
                <h4 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>

                {/* Arrow connector on mobile/tablet */}
                {index < JOURNEY_STEPS.length - 1 && (
                  <div className="lg:hidden mt-4 text-brand-gold-400/60 text-xs font-mono">
                    ↓ Next Stage
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Emotional Quote Card */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-navy-950 via-brand-navy-900 to-brand-navy-950 border border-brand-gold-500/25 max-w-4xl mx-auto text-center space-y-4 shadow-xl">
          <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
            “When local shops thrive, entire neighborhoods grow stronger. Local Sanchar was created to give local storefronts the same high-impact digital presence that big national chains command.”
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-400">
            — The Local Sanchar Mission
          </div>
        </div>
      </div>
    </section>
  );
};
