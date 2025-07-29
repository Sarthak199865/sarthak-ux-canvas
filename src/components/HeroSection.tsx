import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visibleText, setVisibleText] = useState(0);
  
  const textSegments = [
    { text: "Hi I am ", className: "text-portfolio-gray" },
    { text: "Sarthak", className: "text-portfolio-black font-medium" },
    { text: ", a product designer who loves ideas and their design implementations to solve real world problems.", className: "text-portfolio-black" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleText < textSegments.length) {
        setVisibleText(prev => prev + 1);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [visibleText, textSegments.length]);

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montreal leading-tight">
              {textSegments.map((segment, index) => (
                <span
                  key={index}
                  className={`${segment.className} ${
                    index < visibleText 
                      ? 'opacity-100 animate-typing' 
                      : 'opacity-0'
                  } transition-opacity duration-800`}
                  style={{
                    animationDelay: `${index * 0.8}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {segment.text}
                </span>
              ))}
            </h1>
          </div>

          {/* Picture Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
              <span className="text-muted-foreground font-montreal">Your Picture Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;