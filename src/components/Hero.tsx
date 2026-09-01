"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, MapPin, Tv, ShieldCheck, Eye, Zap, Volume2, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

const HERO_SCREENS = [
  {
    category: "Restaurant",
    brand: "Royal Biryani House",
    headline: "Weekend Special Feast",
    offer: "FLAT 20% OFF",
    subtext: "On all Family Platters • Dine-in & Delivery",
    location: "High Street Food Boulevard",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    badge: "Food & Dining",
    color: "#E2C76B",
  },
  {
    category: "Gym & Fitness",
    brand: "Iron Core Fitness",
    headline: "Transform Your Lifestyle",
    offer: "LIMITED MEMBERSHIP OFFER",
    subtext: "Join Today @ ₹999/Month + Free Personal Training Session",
    location: "Commercial Complex, 3rd Floor",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    badge: "Health & Fitness",
    color: "#38BDF8",
  },
  {
    category: "Salon & Spa",
    brand: "Aura Luxe Beauty Lounge",
    headline: "Glow Different Every Day",
    offer: "FESTIVE MAKEOVER PACKAGES",
    subtext: "Keratin • Hydra Facial • Bridal Grooming Deals",
    location: "Market Arcade Central",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    badge: "Beauty & Wellness",
    color: "#F472B6",
  },
  {
    category: "Café & Bakery",
    brand: "The Roasted Bean Café",
    headline: "Your Coffee. Your Place.",
    offer: "BUY 1 GET 1 AT 50% OFF",
    subtext: "Artisan Brews & Fresh Bakes • Free High-Speed Wi-Fi",
    location: "Tech Hub Plaza Gate 2",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    badge: "Café & Hangout",
    color: "#FB923C",
  },
  {
    category: "Retail Store",
    brand: "Vogue Trends Fashion",
    headline: "End of Season Clearance",
    offer: "UP TO 60% OFF",
    subtext: "Exclusive Ethnic & Western Wear • New Arrivals In Store",
    location: "Main Market Metro Walk",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    badge: "Fashion & Retail",
    color: "#C9A44C",
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % HERO_SCREENS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentScreen = HERO_SCREENS[activeScreenIndex];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-brand-navy-900"
    >
      {/* Background Animated Digital Grid & Connectivity Rays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-brand-navy-700/40 via-brand-navy-800/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-navy-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Startup Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-800/90 border border-brand-gold-500/30 shadow-gold-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold-400"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-brand-gold-300 uppercase">
                Hyperlocal Digital Screen Network
              </span>
            </div>

            {/* Main Headline with metallic gold treatment on "Be Seen." */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Your Business Deserves <br className="hidden sm:inline" />
              to{" "}
              <span className="text-gold-shimmer drop-shadow-sm inline-block">
                Be Seen.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Local Sanchar helps businesses reach nearby customers through digital advertising in high-footfall locations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry();
                  else {
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 shadow-gold-md hover:shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Advertise With Us</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-brand-navy-800/80 hover:bg-brand-navy-700/80 border border-brand-navy-700 hover:border-brand-gold-500/40 transition-all duration-200 backdrop-blur-sm"
              >
                <span>View Packages</span>
                <ChevronRight className="w-4 h-4 text-brand-gold-400" />
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-slate-300 text-sm font-medium">
              <div className="flex items-center gap-1.5 text-brand-gold-400 font-semibold bg-brand-gold-500/10 px-3 py-1 rounded-md border border-brand-gold-500/20">
                <Sparkles className="w-4 h-4" />
                <span>Affordable campaigns starting from ₹300</span>
              </div>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 text-xs sm:text-sm">10–12 Hours Daily Screen Time</span>
            </div>

            {/* Mini Quick Proof Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-navy-700/50 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">100%</span>
                <span className="text-xs text-slate-400">High-Footfall Focus</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-brand-gold-400">24 Hours</span>
                <span className="text-xs text-slate-400">Fast Ad Go-Live</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-sky-400">Zero</span>
                <span className="text-xs text-slate-400">Hardware Burden</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Digital Advertising Environment */}
          <div className="lg:col-span-5 relative">
            {/* Decorative background glow behind digital totem */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold-500/20 to-brand-navy-600/30 rounded-3xl blur-2xl opacity-75" />

            {/* High-End Digital Screen Frame (Totem Style) */}
            <div className="relative rounded-2xl bg-brand-navy-950 p-2 sm:p-3 border-2 border-brand-gold-500/30 shadow-2xl overflow-hidden">
              {/* Top Header Bar of Digital Display Screen */}
              <div className="flex items-center justify-between px-3 py-2 bg-brand-navy-900/90 rounded-t-lg border-b border-brand-navy-700/50 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-semibold text-slate-300">LIVE SCREEN NETWORK</span>
                </div>
                <div className="flex items-center gap-2 text-brand-gold-400">
                  <Tv className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] bg-brand-navy-950 px-1.5 py-0.5 rounded border border-brand-gold-500/20">
                    SCREEN #04
                  </span>
                </div>
              </div>

              {/* Screen Body Container with realistic commercial Ad Content */}
              <div className="relative h-[340px] sm:h-[400px] rounded-lg overflow-hidden bg-black flex flex-col justify-between">
                {/* Background Venue / Product Imagery */}
                <Image
                  src={currentScreen.image}
                  alt={currentScreen.brand}
                  fill
                  priority
                  className="object-cover transition-opacity duration-700 brightness-[0.75]"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Dark Gradient Overlay for Maximum Ad Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950 via-brand-navy-950/40 to-black/60" />

                {/* Top Corner Badge */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-brand-navy-950/80 backdrop-blur-md text-brand-gold-400 border border-brand-gold-500/30">
                    {currentScreen.badge}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] text-slate-300">
                    <MapPin className="w-3 h-3 text-brand-gold-400" />
                    <span>{currentScreen.location}</span>
                  </div>
                </div>

                {/* Main Advertisement Content Box */}
                <div className="relative z-10 p-4 sm:p-5 space-y-2">
                  <div className="text-xs font-semibold text-brand-gold-400 tracking-wider uppercase">
                    {currentScreen.brand}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white leading-tight">
                    {currentScreen.headline}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-md bg-gradient-to-r from-brand-gold-500 to-brand-gold-400 text-brand-navy-950 font-black text-sm shadow-md">
                    {currentScreen.offer}
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    {currentScreen.subtext}
                  </p>

                  {/* Footfall & Daily Schedule Indicator */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10 text-[10px] text-slate-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-emerald-400" />
                      <span>10–12 Hours Daily Display</span>
                    </div>
                    <span className="text-brand-gold-300 font-medium">Local Sanchar Display</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Screen Channels Switcher */}
              <div className="pt-2 px-1 pb-1 flex items-center justify-between gap-1 overflow-x-auto">
                {HERO_SCREENS.map((screen, idx) => (
                  <button
                    key={screen.category}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`flex-1 py-1.5 px-2 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all ${
                      idx === activeScreenIndex
                        ? "bg-brand-gold-400 text-brand-navy-950 shadow-sm"
                        : "bg-brand-navy-900/60 text-slate-400 hover:text-white hover:bg-brand-navy-800"
                    }`}
                  >
                    {screen.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute -bottom-5 -left-4 bg-brand-navy-950/95 border border-brand-gold-500/40 shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md hidden sm:flex">
              <div className="w-9 h-9 rounded-lg bg-brand-gold-400/20 flex items-center justify-center text-brand-gold-400">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Continuous Presence</div>
                <div className="text-[11px] text-slate-400">10-12 hrs daily commercial screen slot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
