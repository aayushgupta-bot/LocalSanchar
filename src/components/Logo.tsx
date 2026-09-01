import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
}) => {
  const imageSizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 rounded-xl py-1 px-1.5 transition-transform hover:scale-[1.02] ${className}`}
      aria-label="Local Sanchar - Home"
    >
      {/* Official Brand Logo Mark */}
      <div
        className={`relative ${imageSizes[size]} rounded-2xl bg-white p-1 shadow-gold-sm border border-brand-gold-500/40 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-gold-md group-hover:border-brand-gold-400`}
      >
        <Image
          src="/logo.png"
          alt="Local Sanchar Logo"
          width={64}
          height={64}
          priority
          className="object-contain w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-extrabold tracking-tight text-white uppercase ${textSizes[size]} flex items-center gap-1.5 leading-none`}
          >
            <span>LOCAL</span>
            <span className="text-gold-gradient font-black">SANCHAR</span>
          </span>
        </div>
      )}
    </Link>
  );
};
