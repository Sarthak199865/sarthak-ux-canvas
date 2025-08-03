import { Linkedin, Twitter, Mail, Edit3, Grid3X3 } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#", // You can replace with your actual links
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
    },
    {
      name: "Substack",
      icon: Mail,
      href: "#",
    },
    {
      name: "Medium",
      icon: Edit3,
      href: "#",
    },
    {
      name: "Behance",
      icon: Grid3X3,
      href: "#",
    },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-black transition-colors duration-200"
                aria-label={link.name}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;