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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'w-[95%] max-w-5xl' 
          : 'w-[90%] max-w-6xl'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(10px) saturate(120%)',
        backgroundColor: isScrolled 
          ? 'rgba(255, 255, 255, 0.85)' 
          : 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        border: `1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'}`,
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)' 
          : '0 4px 16px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center" aria-label="Go to home">
            <img
              src="/lovable-uploads/0bce71b1-cd3a-4291-961c-2fc72cf0227c.png"
              alt="Sarthak UX Designer portfolio logo"
              className={`h-8 w-auto transition-all duration-500 ${isScrolled ? 'brightness-100 invert-0' : 'brightness-0 invert'}`}
              loading="eager"
              decoding="async"
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            if (item === 'resume') {
              return (
                <Link
                  key={item}
                  to="/resume"
                  className={`relative font-cormorant text-[15px] transition-all duration-300 capitalize ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white/70'
                  }`}
                >
                  {item}
                </Link>
              );
            } else if (item === 'about') {
              return (
                <Link
                  key={item}
                  to="/about"
                  className={`relative font-cormorant text-[15px] transition-all duration-300 capitalize ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white/70'
                  }`}
                >
                  {item}
                </Link>
              );
            } else if (item === 'work') {
              return (
                <Link
                  key={item}
                  to="/#work"
                  className={`relative font-cormorant text-[15px] transition-all duration-300 capitalize ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white/70'
                  }`}
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative font-cormorant text-[15px] transition-all duration-300 capitalize ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white/70'
                  }`}
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