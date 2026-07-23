import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-heading">
      <SectionHeading id="projects-heading" prefix="My" accent="Portfolio" />
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            category={project.category}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            githubClientUrl={project.githubClientUrl}
          />
        ))}
      </div>
    </Section>
  );
}
