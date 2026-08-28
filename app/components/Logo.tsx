"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Printer } from "lucide-react";
import { assetUrl } from "../lib/site-data";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Link
        href="/"
        className={`flex items-center gap-2 sm:gap-3 group min-w-0 ${className}`}
        aria-label="Necser Ana Sayfa"
      >
        <div className="bg-brand p-2 sm:p-2.5 rounded-lg group-hover:bg-brand-dark transition-colors shrink-0">
          <Printer className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        <span className="text-lg sm:text-2xl md:text-3xl font-bold tracking-wide text-brand truncate">
          NECSER
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}
      aria-label="Necser Ana Sayfa"
    >
      <Image
        src={assetUrl("/logo.png")}
        alt="Necser Logo"
        width={220}
        height={64}
        priority
        unoptimized
        className="h-8 sm:h-10 md:h-14 w-auto object-contain shrink-0"
        onError={() => setHasError(true)}
      />
      <span className="text-lg sm:text-2xl md:text-3xl font-bold tracking-wide text-brand truncate">
        NECSER
      </span>
    </Link>
  );
}
