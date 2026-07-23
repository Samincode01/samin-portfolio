import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavLinks from "@/components/navbar/NavLinks";
import { cn } from "@/lib/cn";

export default function MobileMenu({
  open,
  links,
  activeId,
  onClose,
  onNavigate,
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        type="button"
        className={cn(
          "absolute inset-0 bg-black/60 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Close menu overlay"
        onClick={onClose}
      />

      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-[min(82vw,300px)] flex-col overflow-y-auto bg-[#1f242d] px-6 pb-10 pt-24 shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <NavLinks
          links={links}
          activeId={activeId}
          onNavigate={onNavigate}
          className="flex flex-col gap-5"
          ariaLabel="Mobile"
        />
      </aside>
    </div>
  );
}

export function MobileMenuToggle({ open, onToggle }) {
  return (
    <button
      type="button"
      className="btn btn-ghost btn-square text-white hover:bg-white/5 lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onToggle}
    >
      {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
    </button>
  );
}
