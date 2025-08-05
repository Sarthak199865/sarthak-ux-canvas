import Navbar from "@/components/Navbar";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-cormorant font-semibold text-portfolio-black mb-8 text-center">
            Resume
          </h1>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/ed489714-95fe-405a-b56d-088a88b50c97.png" 
              alt="Sarthak Sidharth Pany Resume"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;