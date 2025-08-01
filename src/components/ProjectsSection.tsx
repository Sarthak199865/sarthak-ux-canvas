import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MEET.O",
      subtitle: "Seamless connections, effortless bookings",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=199-5689&viewport=722%2C63%2C0.04&t=PEgYyf50Lv5blfOp-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=257-2035&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "Medicare",
      subtitle: "Empowering fitness through incentivizing fitness",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6448&viewport=454%2C652%2C0.05&t=fD6hbb47DT92k4Hb-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=259-2045&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "MetroGlide",
      subtitle: "Inclusive mobile app for effortless train ticket booking",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6643&viewport=454%2C652%2C0.05&t=Xbh1iBoAscIwjhJB-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=269-2147&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "Nexxiot",
      subtitle: "Empowering Freight transport with realtime insights and enhanced safety",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-6860&viewport=440%2C157%2C0.04&t=829RM0DTplaV64Xd-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=268-2094&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "Wealthy",
      subtitle: "A new generation mobile app created for financial advisors and their clients",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-11479&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=269-2171&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "Mercedes Me",
      subtitle: "An inhouse app for the customers and users of Mercedes",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=13-15721&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=269-2707&t=jiZU12yq7A8QVuEV-4"
    },
    {
      title: "Dialysis Pro",
      subtitle: "A cloud based digital management system",
      figmaLink: "https://www.figma.com/proto/J6wAq7hp3eO0AJYc6RP2pb/Untitled?page-id=13%3A966&node-id=14-2354&viewport=371%2C259%2C0.02&t=mvGzCWpvNXYqGeX7-1&scaling=scale-down-width&content-scaling=fixed",
      imageUrl: "https://www.figma.com/design/J6wAq7hp3eO0AJYc6RP2pb/Untitled?node-id=269-2442&t=jiZU12yq7A8QVuEV-4"
    }
  ];

  return (
    <section className="py-20">
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