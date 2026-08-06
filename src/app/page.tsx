import type { Metadata } from "next";
import SiteHome from "@/components/SiteHome";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { lv: "/", ru: "/ru" },
  },
};

export default function Home() {
  return <SiteHome lang="lv" />;
}
