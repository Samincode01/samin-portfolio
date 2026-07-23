"use client";

import { useEffect, useState } from "react";
import { SCROLL } from "@/lib/constants";

export function useScrolled(offset = SCROLL.navbarOffset) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const idsKey = ids.join("|");

  useEffect(() => {
    const idList = idsKey.split("|").filter(Boolean);
    const sections = idList
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: SCROLL.spyRootMargin,
        threshold: SCROLL.spyThreshold,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [idsKey]);

  return [activeId, setActiveId];
}

export function useBodyScrollLock(locked) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
