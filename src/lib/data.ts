export interface BusinessCategory {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  sampleAd: {
    title: string;
    headline: string;
    offer: string;
    subtext: string;
    accentColor: string;
    locationExample: string;
    image: string;
  };
  benefits: string[];
}

export const CONTACT_INFO = {
  phone: "+91 90264 67041",
  rawPhone: "+919026467041",
  whatsappNumber: "919026467041",
  getWhatsAppUrl: (message: string) =>
    `https://wa.me/919026467041?text=${encodeURIComponent(message)}`,
};

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  duration: string;
  numericPrice: number;
  periodMonths: number;
  perMonthEquivalent?: string;
  badge?: string;
  isPopular?: boolean;
  isBestValue?: boolean;
  tagline: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  targetAudience: string;
}

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: "restaurants",
    name: "Restaurants & Dhabas",
    tagline: "Drive lunch crowds and weekend family dinners with appetizing digital promotions.",
    iconName: "Utensils",
    sampleAd: {
      title: "Royal Biryani House",
      headline: "Weekend Special Feast",
      offer: "Flat 20% OFF on Family Platters",
      subtext: "Dine-in & Takeaway • Valid Friday to Sunday",
      accentColor: "#E2C76B",
      locationExample: "Near Central Mall Food Hub",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Target hungry shoppers nearby", "Showcase chef specials", "Promote off-peak meal deals"],
  },
  {
    id: "gyms",
    name: "Gyms & Fitness Studios",
    tagline: "Inspire local residents to start their fitness journey at your gym.",
    iconName: "Dumbbell",
    sampleAd: {
      title: "Iron Core Fitness Club",
      headline: "Transform Your Lifestyle",
      offer: "Join Today — Limited Membership Offer @ ₹999/mo",
      subtext: "Free Personal Training Trial • First 50 Signups",
      accentColor: "#38BDF8",
      locationExample: "Opp. Tech Park Junction",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Target young professionals", "Promote annual plan discounts", "Showcase modern gym equipment"],
  },
  {
    id: "salons",
    name: "Salons & Spas",
    tagline: "Fill your appointment slots with festive makeover packages and grooming deals.",
    iconName: "Sparkles",
    sampleAd: {
      title: "Aura Luxe Beauty Lounge",
      headline: "Glow Different Every Day",
      offer: "Festive Makeover Packages from ₹1,499",
      subtext: "Keratin • Hydra Facial • Bridal Grooming",
      accentColor: "#F472B6",
      locationExample: "Main Market 2nd Floor",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Highlight bridal packages", "Weekend appointment boosts", "Visual hair/skin transformations"],
  },
  {
    id: "cafes",
    name: "Cafés & Bakeries",
    tagline: "Become the go-to spot for work meetings, coffee dates, and evening chill sessions.",
    iconName: "Coffee",
    sampleAd: {
      title: "The Roasted Bean Café",
      headline: "Your Coffee. Your Place.",
      offer: "Buy 1 Artisan Brew, Get 1 Dessert at 50% OFF",
      subtext: "Free High-Speed Wi-Fi • Cozy Workspaces",
      accentColor: "#FB923C",
      locationExample: "Near University Gate 3",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Attract college & remote workers", "Promote fresh evening bakery bakes", "Seasonal drink specials"],
  },
  {
    id: "clinics",
    name: "Clinics & Diagnostic Labs",
    tagline: "Build neighborhood trust for health checkups, dental care, and consultations.",
    iconName: "Stethoscope",
    sampleAd: {
      title: "CarePlus Multispecialty Clinic",
      headline: "Trusted Family Healthcare",
      offer: "Full Body Health Checkup Package @ ₹799",
      subtext: "Dental • Pathology • General Physician Consultation",
      accentColor: "#34D399",
      locationExample: "City Center Medical Complex",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Establish local clinic trust", "Advertise routine checkup camps", "Easy booking contact visibility"],
  },
  {
    id: "retail",
    name: "Retail Stores & Supermarkets",
    tagline: "Announce new collections, festive sales, and clearance discounts to foot-traffic.",
    iconName: "ShoppingBag",
    sampleAd: {
      title: "Vogue Trends Fashion Studio",
      headline: "End of Season Mega Clearance",
      offer: "Up to 60% OFF on Ethnic & Western Wear",
      subtext: "Fresh Arrival Stock Just Dropped",
      accentColor: "#C9A44C",
      locationExample: "High Street Commercial Arcade",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Direct walk-ins from nearby footfall", "Flash weekend clearance alerts", "New inventory showcases"],
  },
  {
    id: "coaching",
    name: "Coaching & Tuition Institutes",
    tagline: "Reach parents and students looking for competitive exams and skill development.",
    iconName: "GraduationCap",
    sampleAd: {
      title: "Apex Scholars Academy",
      headline: "Admissions Open for 2026-27",
      offer: "Scholarship Test: Up to 90% Fee Waiver",
      subtext: "CBSE • ICSE • JEE / NEET Foundation Batches",
      accentColor: "#60A5FA",
      locationExample: "Near Metro Station Pillar 42",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Reach students and parents in vicinity", "Promote batch start dates", "Highlight top ranker results"],
  },
  {
    id: "local-brands",
    name: "Local Brands & Manufacturers",
    tagline: "Establish strong local brand authority against national competitors.",
    iconName: "Award",
    sampleAd: {
      title: "DesiCrafts Handmade Home Decor",
      headline: "Authentic Handcrafted Elegance",
      offer: "Special Inaugural Discount 15% OFF",
      subtext: "Custom Furniture • Brass Lighting • Ceramic Art",
      accentColor: "#E2C76B",
      locationExample: "Design Street District",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Build distinct brand recall", "Drive direct customer inquiries", "Position as premium homegrown"],
  },
  {
    id: "real-estate",
    name: "Real Estate & Co-Living",
    tagline: "Showcase prime properties, rental apartments, and new residential launches.",
    iconName: "Building2",
    sampleAd: {
      title: "Greenwood Enclave Residency",
      headline: "Luxury 2 & 3 BHK Living",
      offer: "Ready to Move In • Zero Brokerage",
      subtext: "Sample Flat Open for Viewing Today",
      accentColor: "#A78BFA",
      locationExample: "Ring Road Express corridor",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Target high-intent local buyers", "Showcase actual site photos", "Instant site-visit booking callouts"],
  },
  {
    id: "events",
    name: "Events, Fairs & Exhibitions",
    tagline: "Fill your event halls, food fests, and musical nights with ticket buyers.",
    iconName: "Calendar",
    sampleAd: {
      title: "Local Flavors Food & Music Fest",
      headline: "This Saturday & Sunday",
      offer: "Early Bird Passes @ ₹199 Only",
      subtext: "50+ Food Stalls • Live Acoustic Bands • Kids Zone",
      accentColor: "#F87171",
      locationExample: "Town Exhibition Grounds",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    benefits: ["Create immediate urgency", "Drive weekend crowd spikes", "Maximize ticket sales in 48-72 hrs"],
  },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹300",
    duration: "/ Month",
    numericPrice: 300,
    periodMonths: 1,
    tagline: "Ideal for testing local advertising without any big commitment.",
    features: [
      "10-second advertisement spot",
      "10–12 hours daily continuous screen display",
      "Client-provided video or graphic",
      "Selected high-footfall display location",
      "No editing or creative modification",
      "Fast 24-hour campaign activation",
    ],
    notIncluded: [
      "Professional video editing",
      "Social media re-sharing",
      "Multi-location expansion",
    ],
    ctaText: "Get Started",
    targetAudience: "First-time advertisers, small kiosk owners & quick announcements",
  },
  {
    id: "professional",
    name: "PROFESSIONAL",
    price: "₹500",
    duration: "/ Month",
    numericPrice: 500,
    periodMonths: 1,
    isPopular: false,
    tagline: "For businesses that want a polished, high-impact advertisement.",
    features: [
      "10-second advertisement spot",
      "10–12 hours daily continuous screen display",
      "Professional video editing & sound polishing",
      "Creative enhancement with brand colors & fonts",
      "Call-to-action & QR code integration",
      "Selected high-footfall display location",
      "Campaign performance check-in",
    ],
    ctaText: "Choose Professional",
    targetAudience: "Established cafes, salons, clinics, gyms & retail boutiques",
  },
  {
    id: "growth",
    name: "GROWTH",
    price: "₹2,000",
    duration: "/ 3 Months",
    numericPrice: 2000,
    periodMonths: 3,
    perMonthEquivalent: "₹667 / month",
    badge: "Popular",
    isPopular: true,
    tagline: "Build sustained local brand recall with multi-format promotion.",
    features: [
      "Professional-quality promotional video",
      "Extended video duration up to 2 minutes",
      "10–12 hours daily digital screen advertising",
      "Social media re-sharing on partner network",
      "Quarterly creative refresh (switch your offer)",
      "Consistent 90-day local brand visibility",
      "Priority WhatsApp support",
    ],
    ctaText: "Choose Growth",
    targetAudience: "Growing brands looking for consistent quarterly footfall",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "₹4,000",
    duration: "/ 6 Months",
    numericPrice: 4000,
    periodMonths: 6,
    perMonthEquivalent: "₹667 / month",
    badge: "Best Value",
    isBestValue: true,
    tagline: "Our flagship campaign designed to establish dominant local presence.",
    features: [
      "Full professional-quality promotional video production",
      "Extended video duration up to 2 minutes",
      "End-to-end professional editing & motion design",
      "10–12 hours continuous daily screen display",
      "Multi-channel social media re-sharing & boosts",
      "Consistent long-term 180-day visibility & brand recall",
      "Bi-monthly creative updates for seasonal festivals",
      "Priority creative & dedicated campaign support",
    ],
    ctaText: "Go Premium",
    targetAudience: "Leading local businesses aiming for maximum town recognition",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: "01",
    title: "Choose Your Package",
    description: "Select the campaign plan that fits your business budget and visibility timeline (from ₹300/mo to 6-month growth).",
    iconName: "Layers",
  },
  {
    stepNumber: "02",
    title: "Share Your Creative",
    description: "Send us your existing video/photos, or let our design team craft a polished, high-converting advertisement for you.",
    iconName: "UploadCloud",
  },
  {
    stepNumber: "03",
    title: "We Display It",
    description: "Your advertisement goes live on commercial digital screens in high-footfall local areas for 10–12 hours every day.",
    iconName: "Tv",
  },
  {
    stepNumber: "04",
    title: "Get Seen",
    description: "Your brand stays consistently visible to local consumers right when they are out shopping, dining, and traveling.",
    iconName: "Eye",
  },
];

export const WHAT_WE_DO_CARDS = [
  {
    title: "Digital Screen Advertising",
    description: "Promote your business on digital screens in high-footfall locations where local shoppers, diners, and commuters gather.",
    iconName: "MonitorPlay",
    accent: "Gold",
  },
  {
    title: "Professional Creatives",
    description: "Turn raw phone footage or basic photos into eye-catching, high-converting digital advertising videos and motion graphics.",
    iconName: "Film",
    accent: "Blue",
  },
  {
    title: "Social Media Promotion",
    description: "Extend your physical screen campaign through coordinated social media re-sharing to maximize local digital reach.",
    iconName: "Share2",
    accent: "Blue",
  },
  {
    title: "Long-Term Visibility",
    description: "Build consistent, unforgettable brand recall through extended 3-month and 6-month presence in your neighborhood.",
    iconName: "TrendingUp",
    accent: "Gold",
  },
];

export const WHY_US_BENEFITS = [
  {
    title: "Affordable",
    description: "Advertising options starting at just ₹300. No massive agency retainers or hidden setup charges.",
    iconName: "Tag",
  },
  {
    title: "Local Reach",
    description: "Built specifically for local businesses to dominate their immediate 2-5 km geographic customer radius.",
    iconName: "MapPin",
  },
  {
    title: "High Visibility",
    description: "Your advertisement appears in physical commercial locations where real customers are actively present.",
    iconName: "Tv2",
  },
  {
    title: "Professional Creatives",
    description: "Upgrade from raw smartphone footage to clean, broadcast-grade promotional video content.",
    iconName: "Sparkle",
  },
  {
    title: "Flexible Packages",
    description: "Choose agile one-month tests or commit to sustained three-month and six-month campaigns with savings.",
    iconName: "SlidersHorizontal",
  },
  {
    title: "Multi-Channel Promotion",
    description: "Combine high-impact digital screen advertising with targeted social media promotion for total recall.",
    iconName: "Radio",
  },
];

export const FAQS = [
  {
    question: "What type of businesses can advertise?",
    answer:
      "Restaurants, gyms, salons, clinics, cafés, retail stores, coaching institutes, local brands, real estate businesses, event organizers, and any service looking to attract customers in its local area.",
  },
  {
    question: "Can I provide my own video?",
    answer:
      "Yes! The ₹300 Starter package allows you to submit your own 10-second MP4 video or high-res graphic. We inspect it for aspect ratio and display it directly without modification.",
  },
  {
    question: "Do you provide video editing?",
    answer:
      "Yes. Professional video editing, motion design, color grading, and creative enhancement are included in the ₹500 Professional, ₹2,000 Growth, and ₹4,000 Premium packages.",
  },
  {
    question: "How long is my advertisement displayed?",
    answer:
      "Your advertisement is displayed continuously throughout operating hours, providing approximately 10–12 hours of daily advertising visibility on our digital network.",
  },
  {
    question: "Can you create the advertisement for me?",
    answer:
      "Absolutely. For the Professional, Growth, and Premium packages, you simply share your raw product photos, video clips, and offer text. Our creative team designs the final video for you.",
  },
  {
    question: "Can I advertise for multiple months?",
    answer:
      "Yes. We offer 3-month (Growth — ₹2,000) and 6-month (Premium — ₹4,000) packages. Multi-month campaigns provide the benefit of sustained brand recall, video length up to 2 minutes, and periodic creative refreshes.",
  },
  {
    question: "Is customer reach guaranteed?",
    answer:
      "No. Actual exposure and footfall depend on the selected display location, surrounding foot-traffic, weather, and seasonal conditions. We ensure your ad runs consistently for 10–12 hours daily, but we do not promise unrealistic guaranteed customer counts or sales figures.",
  },
];
