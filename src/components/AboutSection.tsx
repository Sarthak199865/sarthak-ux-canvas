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
                src="/lovable-uploads/e22bfba9-fde4-4a0e-987c-90dc3d143949.png" 
                alt="Sarthak Sidharth Pany"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-portfolio-black leading-relaxed">
              "Sorry meaningful design begins with purpose - transforming problems into clear, actionable solutions. Like a good book, it reveals needs you didn't know you had and feeds the hunger to solve far more than you imagined."
            </p>
            
            <p className="text-portfolio-black leading-relaxed">
              Apart from designing interfaces, I enjoy reading philosophy, science, and biographies; soul-searching through writing; exploring music—from Indian classical to Western counterpoint; transformed by thinking; running and weight training; sketching; and owning a small terrace garden.
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