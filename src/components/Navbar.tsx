import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [logo, setLogo] = useState("Sarthak");
  const [isEditing, setIsEditing] = useState(false);

  const handleLogoEdit = () => {
    setIsEditing(true);
  };

  const handleLogoSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const navItems = ['work', 'resume', 'about'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Editable */}
        <div className="font-cormorant font-medium text-xl text-portfolio-black">
          {isEditing ? (
            <input
              type="text"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              onKeyDown={handleLogoSave}
              onBlur={() => setIsEditing(false)}
              className="bg-transparent border-none outline-none text-xl font-medium"
              autoFocus
            />
          ) : (
            <Link
              to="/"
              onClick={handleLogoEdit}
              className="cursor-pointer hover:text-portfolio-gray transition-colors duration-200"
            >
              {logo}
            </Link>
          )}
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            if (item === 'resume') {
              return (
                <Link
                  key={item}
                  to="/resume"
                  className="nav-link relative font-cormorant text-portfolio-black hover:text-portfolio-gray transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'about') {
              return (
                <Link
                  key={item}
                  to="/about"
                  className="nav-link relative font-cormorant text-portfolio-black hover:text-portfolio-gray transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'work') {
              return (
                <Link
                  key={item}
                  to="/#work"
                  className="nav-link relative font-cormorant text-portfolio-black hover:text-portfolio-gray transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-link relative font-cormorant text-portfolio-black hover:text-portfolio-gray transition-all duration-200 capitalize"
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