import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectsPillButton from "@/components/ProjectsPillButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProjectsPillButton />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
