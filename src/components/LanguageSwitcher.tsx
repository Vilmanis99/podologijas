"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "@/i18n/dictionaries";

export default function LanguageSwitcher({
  lang,
  className = "",
}: {
  lang: Lang;
  className?: string;
}) {
  const pathname = usePathname() || "/";
  // Latvian base path (no /ru prefix)
  const base =
    pathname === "/ru" ? "/" : pathname.startsWith("/ru/") ? pathname.slice(3) : pathname;
  const lvHref = base;
  const ruHref = base === "/" ? "/ru" : `/ru${base}`;

  const item = (active: boolean) =>
    `px-1.5 py-0.5 rounded transition-colors ${
      active ? "text-primary font-semibold" : "text-on-surface-variant hover:text-primary"
    }`;

  return (
    <div className={`flex items-center gap-0.5 text-sm ${className}`}>
      <Link href={lvHref} hrefLang="lv" className={item(lang === "lv")} aria-current={lang === "lv"}>
        LV
      </Link>
      <span className="text-on-surface-variant/40">/</span>
      <Link href={ruHref} hrefLang="ru" className={item(lang === "ru")} aria-current={lang === "ru"}>
        RU
      </Link>
    </div>
  );
}
