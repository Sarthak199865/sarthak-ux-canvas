import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedMesh from "@/components/AnimatedMesh";

const HeroSection = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [temperature, setTemperature] = useState("24°C");
  const [startTyping, setStartTyping] = useState(false);
  
  const words = [
    { text: "Hi", className: "text-portfolio-gray" },
    { text: "I", className: "text-portfolio-gray" },
    { text: "am", className: "text-portfolio-gray" },
    { text: "Sarthak,", className: "text-portfolio-gray" },
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
    if (!startTyping) return; // Don't start typing until startTyping is true
    
    const timer = setTimeout(() => {
      if (visibleWords < words.length) {
        // Play typewriter sound
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBC2Dy/DBRG');
        audio.volume = 0.3;
        audio.play().catch(() => {}); // Ignore errors if audio fails
        
        setVisibleWords(prev => prev + 1);
      }
    }, 120); // Smooth, natural timing

    return () => clearTimeout(timer);
  }, [visibleWords, words.length, startTyping]);

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
            <h1 className="text-2xl font-cormorant leading-tight">
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