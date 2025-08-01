import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const ProjectsPillButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Hide button after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5100);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    const projectsSection = document.querySelector('section:has(h2:contains("Selected works"))');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-40 
        bg-black text-white px-6 py-3 rounded-[32px] 
        flex items-center gap-2 font-cormorant text-sm font-medium
        transition-all duration-300 hover:bg-gray-800
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}
    >
      Projects
      <ChevronDown className="w-4 h-4" />
    </button>
  );
};

export default ProjectsPillButton;