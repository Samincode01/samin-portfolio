import SocialIconLink from "@/components/ui/SocialIconLink";
import { cn } from "@/lib/cn";

export default function SocialIconList({
  socials,
  className = "",
  itemClassName = "h-11 w-11",
  iconSize = 16,
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3.5", className)} aria-label="Social links">
      {socials.map((social) => (
        <li key={social.id}>
          <SocialIconLink
            id={social.icon ?? social.id}
            label={social.label}
            href={social.href}
            className={itemClassName}
            iconSize={iconSize}
          />
        </li>
      ))}
    </ul>
  );
}
