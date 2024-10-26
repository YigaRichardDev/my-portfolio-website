import React from "react";
import { projects, Project } from "./projectData";

const LatestProjects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-p4 lg:h-[450px] font-roboto">
      {/* Component Header */}
      <h2 className="text-heading font-bold text-center mb-p4">Latest <span className="text-primary">Projects</span></h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="relative overflow-hidden border shadow-lg group"
          >
            {/* Project Image with Zoom on Hover */}
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />

            {/* Bottom Left Overlay */}
            <div className="absolute bottom-0 left-0 bg-primary bg-opacity-60 p-4 text-white w-full">
              <h3 className="text-sm font-semibold">{project.name}</h3>
              <p className="text-sm">{project.category}</p>
            </div>

            {/* Blue Border on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-primary transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
