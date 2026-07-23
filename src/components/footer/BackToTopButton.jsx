import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  return (
    <Link
      href="/#home"
      aria-label="Back to top"
      className="flex h-10 w-10 items-center justify-center rounded-[4px] border-2 border-[#00eeff] bg-transparent text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00eeff] hover:text-[#1f242d] hover:shadow-[0_0_16px_rgba(0,238,255,0.4)]"
    >
      <FaArrowUp size={14} aria-hidden="true" />
    </Link>
  );
}
