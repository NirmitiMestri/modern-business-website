import CTASection from "@/components/cta";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { WhyChooseUs } from "@/components/why-choose-us";
import HeroSection from "@/container/hero-section";
import { ServicesPreview } from "@/container/service-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </>
  );
}
