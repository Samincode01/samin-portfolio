"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import NavLinks from "@/components/navbar/NavLinks";
import MobileMenu, { MobileMenuToggle } from "@/components/navbar/MobileMenu";
import { navLinks, navSectionIds } from "@/data/navLinks";
import { useBodyScrollLock, useScrolled, useScrollSpy } from "@/lib/hooks";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const scrolled = useScrolled();
  const [activeId, setActiveId] = useScrollSpy(navSectionIds);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useBodyScrollLock(drawerOpen);

  const handleNavClick = (id) => {
    setActiveId(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-[#1f242d]/95 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="navbar mx-auto min-h-[70px] max-w-[1200px] px-4 sm:min-h-[72px] sm:px-6 lg:px-10">
          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-end">
            <NavLinks
              links={navLinks}
              activeId={activeId}
              onNavigate={handleNavClick}
              className="hidden items-center gap-4 lg:flex xl:gap-7"
            />
            <MobileMenuToggle
              open={drawerOpen}
              onToggle={() => setDrawerOpen((open) => !open)}
            />
          </div>
        </div>
      </header>

      <MobileMenu
        open={drawerOpen}
        links={navLinks}
        activeId={activeId}
        onClose={() => setDrawerOpen(false)}
        onNavigate={handleNavClick}
      />
    </>
  );
}
