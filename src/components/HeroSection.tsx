import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  
  const words = [
    { text: "Hi", className: "text-portfolio-gray" },
    { text: "I", className: "text-portfolio-gray" },
    { text: "am", className: "text-portfolio-gray" },
    { text: "Sarthak,", className: "text-portfolio-black font-medium" },
    { text: "a", className: "text-portfolio-black" },
    { text: "product", className: "text-portfolio-black" },
    { text: "designer", className: "text-portfolio-black" },
    { text: "who", className: "text-portfolio-black" },
    { text: "loves", className: "text-portfolio-black" },
    { text: "ideas", className: "text-portfolio-black" },
    { text: "and", className: "text-portfolio-black" },
    { text: "their", className: "text-portfolio-black" },
    { text: "design", className: "text-portfolio-black" },
    { text: "implementations", className: "text-portfolio-black" },
    { text: "to", className: "text-portfolio-black" },
    { text: "solve", className: "text-portfolio-black" },
    { text: "real", className: "text-portfolio-black" },
    { text: "world", className: "text-portfolio-black" },
    { text: "problems.", className: "text-portfolio-black" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleWords < words.length) {
        setVisibleWords(prev => prev + 1);
      }
    }, 150); // Faster, more rhythmic timing

    return () => clearTimeout(timer);
  }, [visibleWords, words.length]);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montreal leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`${word.className} ${
                    index < visibleWords 
                      ? 'opacity-100 animate-fade-in-up' 
                      : 'opacity-0'
                  } inline-block mr-3`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {word.text}
                </span>
              ))}
            </h1>
            
            {/* CTA Button */}
            <div 
              className={`${
                visibleWords >= words.length 
                  ? 'opacity-100 animate-fade-in-up' 
                  : 'opacity-0'
              }`}
              style={{
                animationDelay: `${words.length * 0.15 + 0.5}s`,
                animationFillMode: 'forwards'
              }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="cta-button font-montreal font-medium text-lg px-8 py-6 border-2 border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-white transition-all duration-300 rounded-lg"
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Picture Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 lg:w-80 lg:h-80 bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
              <span className="text-muted-foreground font-montreal">Your Picture Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;