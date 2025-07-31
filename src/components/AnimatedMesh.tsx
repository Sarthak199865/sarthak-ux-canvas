import { useEffect, useState } from "react";

const AnimatedMesh = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Static Circle Container */}
      <div className="relative w-64 h-64 rounded-full overflow-hidden opacity-60">
        {/* Sky-like mesh gradient that responds to cursor */}
        <div
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(135, 206, 235, 0.8) 0%, 
                rgba(176, 224, 230, 0.6) 25%, 
                rgba(255, 255, 255, 0.4) 50%, 
                transparent 70%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
                rgba(70, 130, 180, 0.6) 0%, 
                rgba(135, 206, 235, 0.4) 30%, 
                transparent 60%),
              radial-gradient(circle at ${mousePosition.x * 0.8}% ${mousePosition.y * 1.2}%, 
                rgba(255, 255, 255, 0.7) 0%, 
                rgba(176, 196, 222, 0.5) 40%, 
                transparent 70%),
              linear-gradient(45deg, 
                rgba(173, 216, 230, 0.3) 0%, 
                rgba(135, 206, 235, 0.2) 50%, 
                rgba(176, 224, 230, 0.3) 100%)
            `,
          }}
        />
        
        {/* Additional flowing cloud-like effects */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `
              radial-gradient(ellipse at ${mousePosition.x * 1.1}% ${mousePosition.y * 0.9}%, 
                rgba(255, 255, 255, 0.6) 0%, 
                rgba(240, 248, 255, 0.4) 35%, 
                transparent 55%),
              radial-gradient(ellipse at ${mousePosition.x * 0.7}% ${mousePosition.y * 1.3}%, 
                rgba(176, 224, 230, 0.5) 0%, 
                rgba(173, 216, 230, 0.3) 40%, 
                transparent 65%)
            `,
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedMesh;