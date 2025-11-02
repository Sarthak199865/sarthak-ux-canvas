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
    <nav className="fixed top-[10px] left-0 right-0 z-50 px-6">
      <div 
        className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center transition-all duration-500"
        style={{
          borderRadius: '18px',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(12px) saturate(150%)',
          backgroundColor: isScrolled 
            ? 'rgba(255, 255, 255, 0.85)' 
            : 'rgba(255, 255, 255, 0.1)',
          boxShadow: isScrolled
            ? '0 2px 16px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            : '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Logo - Left */}
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center" aria-label="Go to home">
            <img
              src="/lovable-uploads/0bce71b1-cd3a-4291-961c-2fc72cf0227c.png"
              alt="Sarthak UX Designer portfolio logo"
              className={`h-8 w-auto transition-all duration-500 ${
                isScrolled ? 'brightness-100 invert-0' : 'brightness-0 invert'
              }`}
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
                  className={`relative font-cormorant text-[15px] transition-all duration-500 capitalize ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white'
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
                  className={`relative font-cormorant text-[15px] transition-all duration-500 capitalize ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white'
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
                  className={`relative font-cormorant text-[15px] transition-all duration-500 capitalize ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white'
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
                  className={`relative font-cormorant text-[15px] transition-all duration-500 capitalize ${
                    isScrolled 
                      ? 'text-gray-900 hover:text-gray-600' 
                      : 'text-white/95 hover:text-white'
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
