import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { CONTACT_INFO } from "@/lib/data";
import { ArrowUp, Instagram, Linkedin, MessageCircle, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-navy-950 border-t border-brand-navy-800 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-slate-300 text-base max-w-sm font-normal pt-1">
              Local digital advertising for businesses that want to be seen.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Helping restaurants, gyms, salons, clinics, cafés, and local stores build unbeatable local visibility through high-brightness digital screens in prime commercial footfall junctions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Local Sanchar Instagram"
                className="w-9 h-9 rounded-lg bg-brand-navy-900 border border-brand-navy-700/80 hover:border-brand-gold-500/50 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Local Sanchar LinkedIn"
                className="w-9 h-9 rounded-lg bg-brand-navy-900 border border-brand-navy-700/80 hover:border-brand-gold-500/50 hover:text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I am interested in local screen advertising")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Local Sanchar WhatsApp"
                className="w-9 h-9 rounded-lg bg-brand-navy-900 border border-brand-navy-700/80 hover:border-brand-gold-500/50 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#what-we-do" className="hover:text-white transition-colors">
                  Digital Screen Advertising
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-white transition-colors">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-white transition-colors">
                  Social Media Promotion
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Local Campaigns
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Festival & Flash Specials
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I would like to inquire about campaign options")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Business ({CONTACT_INFO.phone})</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.rawPhone}`} className="hover:text-white transition-colors">
                  Direct Line: {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pricing & Screen FAQ
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Live Screen Mockups
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © 2026 Local Sanchar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Built for Indian Local Businesses
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-brand-navy-900 border border-brand-navy-700 text-slate-300 hover:text-white hover:border-brand-gold-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
