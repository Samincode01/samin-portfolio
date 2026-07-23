import Link from "next/link";
import { cn } from "@/lib/cn";

export default function NavLinks({
  links,
  activeId,
  onNavigate,
  className = "",
  linkClassName = "",
  ariaLabel = "Primary",
}) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {links.map((link) => {
        const isActive = activeId === link.id;

        return (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            className={cn(
              "relative text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 xl:text-sm",
              "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#00eeff] after:transition-all after:duration-300 hover:after:w-full",
              isActive
                ? "text-[#00eeff] after:w-full"
                : "text-white hover:text-[#00eeff]",
              linkClassName,
            )}
            onClick={() => onNavigate?.(link.id)}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
