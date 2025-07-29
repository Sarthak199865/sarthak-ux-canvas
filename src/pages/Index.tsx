import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CTASection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
