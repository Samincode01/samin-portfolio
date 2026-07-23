import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProfileCard from "@/components/about/ProfileCard";
import AboutTabs from "@/components/about/AboutTabs";

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" prefix="About" accent="Me" />
      <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[300px_minmax(0,1fr)]">
        <ProfileCard />
        <AboutTabs />
      </div>
    </Section>
  );
}
