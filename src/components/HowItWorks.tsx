"use client";

import React, { useState } from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { Layers, UploadCloud, Tv, Eye, CheckCircle2, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const stepIcons: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-brand-gold-400 stroke-[1.75]" />,
  UploadCloud: <UploadCloud className="w-6 h-6 text-sky-400 stroke-[1.75]" />,
  Tv: <Tv className="w-6 h-6 text-emerald-400 stroke-[1.75]" />,
  Eye: <Eye className="w-6 h-6 text-brand-gold-300 stroke-[1.75]" />,
};

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 bg-brand-navy-900 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-400 bg-brand-navy-800 px-3.5 py-1.5 rounded-full border border-brand-gold-500/30">
            Frictionless 4-Step Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From Your Business to <span className="text-gold-gradient">Your Audience.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No technical knowledge required. We make launching your digital outdoor presence completely seamless.
          </p>
        </div>

        {/* 4-Step Horizontal Process Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-gold-500/20 via-brand-gold-400/60 to-brand-gold-500/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col items-center text-center relative border ${
                    isSelected
                      ? "bg-brand-navy-800/90 border-brand-gold-500/60 shadow-gold-md -translate-y-2"
                      : "bg-brand-navy-950/70 border-brand-navy-700/60 hover:border-brand-navy-600 hover:bg-brand-navy-900/60"
                  }`}
                >
                  {/* Step Number Bubble */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg mb-6 transition-all duration-300 shadow-inner ${
                      isSelected
                        ? "bg-brand-gold-400 text-brand-navy-950 scale-110 shadow-gold-sm"
                        : "bg-brand-navy-900 text-brand-gold-400 border border-brand-gold-500/30"
                    }`}
                  >
                    {stepIcons[step.iconName]}
                  </div>

                  {/* Step Sequence Badge */}
                  <span className="text-xs font-mono font-semibold tracking-wider text-brand-gold-400 mb-2">
                    STEP {step.stepNumber}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>

                  {/* Active Indicator Bar */}
                  <div
                    className={`w-12 h-1 rounded-full mt-6 transition-all duration-300 ${
                      isSelected ? "bg-brand-gold-400" : "bg-transparent"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Launch Bottom Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-brand-navy-950 border border-brand-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Fast Turnaround Guaranteed</div>
              <div className="text-xs text-slate-400">Launch on screen within 24 hours of creative approval</div>
            </div>
          </div>

          <button
            onClick={() => {
              if (onOpenEnquiry) onOpenEnquiry();
              else {
                const contact = document.getElementById("contact");
                contact?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:shadow-gold-sm transition-all"
          >
            <span>Start Step 01 Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
