"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CONTACT_INFO } from "@/lib/data";
import { X, Sparkles, Send, CheckCircle2, MessageCircle } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialPackage?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = "Restaurants",
  initialPackage = "₹300 Starter",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessCategory: initialCategory,
    phone: "",
    email: "",
    preferredPackage: initialPackage,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, businessCategory: initialCategory }));
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, preferredPackage: initialPackage }));
    }
  }, [initialPackage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.5 },
          colors: ["#C9A44C", "#E2C76B", "#123B6D", "#ffffff"],
        });
      } catch (err) {
        // Safe
      }
    }, 700);
  };

  const generateWhatsAppLink = () => {
    const text = `Hello Local Sanchar Team,\n\nName: ${formData.name || "[Name]"}\nBusiness: ${formData.businessName || "[Business]"}\nCategory: ${formData.businessCategory}\nPackage: ${formData.preferredPackage}\nPhone: ${formData.phone || "[Phone]"}\n\nI want to start an ad campaign on your digital screen network.`;
    return CONTACT_INFO.getWhatsAppUrl(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-brand-navy-900 border border-brand-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-brand-navy-800 text-slate-300 hover:text-white hover:bg-brand-navy-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-white">Campaign Inquiry Sent!</h3>
            <p className="text-sm text-slate-300">
              Our team will review your business requirements and connect with you at{" "}
              <span className="text-brand-gold-400 font-bold">{formData.phone}</span>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-brand-navy-950 bg-brand-gold-400"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Advertise With Local Sanchar</span>
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Launch Your Local Campaign
              </h3>
              <p className="text-xs text-slate-300">
                Daily 10–12 hours visibility starting from ₹300/month.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Vikram Verma"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    placeholder="e.g. FitZone Gym"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Category *
                  </label>
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  >
                    <option value="Restaurants">Restaurants & Dhabas</option>
                    <option value="Gyms">Gyms & Fitness Studios</option>
                    <option value="Salons">Salons & Spas</option>
                    <option value="Cafés">Cafés & Bakeries</option>
                    <option value="Clinics">Clinics & Diagnostic Labs</option>
                    <option value="Retail Stores">Retail Stores</option>
                    <option value="Coaching Institutes">Coaching Institutes</option>
                    <option value="Local Brands">Local Brands</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Events">Events & Fairs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Package *
                  </label>
                  <select
                    name="preferredPackage"
                    value={formData.preferredPackage}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  >
                    <option value="₹300 Starter">₹300 Starter (1 Month)</option>
                    <option value="₹500 Professional">₹500 Professional (1 Month + Editing)</option>
                    <option value="₹2,000 Growth">₹2,000 Growth (3 Months)</option>
                    <option value="₹4,000 Premium">₹4,000 Premium (6 Months Flagship)</option>
                    <option value="Not Sure">Not Sure (Need Advice)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="owner@business.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                  Offer / Campaign Notes
                </label>
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Tell us what you want to promote..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-navy-950 border border-brand-navy-700 text-white text-sm focus:border-brand-gold-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-brand-navy-950 bg-gradient-to-r from-brand-gold-400 to-brand-gold-500 hover:shadow-gold-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Submit Campaign Request</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
