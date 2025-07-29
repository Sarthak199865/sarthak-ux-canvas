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
    }, 120); // Smooth, natural timing

    return () => clearTimeout(timer);
  }, [visibleWords, words.length]);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-center">
          {/* Hero Text */}
          <div>
            <h1 className="text-2xl font-montreal leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`${word.className} ${
                    index < visibleWords 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  } inline-block mr-3 transition-all duration-500 ease-out`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {word.text}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;