import { HiOutlineGlobeAlt, HiOutlineCodeBracket, HiOutlinePaintBrush } from "react-icons/hi2";
import ButtonLink from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

const iconMap = {
  globe: HiOutlineGlobeAlt,
  code: HiOutlineCodeBracket,
  paint: HiOutlinePaintBrush,
};

export default function ServiceCard({
  title,
  description,
  icon,
  featured = false,
  href = "#",
  buttonText = "Read More",
}) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        "group flex h-full flex-col items-center rounded-2xl bg-[#323946] px-6 py-10 text-center transition-all duration-300 sm:px-8 sm:py-12",
        "hover:-translate-y-2 hover:border-[#00eeff] hover:shadow-[0_0_28px_rgba(0,238,255,0.22)]",
        featured
          ? "border-2 border-[#00eeff] shadow-[0_0_24px_rgba(0,238,255,0.18)]"
          : "border-2 border-transparent",
      )}
    >
      <Icon
        size={50}
        className="text-[#00eeff] transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />

      <h3 className="mt-5 text-xl font-bold text-[#00eeff] sm:mt-6 sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-white sm:mt-4 sm:text-[15px] sm:leading-8">
        {description}
      </p>

      <ButtonLink
        href={href}
        variant={featured ? "primaryOnCyan" : "whiteSolid"}
        size="lg"
        className="mt-8 w-full max-w-[180px]"
      >
        {buttonText}
      </ButtonLink>
    </article>
  );
}
