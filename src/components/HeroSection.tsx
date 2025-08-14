import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedMesh from "@/components/AnimatedMesh";

const HeroSection = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState("24°C");
  const [startTyping, setStartTyping] = useState(false);
  
  const introWords = [
    { text: "Hi", className: "text-portfolio-gray italic" },
    { text: "I", className: "text-portfolio-gray italic" },
    { text: "am", className: "text-portfolio-gray italic" },
    { text: "Sarthak", className: "text-portfolio-gray italic" }
  ];

  const descriptionWords = [
    { text: "I", className: "text-portfolio-black" },
    { text: "design", className: "text-portfolio-black" },
    { text: "intuitive,", className: "text-portfolio-black" },
    { text: "research-driven", className: "text-portfolio-black" },
    { text: "digital", className: "text-portfolio-black" },
    { text: "experiences", className: "text-portfolio-black" },
    { text: "that", className: "text-portfolio-black" },
    { text: "simplify", className: "text-portfolio-black" },
    { text: "complex", className: "text-portfolio-black" },
    { text: "workflows", className: "text-portfolio-black" },
    { text: "and", className: "text-portfolio-black" },
    { text: "help", className: "text-portfolio-black" },
    { text: "businesses", className: "text-portfolio-black" },
    { text: "work", className: "text-portfolio-black" },
    { text: "faster.", className: "text-portfolio-black" }
  ];

  // Start typing after 4 seconds
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, 4000);

    return () => clearTimeout(startTimer);
  }, []);

  // Time update effect
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);


  useEffect(() => {
    if (!startTyping) return;
    
    const timer = setTimeout(() => {
      if (visibleWords < introWords.length + descriptionWords.length) {
        setVisibleWords(prev => prev + 1);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [visibleWords, introWords.length, descriptionWords.length, startTyping]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative">
      {/* Animated Mesh Background */}
      <AnimatedMesh />
      {/* Top Info Bar */}
      <div className="absolute top-24 left-0 right-0 max-w-7xl mx-auto px-6 z-10">
        <div className="flex justify-between items-center">
          {/* Location & Temperature */}
          <div className="text-xs font-mono text-portfolio-gray">
            Bengaluru, {temperature}
          </div>
          
          {/* Date & Time */}
          <div className="text-xs font-mono text-portfolio-gray">
            {currentTime.toLocaleDateString('en-GB', { 
              day: '2-digit', 
              month: '2-digit', 
              year: 'numeric' 
            })} • {currentTime.toLocaleTimeString('en-US', { 
              hour12: false,
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex justify-center">
          {/* Hero Text */}
          <div>
            {/* Intro Text - Hi I am Sarthak */}
            <h1 className="font-cormorant text-portfolio-black mb-6" style={{ fontSize: '48px' }}>
              {introWords.map((word, index) => (
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
            
            {/* Description Text */}
            <h2 className="font-montreal font-normal leading-tight" style={{ fontSize: '48px' }}>
              {descriptionWords.map((word, index) => {
                const globalIndex = index + introWords.length;
                return (
                  <span
                    key={globalIndex}
                    className={`${word.className} ${
                      globalIndex < visibleWords 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    } inline-block mr-3 transition-all duration-500 ease-out`}
                    style={{
                      transitionDelay: `${globalIndex * 100}ms`
                    }}
                  >
                    {word.text}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;