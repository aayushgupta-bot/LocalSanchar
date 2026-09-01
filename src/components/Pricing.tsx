"use client";

import React, { useState } from "react";
import { PACKAGES, PackageItem } from "@/lib/data";
import { Check, Sparkles, Shield, ArrowRight, Star, HelpCircle } from "lucide-react";

interface PricingProps {
  onSelectPackage?: (packageName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>("premium");

  const handlePackageClick = (pkg: PackageItem) => {
    setSelectedPkgId(pkg.id);
    if (onSelectPackage) {
      onSelectPackage(`${pkg.price} ${pkg.name} (${pkg.duration.replace('/', '').trim()})`);
    } else {
      const contact = document.getElementById("contact");
      contact?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="relative py-28 bg-brand-navy-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[600px] bg-brand-navy-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Plans</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Simple Pricing. <span className="text-gold-gradient">Powerful Visibility.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Transparent pricing tailored for every stage of local business growth. No hidden agency retainers.
          </p>
        </div>

        {/* 4-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFlagship = pkg.isBestValue;
            const isGrowth = pkg.isPopular;
            const isPro = pkg.id === "professional";

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 border ${
                  isFlagship
                    ? "bg-gradient-to-b from-brand-navy-800 via-brand-navy-850 to-brand-navy-950 border-brand-gold-400 shadow-gold-glow lg:-translate-y-3 ring-1 ring-brand-gold-400/40"
                    : isPro
                    ? "bg-brand-navy-850/90 border-brand-gold-500/40 shadow-xl"
                    : isGrowth
                    ? "bg-brand-navy-850/80 border-sky-500/40 shadow-xl"
                    : "bg-brand-navy-950/80 border-brand-navy-700/80 shadow-lg hover:border-brand-navy-600"
                }`}
              >
                {/* Badges */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md inline-flex items-center gap-1.5 ${
                        isFlagship
                          ? "bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 text-brand-navy-950"
                          : "bg-sky-500 text-white"
                      }`}
                    >
                      {isFlagship ? <Star className="w-3 h-3 fill-current" /> : null}
                      <span>{pkg.badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black tracking-wide text-white">
                        {pkg.name}
                      </h3>
                      {pkg.perMonthEquivalent && (
                        <span className="text-[11px] font-semibold text-brand-gold-300 bg-brand-navy-900 px-2 py-0.5 rounded-md border border-brand-gold-500/20">
                          {pkg.perMonthEquivalent}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 min-h-[32px] leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-brand-navy-700/60 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-4xl sm:text-5xl font-black text-white">
                        {pkg.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-300">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="text-[11px] text-brand-gold-400/90 font-medium mt-1">
                      10–12 hours daily active display
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isFlagship
                                ? "bg-brand-gold-400/20 text-brand-gold-400"
                                : "bg-emerald-500/20 text-emerald-400"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA & Ideal For */}
                <div className="space-y-4 pt-4 border-t border-brand-navy-800">
                  <button
                    onClick={() => handlePackageClick(pkg)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                      isFlagship
                        ? "bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 text-brand-navy-950 shadow-gold-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98]"
                        : isPro || isGrowth
                        ? "bg-brand-navy-700 hover:bg-brand-navy-600 text-white border border-brand-gold-500/40 hover:border-brand-gold-400"
                        : "bg-brand-navy-800 hover:bg-brand-navy-700 text-slate-200 border border-brand-navy-700"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    <span className="font-semibold text-slate-300">Best for: </span>
                    {pkg.targetAudience}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee & Clarity Footnote */}
        <div className="mt-12 p-5 rounded-2xl bg-brand-navy-950/80 border border-brand-navy-700/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-brand-gold-400 shrink-0" />
            <span>
              All campaigns include proof-of-play screen logs and transparent daily display schedules.
            </span>
          </div>
          <a
            href="#faq"
            className="text-brand-gold-400 font-bold hover:underline whitespace-nowrap"
          >
            Have pricing questions? Read FAQs
          </a>
        </div>
      </div>
    </section>
  );
};
