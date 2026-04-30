"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Sākums", href: "#sakums" },
  { label: "Par mums", href: "#par-mums" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Speciālisti", href: "#specialisti" },
  { label: "Vakances", href: "#vakances" },
  { label: "Kontakti", href: "#kontakti" },
];

const BOOKING_URL = "https://www.piearsta.lv/";
const PHONE = "+37125455994";
const PHONE_DISPLAY = "+371 25 455 994";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-9 left-0 right-0 z-50">
      <div className="mx-4 mt-4 rounded-2xl bg-primary/95 backdrop-blur-xl px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo-symbol-light.png"
            alt="Podoloģijas Klīnika Pārdaugava"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            priority
          />
          <span className="font-heading text-white tracking-tight leading-tight">
            <span className="block text-base sm:text-lg md:text-xl">Podoloģijas Klīnika</span>
            <span className="block text-secondary-container/80 text-[0.6rem] sm:text-[0.65rem] md:text-xs font-body font-semibold tracking-[0.2em] uppercase mt-0.5">Pārdaugava</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="text-white/80 hover:text-white text-sm transition-colors hidden xl:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-container to-primary-container/80 text-white text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-xl hover:scale-[1.02] transition-transform duration-200"
          >
            Pieteikties
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Atvērt izvēlni"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-primary/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <a
            href={`tel:${PHONE}`}
            className="text-white/80 hover:text-white text-sm"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary-container to-primary-container/80 text-white text-sm font-semibold uppercase tracking-widest px-5 py-3 rounded-xl text-center hover:scale-[1.02] transition-transform duration-200"
          >
            Pieteikties
          </a>
        </div>
      )}
    </header>
  );
}
