"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CONTACT_INFO } from "@/lib/data";
import {
  Sparkles,
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldAlert,
} from "lucide-react";

interface ContactSectionProps {
  prefilledCategory?: string;
  prefilledPackage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledCategory = "",
  prefilledPackage = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessCategory: prefilledCategory || "Restaurant",
    phone: "",
    email: "",
    preferredPackage: prefilledPackage || "₹300 Starter",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledCategory) {
      setFormData((prev) => ({ ...prev, businessCategory: prefilledCategory }));
    }
  }, [prefilledCategory]);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData((prev) => ({ ...prev, preferredPackage: prefilledPackage }));
    }
  }, [prefilledPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#C9A44C", "#E2C76B", "#123B6D", "#ffffff"],
        });
      } catch (err) {
        // Safe fallback
      }
    } catch (err: any) {
      console.error("Contact form submission error:", err);
      setErrorMessage(err.message || "Failed to send enquiry. Please try again or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Local Sanchar Team,\n\nName: ${formData.name || "[Your Name]"}\nBusiness: ${formData.businessName || "[Business Name]"}\nCategory: ${formData.businessCategory}\nPackage Interest: ${formData.preferredPackage}\nPhone: ${formData.phone || "[Phone]"}\n\nI would like to discuss advertising opportunities.`;
    return CONTACT_INFO.getWhatsAppUrl(text);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-navy-950 overflow-hidden border-t border-brand-navy-800">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-navy-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-900 border border-brand-gold-500/30 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Campaign Consultation</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let's Get Your <span className="text-gold-gradient">Brand Seen.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Fill in your business details below or reach our team directly via WhatsApp for fast campaign onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Outreach & Official Business Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy-900/90 rounded-3xl p-7 border border-brand-navy-700/80 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Quick Campaign Onboarding
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have ready footage or need our creative team to produce a promo video, we guide you through every step within 24 hours.
              </p>

              {/* Direct Instant Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 transition-all flex items-center justify-between shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    <span>WhatsApp Us Directly</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono group-hover:translate-x-1 transition-transform">
                    Instant Reply →
                  </span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.rawPhone}`}
                  className="w-full py-3.5 px-5 rounded-xl font-semibold text-sm text-slate-200 bg-brand-navy-800 hover:bg-brand-navy-750 border border-brand-navy-700 hover:border-brand-gold-500/30 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-gold-400" />
                    <span>Call Us ({CONTACT_INFO.phone})</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    10 AM – 8 PM
                  </span>
                </a>
              </div>

              {/* Verified Turnaround Badges */}
              <div className="pt-6 border-t border-brand-navy-800 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-brand-gold-400 shrink-0" />
                  <span>Display schedules verified daily for 10–12 continuous hours.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No long-term lock-ins for 1-month trial campaigns.</span>
                </div>
              </div>
            </div>

            {/* Note on contact details placeholders */}
            <div className="p-4 rounded-2xl bg-brand-navy-900/40 border border-brand-navy-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300">Operational Notice:</span>
              <p>Local Sanchar operates digital signage clusters across high-traffic local markets and retail hubs.</p>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-navy-900 rounded-3xl p-7 sm:p-9 border border-brand-navy-700/80 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">
                      Enquiry Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you <span className="font-bold text-white">{formData.name}</span>. Our local campaign coordinator will contact you at <span className="font-bold text-brand-gold-400">{formData.phone}</span> within a few hours.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed up on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-brand-navy-800 hover:bg-brand-navy-700 transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        placeholder="e.g. Spice Route Biryani"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Category */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Business Category *
                      </label>
                      <select
                        name="businessCategory"
                        value={formData.businessCategory}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors cursor-pointer"
                      >
                        <option value="Restaurants">Restaurants & Dhabas</option>
                        <option value="Gyms">Gyms & Fitness Studios</option>
                        <option value="Salons">Salons & Spas</option>
                        <option value="Cafés">Cafés & Bakeries</option>
                        <option value="Clinics">Clinics & Diagnostic Labs</option>
                        <option value="Retail Stores">Retail Stores & Boutiques</option>
                        <option value="Coaching Institutes">Coaching & Tuition Institutes</option>
                        <option value="Local Brands">Local Brands & Manufacturers</option>
                        <option value="Real Estate">Real Estate & Co-Living</option>
                        <option value="Events">Events & Fairs</option>
                        <option value="Other">Other Local Business</option>
                      </select>
                    </div>

                    {/* Preferred Package */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Preferred Package *
                      </label>
                      <select
                        name="preferredPackage"
                        value={formData.preferredPackage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors cursor-pointer"
                      >
                        <option value="₹300 Starter">₹300 Starter (1 Month)</option>
                        <option value="₹500 Professional">₹500 Professional (1 Month + Editing)</option>
                        <option value="₹2,000 Growth">₹2,000 Growth (3 Months + Social)</option>
                        <option value="₹4,000 Premium">₹4,000 Premium (6 Months Flagship)</option>
                        <option value="Not Sure">Not Sure (Need Advice)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="business@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Message / Campaign Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your offer or what you'd like to advertise..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-navy-950 border border-brand-navy-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-gold-400 focus:ring-1 focus:ring-brand-gold-400 transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-base text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 via-brand-gold-300 to-brand-gold-500 hover:shadow-gold-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
