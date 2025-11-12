interface ProjectCardProps {
  title: string;
  subtitle: string;
  link: string;
  imageUrl?: string;
  isInternal?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({ title, subtitle, link, imageUrl, isInternal, onClick }: ProjectCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isInternal && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const commonClasses = "project-card group block bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300";

  if (isInternal) {
    return (
      <div 
        onClick={handleClick}
        className={`${commonClasses} cursor-pointer`}
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
        <p className="text-portfolio-gray font-montreal leading-relaxed text-lg">
          {subtitle}
        </p>
      </div>
      </div>
    );
  }

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClasses}
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
        <p className="text-portfolio-gray font-montreal leading-relaxed text-lg">
          {subtitle}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;