"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tv, Sparkles, Clock, MapPin, Eye, VolumeX, Maximize2, ShieldCheck, CheckCircle2 } from "lucide-react";

interface AdvertisingExperienceProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const EXPERIENCE_ADS = [
  {
    id: "restaurant",
    category: "Restaurant",
    brand: "Spice Route Biryani & Grill",
    offerTitle: "Weekend Special",
    offerHighlight: "Flat 20% OFF",
    details: "On Family Handi Platters & Tandoori Starters",
    timing: "Valid Fri - Sun • Dine-in & Takeaway",
    location: "Food Court @ High Street Galleria",
    tagline: "Savor the Authentic Flavors of Dum Biryani",
    accentColor: "#E2C76B",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    slotTime: "Slot: 10 Sec Loop",
  },
  {
    id: "gym",
    category: "Gym & Fitness",
    brand: "Vigor Strength Club",
    offerTitle: "Join Today",
    offerHighlight: "Limited Membership Offer",
    details: "Annual Fitness Pass @ ₹899/Month + Free Diet Consultation",
    timing: "First 50 Registrations This Month",
    location: "Commercial Hub, Main Junction",
    tagline: "Certified Trainers • Olympic Barbells • Steam & Sauna",
    accentColor: "#38BDF8",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    slotTime: "Slot: 10 Sec Loop",
  },
  {
    id: "salon",
    category: "Salon & Spa",
    brand: "Velvet Glow Beauty & Spa",
    offerTitle: "Glow Different",
    offerHighlight: "Festive Packages",
    details: "Complete Bridal, Hair Spa & Korean Glow Facial from ₹1,499",
    timing: "Pre-book Your Weekend Slots",
    location: "Central Market, 1st Floor",
    tagline: "Premium Organic Formulations & Master Stylists",
    accentColor: "#F472B6",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    slotTime: "Slot: 10 Sec Loop",
  },
  {
    id: "cafe",
    category: "Café & Bakery",
    brand: "Artisan Coffee Roasters",
    offerTitle: "Your Coffee. Your Place.",
    offerHighlight: "Buy 1 Get 1 at 50% OFF",
    details: "On all Handcrafted Pour-overs, Cold Brews & Fresh Croissants",
    timing: "Mon - Fri 11 AM - 5 PM Happy Hours",
    location: "Student Avenue & Tech Hub Corner",
    tagline: "Fresh Single-Origin Arabica Roasted Weekly",
    accentColor: "#FB923C",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    slotTime: "Slot: 10 Sec Loop",
  },
];

export const AdvertisingExperience: React.FC<AdvertisingExperienceProps> = ({ onOpenEnquiry }) => {
  const [selectedAdIndex, setSelectedAdIndex] = useState(0);
  const currentAd = EXPERIENCE_ADS[selectedAdIndex];

  return (
    <section id="experience" className="relative py-28 bg-brand-navy-950 overflow-hidden text-white">
      {/* Dynamic Background Beams */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Commercial Display Experience</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Your Advertisement. <br />
            <span className="text-gold-gradient">Their Attention.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal">
            See how your offer commands the room when showcased on our high-brightness commercial digital screens.
          </p>
        </div>

        {/* Digital Screen Showcase Frame */}
        <div className="max-w-5xl mx-auto">
          {/* Main Bezel Container */}
          <div className="relative rounded-3xl bg-brand-navy-900/90 p-4 sm:p-6 border-2 border-brand-gold-500/30 shadow-2xl backdrop-blur-xl">
            {/* Top Display Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-brand-navy-950 rounded-xl border border-brand-navy-700/60 mb-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-mono font-bold text-slate-200">
                  NETWORK DISPLAY: 4K ULTRA-BRIGHT SCREEN
                </span>
              </div>

              <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 text-brand-gold-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>10–12 Hours Daily Active</span>
                </div>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline text-slate-300">{currentAd.slotTime}</span>
              </div>
            </div>

            {/* Screen Canvas (Mockup Visual) */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-black border border-white/10 flex flex-col justify-between p-6 sm:p-10 shadow-2xl">
              {/* Product Background Image */}
              <Image
                src={currentAd.image}
                alt={currentAd.brand}
                fill
                className="object-cover brightness-[0.70] transition-all duration-700 scale-105"
                sizes="(max-width: 1024px) 100vw, 1000px"
              />

              {/* Rich Glass & Shadow Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-transparent to-black/50" />

              {/* Top Banner on Ad */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-black uppercase tracking-wider bg-brand-gold-400 text-brand-navy-950 shadow-md">
                    {currentAd.category}
                  </span>
                  <span className="text-xs text-slate-300 hidden sm:inline bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                    {currentAd.brand}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-300 bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>{currentAd.location}</span>
                </div>
              </div>

              {/* Central Offer Information */}
              <div className="relative z-10 max-w-xl space-y-3 my-auto py-4">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold-300">
                  {currentAd.offerTitle}
                </div>
                <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                  {currentAd.offerHighlight}
                </h3>
                <p className="text-sm sm:text-base text-slate-100 font-medium">
                  {currentAd.details}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-brand-gold-200">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold-400" />
                  <span>{currentAd.timing}</span>
                </div>
              </div>

              {/* Bottom Display Bar */}
              <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{currentAd.tagline}</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-gold-400 font-bold">
                  <span>Local Sanchar Display Network</span>
                </div>
              </div>
            </div>

            {/* Interactive Business Channel Switcher */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {EXPERIENCE_ADS.map((ad, idx) => (
                <button
                  key={ad.id}
                  onClick={() => setSelectedAdIndex(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all border ${
                    selectedAdIndex === idx
                      ? "bg-brand-navy-800 border-brand-gold-400 shadow-gold-sm"
                      : "bg-brand-navy-950/60 border-brand-navy-700/60 hover:bg-brand-navy-900 hover:border-brand-navy-600"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span>CH 0{idx + 1}</span>
                    {selectedAdIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-brand-gold-400" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-white truncate">
                    {ad.category}
                  </div>
                  <div className="text-xs text-slate-400 truncate">
                    {ad.offerTitle}
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Caption strictly following prompt guidance */}
            <div className="mt-6 pt-4 border-t border-brand-navy-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2 text-sm text-brand-gold-300 font-semibold">
                <Clock className="w-4 h-4 text-brand-gold-400" />
                <span>10–12 hours of daily advertising visibility</span>
              </div>

              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry(currentAd.category);
                  else {
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-xs font-bold text-brand-gold-400 hover:text-white uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
              >
                <span>Launch This Format For My Business →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
