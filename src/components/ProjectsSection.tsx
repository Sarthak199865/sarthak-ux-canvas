import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "MEET.O",
      subtitle: "Seamless connections, effortless bookings",
      figmaLink: "https://figma.com/meet-o" // Replace with actual Figma link
    },
    {
      title: "Medicare",
      subtitle: "Empowering fitness through incentivizing fitness",
      figmaLink: "https://figma.com/medicare" // Replace with actual Figma link
    },
    {
      title: "MetroGlide",
      subtitle: "Inclusive mobile app for effortless train ticket booking",
      figmaLink: "https://figma.com/metroglide" // Replace with actual Figma link
    },
    {
      title: "Nexxiot",
      subtitle: "Empowering Freight transport with realtime insights and enhanced safety",
      figmaLink: "https://figma.com/nexxiot" // Replace with actual Figma link
    },
    {
      title: "Wealthy",
      subtitle: "A new generation mobile app created for financial advisors and their clients",
      figmaLink: "https://figma.com/wealthy" // Replace with actual Figma link
    },
    {
      title: "Mercedes Me",
      subtitle: "An inhouse app for the customers and users of Mercedes",
      figmaLink: "https://figma.com/mercedes-me" // Replace with actual Figma link
    },
    {
      title: "Dialysis Pro",
      subtitle: "A cloud based digital management system",
      figmaLink: "https://figma.com/dialysis-pro" // Replace with actual Figma link
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;