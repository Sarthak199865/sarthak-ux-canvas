interface ProjectCardProps {
  title: string;
  subtitle: string;
  figmaLink: string;
}

const ProjectCard = ({ title, subtitle, figmaLink }: ProjectCardProps) => {
  return (
    <a 
      href={figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block p-6 rounded-xl border border-border hover:bg-muted/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="space-y-3">
        <h3 className="project-title text-xl font-montreal font-medium text-portfolio-black group-hover:text-portfolio-gray transition-colors duration-200 relative">
          {title}
        </h3>
        <p className="text-portfolio-gray font-montreal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;