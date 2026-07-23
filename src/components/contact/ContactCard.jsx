import { contactIconMap } from "@/lib/contactIcons";
import { cn } from "@/lib/cn";

export default function ContactCard({
  label,
  value,
  href,
  icon,
  external = false,
}) {
  const Icon = contactIconMap[icon];

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex min-w-0 items-center gap-3 rounded-2xl border border-white/8 bg-[#323946] p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300",
        "hover:-translate-y-1 hover:border-[#00eeff]/60 hover:shadow-[0_0_28px_rgba(0,238,255,0.16)] sm:gap-4 sm:p-4 md:gap-5 md:p-5",
      )}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00eeff]/35 bg-[#00eeff]/10 text-[#00eeff] transition-all duration-300 group-hover:bg-[#00eeff] group-hover:text-[#1f242d] sm:h-12 sm:w-12 md:h-14 md:w-14">
        <Icon size={18} aria-hidden="true" />
      </span>

      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9ca3af] sm:text-xs">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-white transition-colors duration-300 group-hover:text-[#00eeff] sm:text-base">
          {value}
        </span>
      </span>
    </a>
  );
}
