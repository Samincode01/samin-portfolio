import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/#home"
      className="flex shrink-0 items-center gap-2 sm:gap-2.5"
      aria-label="SAMIN home"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path
          d="M8 6h12.5c4.2 0 7.5 3.1 7.5 7.2 0 3.2-1.9 5.9-4.7 6.9L28 30h-5.2l-4.4-9.2H13V30H8V6Zm5 10.2h7.2c1.9 0 3.3-1.4 3.3-3.1S22.1 10 20.2 10H13v6.2Z"
          fill="#00eeff"
        />
        <circle cx="28.5" cy="7.5" r="2.5" fill="#00eeff" />
      </svg>
      <span className="text-lg font-bold uppercase tracking-[0.12em] text-white sm:text-xl">
        SAMIN
      </span>
    </Link>
  );
}
