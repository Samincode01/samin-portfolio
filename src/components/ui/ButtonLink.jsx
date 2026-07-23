import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border-none bg-[#00eeff] text-[#1f242d] hover:bg-[#00d4e6] hover:shadow-[0_0_24px_rgba(0,238,255,0.55)]",
  primaryOnCyan:
    "border-none bg-[#00eeff] text-white hover:bg-[#00d4e6] hover:shadow-[0_0_24px_rgba(0,238,255,0.55)]",
  outline:
    "border-2 border-[#00eeff] bg-transparent text-[#00eeff] hover:bg-[#00eeff] hover:text-[#1f242d]",
  ghost:
    "border-2 border-white/70 bg-transparent text-white hover:border-[#00eeff] hover:bg-[#00eeff] hover:text-[#1f242d]",
  whiteSolid:
    "border-none bg-white text-[#1f242d] hover:bg-[#00eeff] hover:text-[#1f242d]",
  whiteOutline:
    "border-2 border-white bg-transparent text-white hover:border-[#00eeff] hover:bg-[#00eeff] hover:text-[#1f242d]",
};

const sizes = {
  sm: "h-10 min-h-10 px-4 text-xs",
  md: "h-11 min-h-11 px-6 text-sm",
  lg: "h-11 min-h-11 px-8 text-sm",
};

function shouldUseNextLink(href, { download, external }) {
  if (download || external) return false;
  return href.startsWith("/#") || href.startsWith("/projects/");
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  download = false,
  ...props
}) {
  const classes = cn(
    "btn rounded-full font-semibold transition-all duration-300",
    variants[variant],
    sizes[size],
    className,
  );

  if (shouldUseNextLink(href, { download, external })) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
