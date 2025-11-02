import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['work', 'resume', 'about'];

  return (
    <nav 
      className="fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
        backgroundColor: isScrolled 
          ? 'rgba(255, 255, 255, 0.08)' 
          : 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div 
        className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center"
        style={{
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)' 
            : '0 4px 16px rgba(31, 38, 135, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Logo - Left */}
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center" aria-label="Go to home">
            <img
              src="/lovable-uploads/0bce71b1-cd3a-4291-961c-2fc72cf0227c.png"
              alt="Sarthak UX Designer portfolio logo"
              className="h-8 w-auto brightness-0 invert transition-all duration-500"
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Navigation Items - Right */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            if (item === 'resume') {
              return (
                <Link
                  key={item}
                  to="/resume"
                  className="relative font-cormorant text-[15px] text-white/95 hover:text-white transition-all duration-300 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'about') {
              return (
                <Link
                  key={item}
                  to="/about"
                  className="relative font-cormorant text-[15px] text-white/95 hover:text-white transition-all duration-300 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'work') {
              return (
                <Link
                  key={item}
                  to="/#work"
                  className="relative font-cormorant text-[15px] text-white/95 hover:text-white transition-all duration-300 capitalize"
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative font-cormorant text-[15px] text-white/95 hover:text-white transition-all duration-300 capitalize"
                >
                  {item}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
