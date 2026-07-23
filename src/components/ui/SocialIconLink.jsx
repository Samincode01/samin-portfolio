import { socialIconMap } from "@/lib/socialIcons";
import { cn } from "@/lib/cn";

export default function SocialIconLink({
  id,
  label,
  href,
  className = "",
  iconSize = 16,
}) {
  const Icon = socialIconMap[id];

  if (!Icon) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-[#00eeff] text-[#00eeff] transition-all duration-300 hover:bg-[#00eeff] hover:text-[#1f242d] hover:shadow-[0_0_16px_rgba(0,238,255,0.55)]",
        className,
      )}
    >
      <Icon size={iconSize} />
    </a>
  );
}
