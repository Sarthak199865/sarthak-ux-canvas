import { useEffect, useState } from "react";
import SpaceBackground from "@/components/SpaceBackground";

const HeroSection = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState("24°C");
  const [startTyping, setStartTyping] = useState(false);
  
  const introWords = [
    { text: "HI", className: "text-white italic" },
    { text: "I", className: "text-white italic" },
    { text: "AM", className: "text-white italic" },
    { text: "SARTHAK", className: "text-white italic" }
  ];

  const descriptionWords = [
    { text: "I", className: "text-white" },
    { text: "design", className: "text-white" },
    { text: "intuitive,", className: "text-white" },
    { text: "research-driven", className: "text-white" },
    { text: "digital", className: "text-white" },
    { text: "experiences", className: "text-white" },
    { text: "that", className: "text-white" },
    { text: "simplify", className: "text-white" },
    { text: "complex", className: "text-white" },
    { text: "workflows", className: "text-white" },
    { text: "and", className: "text-white" },
    { text: "help", className: "text-white" },
    { text: "businesses", className: "text-white" },
    { text: "work", className: "text-white" },
    { text: "faster.", className: "text-white" }
  ];

  // Start typing after 1 second
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

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
    <section className="relative flex items-center bg-black" style={{ height: '100vh', width: '100%' }}>
      {/* Space Background */}
      <SpaceBackground />
      
      {/* Top Info Bar */}
      <div className="absolute top-24 left-0 right-0 max-w-7xl mx-auto px-6 z-10">
        <div className="flex justify-between items-center">
          {/* Location & Temperature */}
          <div className="text-xs font-fira-mono text-white/60">
            Bengaluru, {temperature}
          </div>
          
          {/* Date & Time */}
          <div className="text-xs font-fira-mono text-white/60">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex items-center justify-center">
        <div className="text-center max-w-5xl">
          {/* Hero Text */}
          <div>
            {/* Intro Text - HI I AM SARTHAK */}
            <h1 
              className="font-cormorant text-white mb-8 font-black italic uppercase tracking-tight" 
              style={{ fontSize: 'clamp(32px, 6vw, 80px)', letterSpacing: '-0.02em' }}
            >
              {introWords.map((word, index) => (
                <span
                  key={index}
                  className={`${word.className} ${
                    index < visibleWords 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  } inline-block mr-4 transition-all duration-500 ease-out`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {word.text}
                </span>
              ))}
            </h1>
            
            {/* Description Text */}
            <h2 
              className="font-montreal font-normal text-white leading-relaxed" 
              style={{ fontSize: 'clamp(20px, 3vw, 36px)', lineHeight: '1.6' }}
            >
              {descriptionWords.map((word, index) => {
                const globalIndex = index + introWords.length;
                return (
                  <span
                    key={globalIndex}
                    className={`${word.className} ${
                      globalIndex < visibleWords 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    } inline-block mr-2 transition-all duration-500 ease-out`}
                    style={{
                      transitionDelay: `${globalIndex * 100}ms`
                    }}
                  >
                    {word.text}
                  </span>
                );
              })}
            </h2>
            
            {/* Scroll down text with arrow */}
            <div className="text-center mt-20">
              <button 
                className="font-fira-mono text-white border border-white bg-transparent px-8 py-4 inline-flex items-center gap-3 transition-all duration-300 hover:bg-white hover:text-black group"
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="text-sm uppercase tracking-wider">Scroll down to see my works</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;