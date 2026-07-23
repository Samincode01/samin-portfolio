import TechBadge from "@/components/ui/TechBadge";
import BulletList from "@/components/ui/BulletList";
import { cn } from "@/lib/cn";

export default function TimelineItem({
  title,
  subtitle,
  meta,
  badge,
  description,
  responsibilities,
  variant = "default",
  isLast = false,
}) {
  const isCard = variant === "card";

  const content = (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-sm font-semibold text-[#00eeff] sm:text-base">
          {meta}
        </span>
        {badge ? <TechBadge>{badge}</TechBadge> : null}
      </div>

      <h3 className="mt-2 break-words text-base font-bold text-white sm:text-lg md:text-xl">
        {title}
      </h3>

      {subtitle ? (
        <p className="mt-1 break-words text-sm font-medium text-white/90 sm:text-base">
          {subtitle}
        </p>
      ) : null}

      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9ca3af] sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}

      {responsibilities?.length ? (
        <div className="-mt-1">
          <BulletList items={responsibilities} />
        </div>
      ) : null}
    </>
  );

  return (
    <li className="relative flex gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col items-center">
        <span
          className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-[3px] border-[#00eeff] bg-[#1f242d] shadow-[0_0_12px_rgba(0,238,255,0.55)] sm:h-4 sm:w-4"
          aria-hidden="true"
        />
        {!isLast && (
          <span
            className="mt-2 w-px flex-1 bg-[#00eeff]/35"
            aria-hidden="true"
          />
        )}
      </div>

      <article
        className={cn(
          "min-w-0 flex-1",
          isLast ? "pb-0" : "pb-8 sm:pb-10 md:pb-12",
        )}
      >
        {isCard ? (
          <div className="rounded-xl border border-transparent bg-[#323946] p-4 transition-all duration-300 hover:border-[#00eeff]/50 hover:shadow-[0_0_24px_rgba(0,238,255,0.12)] sm:p-5 md:p-6">
            {content}
          </div>
        ) : (
          content
        )}
      </article>
    </li>
  );
}
