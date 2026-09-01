"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, MapPin, Tag, Star } from "lucide-react";

interface SampleShowcaseProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const SAMPLE_CREATIVES = [
  {
    id: "restaurant",
    category: "Restaurant",
    brand: "Zaika Grand Mughlai & Biryani",
    headline: "ROYAL WEEKEND DUM BIRYANI",
    offer: "Flat 20% OFF on Family Platters",
    ctaLine: "Order or Dine-in Now",
    location: "Koramangala 5th Block Junction",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    badge: "Food & Dining",
    color: "#E2C76B",
  },
  {
    id: "gym",
    category: "Gym & Fitness",
    brand: "Titan Iron Fitness Center",
    headline: "NEW YEAR NEW STRENGTH",
    offer: "Join @ ₹999/mo + Free Diet Plan",
    ctaLine: "Claim Free 2-Day Trial Pass",
    location: "Opposite Metro Station Pillar 128",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    badge: "Health & Fitness",
    color: "#38BDF8",
  },
  {
    id: "salon",
    category: "Salon & Spa",
    brand: "Bliss & Bloom Unisex Salon",
    headline: "BRIDAL & FESTIVE GLOW",
    offer: "Complete Makeover Packages @ ₹1,499",
    ctaLine: "Book Slot on WhatsApp",
    location: "Commercial Complex, 1st Floor",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    badge: "Beauty & Grooming",
    color: "#F472B6",
  },
  {
    id: "cafe",
    category: "Café & Bakery",
    brand: "The Corner Roastery & Bakes",
    headline: "YOUR COFFEE. YOUR PLACE.",
    offer: "Buy 1 Artisan Brew, Get 1 Dessert at 50% OFF",
    ctaLine: "Free Wi-Fi • Cozy Workspaces",
    location: "Near City College Gate 4",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    badge: "Café & Bistro",
    color: "#FB923C",
  },
  {
    id: "retail",
    category: "Retail Store",
    brand: "Heritage Silk & Ethnic Studio",
    headline: "FESTIVE MEGA CLEARANCE SALE",
    offer: "Up to 50% OFF On Designer Sarees & Kurtis",
    ctaLine: "Fresh Stock Just Arrived",
    location: "Main Market Main Street",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    badge: "Ethnic & Western Wear",
    color: "#C9A44C",
  },
  {
    id: "coaching",
    category: "Coaching Institute",
    brand: "Pinnacle Academy for JEE & NEET",
    headline: "ADMISSIONS OPEN 2026-27",
    offer: "Early Registration Scholarship: Up to 90% Waiver",
    ctaLine: "Expert Faculty • Small Batches",
    location: "Education Hub Ring Road",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    badge: "Academics & Careers",
    color: "#60A5FA",
  },
];

export const SampleShowcase: React.FC<SampleShowcaseProps> = ({ onOpenEnquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SAMPLE_CREATIVES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SAMPLE_CREATIVES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-brand-navy-950 overflow-hidden border-t border-brand-navy-800">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real High-Impact Creatives</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              See What Your Brand <br />
              <span className="text-gold-gradient">Could Look Like.</span>
            </h2>

            <p className="text-base text-slate-300">
              Clean typography, high-contrast graphics, and clear offers designed specifically for quick commercial display recall.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous sample creative"
              className="p-3 rounded-full bg-brand-navy-900 border border-brand-navy-700 text-slate-300 hover:text-white hover:border-brand-gold-400 hover:bg-brand-navy-800 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next sample creative"
              className="p-3 rounded-full bg-brand-navy-900 border border-brand-navy-700 text-slate-300 hover:text-white hover:border-brand-gold-400 hover:bg-brand-navy-800 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid / Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_CREATIVES.map((sample, idx) => (
            <div
              key={sample.id}
              className="group relative rounded-2xl bg-brand-navy-900 border border-brand-navy-700/80 hover:border-brand-gold-500/50 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top Ad Banner Preview */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <Image
                  src={sample.image}
                  alt={sample.brand}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.70]"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-900 via-transparent to-black/60" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-brand-navy-950/80 text-brand-gold-400 border border-brand-gold-500/30 backdrop-blur-md">
                    {sample.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-200 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                    <MapPin className="w-3 h-3 text-brand-gold-400" />
                    <span className="truncate max-w-[120px]">{sample.location}</span>
                  </div>
                </div>

                {/* Simulated Screen Glow on Bottom of Photo */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <div className="text-[11px] font-mono text-brand-gold-300 font-semibold uppercase">
                    {sample.brand}
                  </div>
                  <div className="text-lg font-black text-white leading-tight drop-shadow">
                    {sample.headline}
                  </div>
                </div>
              </div>

              {/* Ad Offer & Details Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-brand-gold-500/20 text-brand-gold-300 border border-brand-gold-500/30 font-bold text-xs">
                    {sample.offer}
                  </div>
                  <p className="text-xs text-slate-300">
                    {sample.ctaLine}
                  </p>
                </div>

                {/* Micro Action Button */}
                <button
                  onClick={() => {
                    if (onOpenEnquiry) onOpenEnquiry(sample.category);
                    else {
                      const contact = document.getElementById("contact");
                      contact?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="pt-3 border-t border-brand-navy-800 flex items-center justify-between text-xs font-semibold text-brand-gold-400 group-hover:text-brand-gold-300 w-full"
                >
                  <span>Build an Ad for {sample.category}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Invitation Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-navy-900 via-brand-navy-850 to-brand-navy-900 border border-brand-gold-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <h3 className="text-2xl font-black text-white">
              Want your business featured here?
            </h3>
            <p className="text-sm text-slate-300">
              Send us your offer details and we will format it for 10–12 hours daily high-visibility display.
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
            className="shrink-0 px-8 py-4 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Create My Advertisement</span>
          </button>
        </div>
      </div>
    </section>
  );
};
