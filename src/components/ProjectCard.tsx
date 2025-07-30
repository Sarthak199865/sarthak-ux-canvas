interface ProjectCardProps {
  title: string;
  subtitle: string;
  figmaLink: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, subtitle, figmaLink, imageUrl }: ProjectCardProps) => {
  return (
    <a 
      href={figmaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-center text-muted-foreground font-montreal">
            <div className="w-16 h-16 mx-auto mb-2 bg-border rounded-lg flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-sm">Project Image</span>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6 space-y-3">
        <h3 className="project-title text-xl font-montreal font-medium text-portfolio-black">
          {title}
        </h3>
        <p className="text-portfolio-gray font-montreal leading-relaxed text-sm italic">
          {subtitle}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;