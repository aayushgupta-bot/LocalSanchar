"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { CONTACT_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry?: (prefilledCategory?: string, prefilledPackage?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "what-we-do", "how-it-works", "solutions", "experience", "packages", "why-us", "faq", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { label: "Solutions", href: "#solutions", id: "solutions" },
    { label: "Packages", href: "#packages", id: "packages" },
    { label: "Why Us", href: "#why-us", id: "why-us" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy-950/90 backdrop-blur-xl border-b border-brand-navy-700/60 shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <Logo size="md" />

            {/* Middle: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 bg-brand-navy-900/60 p-1.5 rounded-full border border-brand-navy-700/50 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-brand-navy-950 bg-brand-gold-400 font-semibold shadow-gold-sm"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: CTA & WhatsApp Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I want to advertise my business on digital screens")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/40 transition-colors"
                title="WhatsApp our advertising team directly"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry();
                  else {
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 hover:shadow-gold-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Advertise With Us
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => {
                  if (onOpenEnquiry) onOpenEnquiry();
                  else {
                    const contact = document.getElementById("contact");
                    contact?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand-gold-400 text-brand-navy-950"
              >
                Advertise
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-brand-navy-800 text-slate-200 border border-brand-navy-700 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brand-navy-950/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400/80 mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-slate-200 hover:text-brand-gold-400 py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
                else {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full py-3.5 px-4 rounded-xl text-center font-bold text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 shadow-gold-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Advertise With Us</span>
            </button>

            <a
              href={CONTACT_INFO.getWhatsAppUrl("Hi Local Sanchar team, I want to advertise my business on digital screens")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl text-center font-semibold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Our Team</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
