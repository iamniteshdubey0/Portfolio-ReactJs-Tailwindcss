import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../constants/constants";
import SectionHeading from "./SectionHeading";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title={projects.section.title}
          label={projects.section.label}
        />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {projects.section.desc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.myProjects.map((project, key) => (
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
