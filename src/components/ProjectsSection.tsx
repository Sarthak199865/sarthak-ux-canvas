import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MEET.O",
      subtitle: "Seamless connections, effortless bookings",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=199-5689&viewport=722%2C63%2C0.04&t=PEgYyf50Lv5blfOp-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/84278395-6524-4982-8b2d-df6387690e12.png"
    },
    {
      title: "Medicare",
      subtitle: "Empowering fitness through incentivizing fitness",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6448&viewport=454%2C652%2C0.05&t=fD6hbb47DT92k4Hb-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/b86cbf4f-e012-4094-b092-9aff693a2bc7.png"
    },
    {
      title: "MetroGlide",
      subtitle: "Inclusive mobile app for effortless train ticket booking",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6643&viewport=454%2C652%2C0.05&t=Xbh1iBoAscIwjhJB-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/eb135a10-1649-49aa-bb48-be5e4d73fb6b.png"
    },
    {
      title: "Nexxiot",
      subtitle: "Empowering Freight transport with realtime insights and enhanced safety",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6860&viewport=440%2C157%2C0.04&t=829RM0DTplaV64Xd-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/5105f7a4-5d10-4add-9a4c-2a21f283391d.png"
    },
    {
      title: "Wealthy",
      subtitle: "A new generation mobile app created for financial advisors and their clients",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-11479&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/9395b6a1-1290-48d1-b569-6a9792cc4650.png"
    },
    {
      title: "Mercedes Me",
      subtitle: "An inhouse app for the customers and users of Mercedes",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-15721&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/51dc41d9-ec5d-43b2-a9d0-05de7718798a.png"
    },
    {
      title: "Dialysis Pro",
      subtitle: "A cloud based digital management system",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=14-2354&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "/lovable-uploads/6f28a0ee-603b-49b7-8677-02d6d27a92b7.png"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-montreal font-medium text-portfolio-black mb-12">
          Selected works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              figmaLink={project.figmaLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;