"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { AdvertisingExperience } from "@/components/AdvertisingExperience";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { BusinessStory } from "@/components/BusinessStory";
import { SampleShowcase } from "@/components/SampleShowcase";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/EnquiryModal";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Restaurants");
  const [selectedPackage, setSelectedPackage] = useState<string>("₹300 Starter");

  const handleOpenEnquiry = (category?: string, pkg?: string) => {
    if (category) setSelectedCategory(category);
    if (pkg) setSelectedPackage(pkg);
    setModalOpen(true);
  };

  const handleSelectCategoryFromGrid = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setModalOpen(true);
  };

  const handleSelectPackageFromGrid = (packageName: string) => {
    setSelectedPackage(packageName);
    // Smooth scroll directly to contact form with prefilled package
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy-900 text-brand-light selection:bg-brand-gold-500 selection:text-brand-navy-950 flex flex-col justify-between relative">
      {/* Top Fixed Sticky Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Page Sections */}
      <main className="flex-1 w-full overflow-hidden">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 2. What We Do Section */}
        <WhatWeDo onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 3. How It Works */}
        <HowItWorks onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 4. Who We Help (10 Categories) */}
        <WhoWeHelp onSelectCategory={handleSelectCategoryFromGrid} />

        {/* 5. Advertising Experience Section */}
        <AdvertisingExperience onOpenEnquiry={(cat) => handleOpenEnquiry(cat)} />

        {/* 6. Pricing & Packages */}
        <Pricing onSelectPackage={handleSelectPackageFromGrid} />

        {/* 7. Why Local Sanchar */}
        <WhyUs onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 8. Local Business Story */}
        <BusinessStory onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 9. Sample Advertisement Showcase */}
        <SampleShowcase onOpenEnquiry={(cat) => handleOpenEnquiry(cat)} />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Final High-Impact CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 12. Contact & Enquiry Form */}
        <ContactSection
          prefilledCategory={selectedCategory}
          prefilledPackage={selectedPackage}
        />
      </main>

      {/* 13. Brand Footer */}
      <Footer />

      {/* 14. Mobile Sticky Bottom Action */}
      <StickyMobileCTA onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 15. Global Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategory={selectedCategory}
        initialPackage={selectedPackage}
      />
    </div>
  );
}
