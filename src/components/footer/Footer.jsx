import Link from "next/link";
import Logo from "@/components/Logo";
import SocialIconList from "@/components/ui/SocialIconList";
import BackToTopButton from "@/components/footer/BackToTopButton";
import Container from "@/components/ui/Container";
import { navLinks } from "@/data/navLinks";
import { contactData } from "@/data/contactData";
import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[#1a1e26]">
      <Container className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="min-w-0">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#9ca3af]">
              {siteData.tagline}
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:gap-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    className="text-sm text-[#9ca3af] transition-colors duration-300 hover:text-[#00eeff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Social Links
            </h3>
            <div className="mt-4">
              <SocialIconList socials={contactData.socials} />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-[#15171e]">
        <Container className="flex flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 sm:py-5 lg:px-10">
          <p className="text-center text-xs text-[#9ca3af] sm:text-left sm:text-sm">
            {siteData.copyright}
          </p>
          <BackToTopButton />
        </Container>
      </div>
    </footer>
  );
}
