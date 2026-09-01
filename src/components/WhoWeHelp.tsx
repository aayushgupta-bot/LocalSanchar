"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BUSINESS_CATEGORIES, BusinessCategory } from "@/lib/data";
import {
  Utensils,
  Dumbbell,
  Sparkles,
  Coffee,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ArrowRight,
  Check,
} from "lucide-react";

interface WhoWeHelpProps {
  onSelectCategory?: (categoryId: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-5 h-5 text-amber-400" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-sky-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Coffee: <Coffee className="w-5 h-5 text-orange-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-yellow-400" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-400" />,
  Award: <Award className="w-5 h-5 text-brand-gold-400" />,
  Building2: <Building2 className="w-5 h-5 text-purple-400" />,
  Calendar: <Calendar className="w-5 h-5 text-rose-400" />,
};

export const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ onSelectCategory }) => {
  const [selectedCat, setSelectedCat] = useState<BusinessCategory | null>(null);

  const handleCardClick = (cat: BusinessCategory) => {
    if (onSelectCategory) {
      onSelectCategory(cat.name);
    } else {
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="relative py-24 bg-brand-navy-950 overflow-hidden border-t border-brand-navy-800">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400 bg-brand-navy-900 px-3.5 py-1.5 rounded-full border border-brand-gold-500/30">
            Targeted Local Ecosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for Businesses That Want to <span className="text-gold-gradient">Grow Locally.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailored digital advertising formats customized for every high-street category.
          </p>
        </div>

        {/* 10 Business Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {BUSINESS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat)}
              className="group cursor-pointer relative bg-brand-navy-900/90 hover:bg-brand-navy-850 rounded-2xl p-5 border border-brand-navy-700/70 hover:border-brand-gold-500/60 shadow-lg hover:shadow-gold-sm transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon and Category Title */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-brand-navy-950 border border-brand-navy-700 flex items-center justify-center shadow-inner group-hover:border-brand-gold-500/40 transition-colors">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-brand-gold-400 transition-colors">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-brand-gold-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {cat.tagline}
                  </p>
                </div>
              </div>

              {/* Hover Trigger Action */}
              <div className="mt-5 pt-3.5 border-t border-brand-navy-800 flex items-center justify-between text-xs font-semibold text-brand-gold-400 group-hover:text-brand-gold-300 transition-colors">
                <span className="tracking-wide">Advertise your offer</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Category Benefits Summary Bar */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Have a unique local business category not listed here?{" "}
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory("Other Local Business");
                else {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-brand-gold-400 font-bold hover:underline ml-1 inline-flex items-center gap-1"
            >
              <span>Talk to our local campaign strategist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
