import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PromoBanner from "@/components/PromoBanner";
import Services from "@/components/Services";
import HomeVisit from "@/components/HomeVisit";
import Specialists from "@/components/Specialists";
import Vakances from "@/components/Vakances";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import PromoStrip from "@/components/PromoStrip";
import type { Lang } from "@/i18n/dictionaries";

export default function SiteHome({ lang }: { lang: Lang }) {
  return (
    <>
      <div className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
        <PromoStrip lang={lang} />
        <Header lang={lang} />
      </div>
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <PromoBanner lang={lang} />
        <Services lang={lang} />
        <HomeVisit lang={lang} />
        <Specialists lang={lang} />
        <Vakances lang={lang} />
        <Contacts lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
