
import { Link } from "react-router-dom";

const Navbar = () => {

  const navItems = ['work', 'resume', 'about'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Editable */}
        <div className="flex items-center">
          <Link to="/" className="inline-flex items-center" aria-label="Go to home">
            <img
              src="/lovable-uploads/0bce71b1-cd3a-4291-961c-2fc72cf0227c.png"
              alt="Sarthak UX Designer portfolio logo"
              className="h-8 w-auto brightness-0 invert"
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
                  className="nav-link relative font-cormorant text-white hover:text-white/60 transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'about') {
              return (
                <Link
                  key={item}
                  to="/about"
                  className="nav-link relative font-cormorant text-white hover:text-white/60 transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else if (item === 'work') {
              return (
                <Link
                  key={item}
                  to="/#work"
                  className="nav-link relative font-cormorant text-white hover:text-white/60 transition-all duration-200 capitalize"
                >
                  {item}
                </Link>
              );
            } else {
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className="nav-link relative font-cormorant text-white hover:text-white/60 transition-all duration-200 capitalize"
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