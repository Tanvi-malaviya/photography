
import ArtStorySection from "../../components/home/ArtStorySection";
import FeaturedWork from "../../components/home/FeaturedWork";
import HeroCinematic from "../../components/home/HeroSection";
import HeroSection from "../../components/home/HeroSection";
import OurApproach from "../../components/home/OurApproach";
import PortfolioSection from "../../components/home/PortfolioSection";
import ServicesSection from "../../components/home/ServicesSection";
import TestimonialSection from "../../components/home/TestimonialSection";
import WhyChooseSection from "../../components/home/WhyChooseSection";


export default function Home() {
  return (
    <>
  <HeroCinematic />
  <ArtStorySection />
  <WhyChooseSection />
  <ServicesSection />
  <FeaturedWork />
  <OurApproach />
  <PortfolioSection />
  <TestimonialSection />

    </>
  );
}
