import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StudioSection from "@/components/StudioSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main>
        <HeroSection />
        <StudioSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}
