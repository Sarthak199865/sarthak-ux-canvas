import { useEffect, useState } from "react";

const AnimatedMesh = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary mesh gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--primary) / 0.1) 0%, 
            transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
            hsl(var(--secondary) / 0.08) 0%, 
            transparent 50%)`,
          transition: "all 0.3s ease-out",
        }}
      />
      
      {/* Secondary floating orbs */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 0.8}% ${mousePosition.y * 1.2}%, 
            hsl(var(--accent) / 0.06) 0%, 
            transparent 40%),
            radial-gradient(circle at ${mousePosition.x * 1.3}% ${mousePosition.y * 0.7}%, 
            hsl(var(--primary) / 0.04) 0%, 
            transparent 35%)`,
          transition: "all 0.4s ease-out",
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: "transform 0.6s ease-out",
        }}
      />
    </div>
  );
};

export default AnimatedMesh;