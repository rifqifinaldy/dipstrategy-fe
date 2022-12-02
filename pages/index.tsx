import Carousel from "components/Carousels/Carousel";
import AboutSection from "components/Sections/HomeSection/AboutSection/AboutSection";
import ContactSection from "components/Sections/HomeSection/ContactSection/ContactSection";
import PortfolioSection from "components/Sections/HomeSection/PortfolioSection/PortfolioSection";
import ServiceSection from "components/Sections/HomeSection/ServiceSection/ServiceSection";
import ValuesSection from "components/Sections/HomeSection/ValuesSection/ValuesSection";
import WorkflowSection from "components/Sections/HomeSection/WorkflowSection/WorkflowSection";

export default function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <Carousel />
      <ServiceSection />
      <WorkflowSection />
      <PortfolioSection />
      <AboutSection />
      <ValuesSection />
      <ContactSection />
    </div>
  );
}
