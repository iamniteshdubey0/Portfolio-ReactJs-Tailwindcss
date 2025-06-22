import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "project-1",
    desc: "a beautyfull app",
    image: "/projects/p1.png",
    tags: ["ReactJs", "Tailwindcss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 2,
    title: "project-2",
    desc: "a beautyfull app",
    image: "/projects/p2.png",
    tags: ["ReactJs", "Tailwindcss"],
    demoUrl: "#",
    github: "#",
  },
  {
    id: 3,
    title: "project-3",
    desc: "a beautyfull app",
    image: "/projects/p3.png",
    tags: ["ReactJs", "Tailwindcss"],
    demoUrl: "#",
    github: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          ducimus sunt fuga laborum! Corrupti incidunt, itaque molestiae libero
          quibusdam nisi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-sm font-medium rounded-full bg-primary/30 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.desc}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20}></ExternalLink>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20}></Github>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href=""
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my github <ArrowRight size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
