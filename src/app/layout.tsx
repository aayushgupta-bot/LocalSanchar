import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071A33",
};

export const metadata: Metadata = {
  title: "Local Sanchar | Local Digital Advertising",
  description:
    "Local Sanchar helps restaurants, gyms, salons, clinics, cafés and local businesses increase visibility through digital screen advertising, professional creatives and social media promotion.",
  keywords: [
    "Local Sanchar",
    "digital advertising screens India",
    "local business advertising",
    "restaurant advertising screen",
    "gym digital signage",
    "salon promotional video",
    "hyperlocal DOOH advertising",
    "affordable advertising ₹300",
  ],
  authors: [{ name: "Local Sanchar" }],
  openGraph: {
    title: "Local Sanchar | Local Digital Advertising",
    description:
      "Helping local businesses get seen, remembered, and chosen with high-brightness commercial digital screens in high-footfall areas.",
    url: "https://localsanchar.com",
    siteName: "Local Sanchar",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-brand-navy-900 text-brand-light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
