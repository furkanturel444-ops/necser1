"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#neden-necser", label: "Neden Necser?" },
  { href: "/#urunler", label: "Ürünler" },
  { href: "/#referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      aria-label="Ana navigasyon"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 gap-2">
          <Logo className="min-w-0 shrink" />

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-brand transition-colors font-medium text-sm whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/iletisim"
              className="bg-brand text-white px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-brand-dark transition-colors flex items-center gap-1.5 sm:gap-2 font-semibold text-xs sm:text-sm shadow-sm min-h-[40px]"
              aria-label="Teklif Al"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Teklif Al</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-slate-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-brand hover:bg-slate-50 transition-colors font-medium py-3.5 px-4 rounded-lg text-base min-h-[48px] flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
