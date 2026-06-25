import { Linkedin, Edit3, Grid3X3, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sarthak-sidharth-pany-143a83167/",
    },
    {
      name: "Medium",
      icon: Edit3,
      href: "https://medium.com/@sarthaksidharth",
    },
    {
      name: "Behance",
      icon: Grid3X3,
      href: "https://www.behance.net/sarthakpany",
    },
    {
      name: "Gmail",
      icon: Mail,
      href: "mailto:Sarthaksidharth65@gmail.com",
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
        <p className="mt-8 text-center text-[12px] font-normal text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Some projects in this portfolio are password protected due to Non-Disclosure Agreements (NDAs) and client confidentiality requirements. If you would like to review these case studies, please contact me via email or phone to request access.
        </p>
      </div>
    </footer>
  );
};

export default Footer;