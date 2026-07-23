import { cn } from "@/lib/cn";

export default function BulletList({ items, className = "" }) {
  return (
    <ul className={cn("mt-4 space-y-2.5 sm:space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-[#9ca3af] sm:text-base sm:leading-8"
        >
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00eeff]"
            aria-hidden="true"
          />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}
