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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out">
      <div 
        className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center"
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          backgroundColor: 'transparent',
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
