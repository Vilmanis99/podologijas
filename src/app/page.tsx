import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PromoBanner from "@/components/PromoBanner";
import Services from "@/components/Services";
import Specialists from "@/components/Specialists";
import Vakances from "@/components/Vakances";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import PromoStrip from "@/components/PromoStrip";

export default function Home() {
  return (
    <>
      <div className="md:fixed md:top-0 md:left-0 md:right-0 md:z-50">
        <PromoStrip />
        <Header />
      </div>
      <main>
        <Hero />
        <About />
        <PromoBanner />
        <Services />
        <Specialists />
        <Vakances />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
