"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dict, type Lang } from "@/i18n/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

const BOOKING_URL = "https://www.piearsta.lv/";
const PHONE = "+37125455994";
const PHONE_DISPLAY = "+371 25 455 994";

export default function Header({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const [mobileOpen, setMobileOpen] = useState(false);

  const home = lang === "ru" ? "/ru" : "/";
  const navLinks = [
    { label: t.nav.sakums, href: `${home}#sakums` },
    { label: t.nav.parMums, href: `${home}#par-mums` },
    { label: t.nav.pakalpojumi, href: `${home}#pakalpojumi` },
    { label: t.nav.specialisti, href: `${home}#specialisti` },
    { label: t.nav.vakances, href: `${home}#vakances` },
    { label: t.nav.kontakti, href: `${home}#kontakti` },
  ];

  return (
    <header>
      <div className="mx-4 mt-4 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-lg shadow-primary/5 px-5 sm:px-7 py-3 relative flex items-center justify-center md:justify-between gap-4">
        {/* Logo */}
        <Link href={home} className="flex items-center flex-shrink-0" aria-label="Podoloģijas Klīnika Pārdaugava">
          <Image
            src="/logo-full.png"
            alt="Podoloģijas Klīnika Pārdaugava"
            width={240}
            height={240}
            priority
            className="h-20 sm:h-20 md:h-20 lg:h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface hover:text-primary text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageSwitcher lang={lang} />
          <a
            href={`tel:${PHONE}`}
            className="text-primary hover:text-primary-container text-base font-semibold transition-colors hidden xl:inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-secondary-container text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-primary-container hover:scale-[1.02] transition-all duration-200 shadow-md shadow-primary/20"
          >
            {t.header.book}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary p-2 absolute right-3 sm:right-4 md:static"
          aria-label={t.header.openMenu}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-surface-container-lowest/98 backdrop-blur-xl shadow-lg shadow-primary/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface hover:text-primary text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-on-surface-variant/15" />
          <div className="flex items-center justify-between">
            <LanguageSwitcher lang={lang} className="text-base" />
            <a
              href={`tel:${PHONE}`}
              className="text-primary text-base font-semibold inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-secondary-container text-sm font-bold uppercase tracking-widest px-6 py-3.5 rounded-xl text-center hover:bg-primary-container transition-colors duration-200 shadow-md shadow-primary/20"
          >
            {t.header.book}
          </a>
        </div>
      )}
    </header>
  );
}
