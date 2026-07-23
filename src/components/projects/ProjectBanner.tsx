import OptimizedImage from "@/components/ui/OptimizedImage";
import Container from "@/components/ui/Container";
import AccentText from "@/components/ui/AccentText";
import type { Project } from "@/data/projects";
import { IMAGE_SIZES } from "@/lib/constants";

type ProjectBannerProps = {
  project: Project;
};

export default function ProjectBanner({ project }: ProjectBannerProps) {
  return (
    <div className="relative isolate min-h-[220px] overflow-hidden sm:min-h-[300px] lg:min-h-[420px]">
      <OptimizedImage
        src={project.banner}
        alt={`${project.name} banner`}
        fill
        priority
        sizes={IMAGE_SIZES.full}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f242d] via-[#1f242d]/70 to-[#1f242d]/30" />

      <Container className="absolute inset-x-0 bottom-0 z-10 px-4 pb-6 sm:px-6 sm:pb-10 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#00eeff] sm:text-sm">
          {project.category}
        </p>
        <h1 className="mt-2 break-words text-2xl font-bold sm:text-4xl lg:text-5xl">
          {project.name}
        </h1>
      </Container>
    </div>
  );
}

type ProjectMetaProps = {
  project: Project;
};

export function ProjectMetaHeading({
  prefix,
  accent,
}: {
  prefix: string;
  accent: string;
}) {
  return (
    <h2 className="text-xl font-bold sm:text-2xl">
      {prefix} <AccentText>{accent}</AccentText>
    </h2>
  );
}
