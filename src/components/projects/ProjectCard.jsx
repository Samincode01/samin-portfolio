import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineEye } from "react-icons/hi2";
import OptimizedImage from "@/components/ui/OptimizedImage";
import TechBadge from "@/components/ui/TechBadge";
import ButtonLink from "@/components/ui/ButtonLink";
import { IMAGE_SIZES } from "@/lib/constants";

export default function ProjectCard({
  id,
  name,
  description,
  image,
  category,
  technologies,
  liveUrl,
  githubClientUrl,
}) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-transparent bg-[#323946] transition-all duration-300 hover:-translate-y-1 hover:border-[#00eeff]/40 hover:shadow-[0_0_28px_rgba(0,238,255,0.14)]">
      <div className="relative aspect-[3/2] overflow-hidden">
        <OptimizedImage
          src={image}
          alt={name}
          fill
          sizes={IMAGE_SIZES.projectCard}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#00eeff]/95 via-[#00eeff]/80 to-[#00eeff]/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-center text-lg font-bold text-white sm:text-xl">
            {category}
          </p>
          <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#00eeff] text-white shadow-sm ring-2 ring-white/30">
            <FaExternalLinkAlt size={13} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="break-words text-base font-bold text-white sm:text-lg">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#9ca3af] sm:leading-7">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href={liveUrl}
            external
            variant="primary"
            size="sm"
            className="flex-1 sm:flex-none"
          >
            <FaExternalLinkAlt size={12} />
            Live
          </ButtonLink>

          <ButtonLink
            href={githubClientUrl}
            external
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-none"
          >
            <FaGithub size={14} />
            GitHub
          </ButtonLink>

          <ButtonLink
            href={`/projects/${id}`}
            variant="ghost"
            size="sm"
            className="flex-1 sm:flex-none"
          >
            <HiOutlineEye size={15} />
            View Details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
