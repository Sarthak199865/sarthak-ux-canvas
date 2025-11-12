import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import PinDialog from "./PinDialog";
import { isPinVerified } from "@/lib/pinProtection";

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [showPinDialog, setShowPinDialog] = useState(false);
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);

  const projects = [
    {
      title: "MEET.O",
      subtitle: "Seamless connections, effortless bookings",
      route: "/projects/meet-o",
      imageUrl: "/lovable-uploads/84278395-6524-4982-8b2d-df6387690e12.png"
    },
    {
      title: "Medicare",
      subtitle: "Empowering fitness through incentivizing fitness",
      route: "/projects/medicare",
      imageUrl: "/lovable-uploads/b86cbf4f-e012-4094-b092-9aff693a2bc7.png"
    },
    {
      title: "MetroGlide",
      subtitle: "Inclusive mobile app for effortless train ticket booking",
      route: "/projects/metroglide",
      imageUrl: "/lovable-uploads/eb135a10-1649-49aa-bb48-be5e4d73fb6b.png"
    },
    {
      title: "Nexxiot",
      subtitle: "Empowering Freight transport with realtime insights and enhanced safety",
      route: "/projects/nexxiot",
      imageUrl: "/lovable-uploads/5105f7a4-5d10-4add-9a4c-2a21f283391d.png"
    },
    {
      title: "Wealthy",
      subtitle: "A new generation mobile app created for financial advisors and their clients",
      route: "/projects/wealthy",
      imageUrl: "/lovable-uploads/9395b6a1-1290-48d1-b569-6a9792cc4650.png"
    },
    {
      title: "Mercedes Me",
      subtitle: "An inhouse app for the customers and users of Mercedes",
      route: "/projects/mercedes-me",
      imageUrl: "/lovable-uploads/51dc41d9-ec5d-43b2-a9d0-05de7718798a.png"
    },
    {
      title: "Dialysis Pro",
      subtitle: "A cloud based digital management system",
      route: "/projects/dialysis-pro",
      imageUrl: "/lovable-uploads/6f28a0ee-603b-49b7-8677-02d6d27a92b7.png"
    },
    {
      title: "Argus: Space debris monitoring and removal system",
      subtitle: "Advanced space technology for orbital debris tracking and removal",
      route: "/projects/argus",
      imageUrl: "/lovable-uploads/d7c60fbe-1a16-426f-96cc-229528fac55f.png"
    }
  ];

  const handleProjectClick = (route: string) => {
    if (isPinVerified()) {
      navigate(route);
    } else {
      setPendingRoute(route);
      setShowPinDialog(true);
    }
  };

  const handlePinSuccess = () => {
    setShowPinDialog(false);
    if (pendingRoute) {
      navigate(pendingRoute);
      setPendingRoute(null);
    }
  };

  const handlePinCancel = () => {
    setShowPinDialog(false);
    setPendingRoute(null);
  };

  return (
    <>
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
                link={project.route}
                imageUrl={project.imageUrl}
                isInternal={true}
                onClick={() => handleProjectClick(project.route)}
              />
            ))}
          </div>
        </div>
      </section>

      <PinDialog
        open={showPinDialog}
        onSuccess={handlePinSuccess}
        onCancel={handlePinCancel}
      />
    </>
  );
};

export default ProjectsSection;