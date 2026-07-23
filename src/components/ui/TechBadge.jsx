import { cn } from "@/lib/cn";

export default function TechBadge({ children, className = "" }) {
  return (
    <span
      className={cn(
        "rounded-full border border-[#00eeff]/40 bg-[#00eeff]/10 px-2.5 py-1 text-[11px] font-medium text-[#00eeff] sm:px-3 sm:text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
