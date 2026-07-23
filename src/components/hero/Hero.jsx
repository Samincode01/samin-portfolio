import OptimizedImage from "@/components/ui/OptimizedImage";
import SocialIconList from "@/components/ui/SocialIconList";
import ButtonLink from "@/components/ui/ButtonLink";
import AccentText from "@/components/ui/AccentText";
import Container from "@/components/ui/Container";
import HeroImage from "@/components/hero/HeroImage";
import { heroData } from "@/data/heroData";
import { IMAGE_SIZES } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#1f242d] section-shell !pt-6 sm:!pt-10 lg:!pt-12"
      aria-labelledby="hero-name"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,238,255,0.08),_transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[38%] sm:h-[42%] lg:h-[46%]">
          <OptimizedImage
            src="/images/hero-mountains.svg"
            alt=""
            fill
            sizes={IMAGE_SIZES.full}
            className="object-cover object-bottom"
            quality={75}
          />
        </div>
        <div className="absolute -left-20 top-24 h-36 w-36 rounded-full border border-[#00eeff]/15 sm:-left-16 sm:top-28 sm:h-52 sm:w-52" />
        <div className="absolute -right-12 top-36 h-24 w-24 rotate-45 border border-[#00eeff]/20 sm:-right-10 sm:top-40 sm:h-36 sm:w-36" />
        <div className="absolute bottom-[38%] left-[46%] hidden h-16 w-16 rounded-full border border-[#00eeff]/10 lg:block" />
      </div>

      <Container className="relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <h1
            id="hero-name"
            className="break-words text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {heroData.name}
          </h1>

          <p className="mt-3 text-lg font-semibold text-white sm:mt-4 sm:text-xl md:text-2xl lg:text-3xl">
            {heroData.designationPrefix}{" "}
            <AccentText>{heroData.designation}</AccentText>
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#cfd5de] sm:mt-5 sm:text-[15px] sm:leading-8 lg:mx-0">
            {heroData.introduction}
          </p>

          <div className="mt-8 flex justify-center sm:mt-9 lg:justify-start">
            <SocialIconList
              socials={heroData.socials}
              className="justify-center gap-3.5 sm:gap-4 lg:justify-start"
              itemClassName="h-10 w-10 sm:h-11 sm:w-11"
            />
          </div>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:justify-start">
            <ButtonLink
              href={heroData.resumeUrl}
              download
              variant="primary"
              size="lg"
              className="w-full shadow-[0_0_18px_rgba(0,238,255,0.35)] sm:w-auto"
            >
              Download Resume
            </ButtonLink>

            <ButtonLink
              href={heroData.hireMeHref}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Hire Me
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:order-2 lg:max-w-none">
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
