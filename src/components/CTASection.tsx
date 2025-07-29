import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Button 
          variant="outline" 
          size="lg"
          className="cta-button font-montreal font-medium text-lg px-8 py-6 border-2 border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-white transition-all duration-300"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default CTASection;