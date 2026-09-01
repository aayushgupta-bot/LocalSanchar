"use client";

import React, { useState, useEffect } from "react";
import { CONTACT_INFO } from "@/lib/data";
import { Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenEnquiry }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero (250px)
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-brand-navy-950/95 backdrop-blur-xl border-t border-brand-gold-500/30 sm:hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2">
        {/* Instant WhatsApp Quick Button */}
        <a
          href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I want to advertise my business on digital screens")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Us"
          className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-sm"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Advertise With Us Button */}
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 shadow-gold-sm flex items-center justify-between"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-brand-navy-950" />
            <span>Advertise With Us</span>
          </div>
          <span className="text-xs bg-brand-navy-950/10 px-2 py-0.5 rounded font-black">
            From ₹300
          </span>
        </button>
      </div>
    </div>
  );
};
