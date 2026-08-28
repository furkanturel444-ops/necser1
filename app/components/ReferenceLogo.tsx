"use client";

import { useState } from "react";
import Image from "next/image";
import { REFERENCE_LOGO_DIR, assetUrl } from "../lib/site-data";

type ReferenceLogoProps = {
  name: string;
  logo: string;
};

export default function ReferenceLogo({ name, logo }: ReferenceLogoProps) {
  const [hasError, setHasError] = useState(false);
  const src = assetUrl(`${REFERENCE_LOGO_DIR}/${logo}`);

  if (hasError) {
    return (
      <div className="h-20 sm:h-24 w-full flex items-center justify-center px-2">
        <span className="font-semibold text-slate-700 text-xs sm:text-sm text-center leading-snug">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="h-20 sm:h-24 w-full flex items-center justify-center px-2 sm:px-3">
      <Image
        src={src}
        alt={`${name} logosu`}
        width={240}
        height={96}
        unoptimized
        className="max-h-20 sm:max-h-24 max-w-full w-auto h-auto object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
