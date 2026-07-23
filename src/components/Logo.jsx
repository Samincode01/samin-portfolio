import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/#home"
      className="flex shrink-0 items-center gap-2 sm:gap-2.5"
      aria-label="SAMIN home"
    >
      <Image
        src="/images/developer_logo.png"
        alt="SAMIN Logo"
        width={36}
        height={36}
        priority
        className="h-8 w-8 sm:h-9 sm:w-9"
      />

      <span className="text-lg font-bold uppercase tracking-[0.12em] text-white sm:text-xl">
        SAMIN
      </span>
    </Link>
  );
}