import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi2";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Container from "@/components/ui/Container";
import TechBadge from "@/components/ui/TechBadge";
import ButtonLink from "@/components/ui/ButtonLink";
import BulletList from "@/components/ui/BulletList";
import ProjectBanner, {
  ProjectMetaHeading,
} from "@/components/projects/ProjectBanner";
import type { Project } from "@/data/projects";
import { IMAGE_SIZES } from "@/lib/constants";

type ProjectDetailsContentProps = {
  project: Project;
};

export default function ProjectDetailsContent({
  project,
}: ProjectDetailsContentProps) {
  return (
    <article className="overflow-x-hidden bg-[#1f242d] text-white">
      <ProjectBanner project={project} />

      <Container className="px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <ButtonLink
          href="/#projects"
          variant="outline"
          size="sm"
          className="mb-6 px-5 sm:mb-8"
        >
          <HiArrowLeft size={16} />
          Back to Projects
        </ButtonLink>

        <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#323946]">
            <OptimizedImage
              src={project.image}
              alt={project.name}
              fill
              sizes={IMAGE_SIZES.projectDetail}
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <ProjectMetaHeading prefix="Technology" accent="Stack" />
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} className="px-3 py-1.5 text-xs sm:text-sm">
                  {tech}
                </TechBadge>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={project.liveUrl}
                external
                variant="primary"
                className="w-full sm:w-auto"
              >
                <FaExternalLinkAlt size={13} />
                Live Link
              </ButtonLink>
              <ButtonLink
                href={project.githubClientUrl}
                external
                variant="outline"
                className="w-full sm:w-auto"
              >
                <FaGithub size={15} />
                GitHub Client
              </ButtonLink>
            </div>
          </div>
        </div>

        <section className="mt-10 sm:mt-12 lg:mt-14">
          <ProjectMetaHeading prefix="Detailed" accent="Description" />
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#9ca3af] sm:text-base sm:leading-8">
            {project.detailedDescription}
          </p>
        </section>

        <section className="mt-8 sm:mt-10 lg:mt-12">
          <ProjectMetaHeading prefix="Challenges" accent="Faced" />
          <BulletList items={project.challenges} />
        </section>

        <section className="mt-8 sm:mt-10 lg:mt-12">
          <ProjectMetaHeading prefix="Future" accent="Improvements" />
          <BulletList items={project.futureImprovements} />
        </section>
      </Container>
    </article>
  );
}
