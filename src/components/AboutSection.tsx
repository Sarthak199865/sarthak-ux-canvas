import { Linkedin, Edit3, Grid3X3 } from "lucide-react";

const AboutSection = () => {
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
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-lg overflow-hidden bg-portfolio-gray/10">
              <img 
                src="/lovable-uploads/f5e283c1-24ee-45e8-b5b7-b92272f8c36a.png" 
                alt="Sarthak Sidharth Pany"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 font-fira-mono">
            <p className="text-portfolio-black leading-relaxed font-instrument-serif italic text-2xl" style={{ fontWeight: 100 }}>
              "Every meaningful design begins with purpose - transforming problems into clear, actionable solutions. Like a{" "}
              <a 
                href="https://www.figma.com/proto/pGVNiMpXtU7uNkG3RhNinu/Untitled?page-id=30%3A2&node-id=44-13&viewport=-6246%2C1064%2C0.25&t=exykmpygX2CLuS5J-1&scaling=min-zoom&content-scaling=fixed"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4 bg-[hsl(45,70%,60%)]"
              >
                good book
              </a>
              , it reveals needs you didn't know you had and feeds the hunger to solve far more than you imagined."
            </p>
            
            <p className="text-portfolio-black leading-relaxed">
              Apart from designing interfaces, I enjoy reading philosophy, science, and biographies; soul-searching through writing; exploring music—from Indian classical to Western country—that transforms my thinking; running and weight training; sketching; and tending a small terrace garden.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-gray hover:text-portfolio-black transition-colors duration-200 p-2 border border-portfolio-gray/20 rounded-lg hover:border-portfolio-black/20"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;