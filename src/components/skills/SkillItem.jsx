"use client";

import { useEffect, useRef, useState } from "react";
import { skillIconColors, skillIconMap } from "@/lib/skillIcons";
import { cn } from "@/lib/cn";

export default function SkillItem({ skill }) {
  const [value, setValue] = useState(0);
  const itemRef = useRef(null);
  const Icon = skillIconMap[skill.icon];
  const colorClass = skillIconColors[skill.icon] ?? "text-[#00eeff]";

  useEffect(() => {
    const node = itemRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValue(skill.percentage);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [skill.percentage]);

  return (
    <div ref={itemRef} className="flex min-w-0 items-center gap-3.5 sm:gap-4 md:gap-5">
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 sm:h-[52px] sm:w-[52px]",
          colorClass,
        )}
        style={{ borderColor: "currentColor" }}
      >
        <Icon size={22} className={colorClass} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-end justify-between gap-2 sm:mb-2">
          <h4 className="truncate text-sm font-medium tracking-wide text-white sm:text-[15px]">
            {skill.name}
          </h4>
          <span className="shrink-0 text-sm font-semibold text-white sm:text-[15px]">
            {skill.percentage}%
          </span>
        </div>

        <progress
          className="skill-progress progress h-2.5 w-full max-w-full bg-[#2a303a]"
          value={value}
          max={100}
          aria-label={`${skill.name} proficiency ${skill.percentage}%`}
        />
      </div>
    </div>
  );
}
