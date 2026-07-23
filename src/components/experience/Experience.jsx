import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/timeline/Timeline";
import { experienceData } from "@/data/experience";

export default function Experience() {
  const timelineItems = experienceData.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    meta: item.duration,
    responsibilities: item.responsibilities,
  }));

  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading" prefix="My" accent="Experience" />
      <Timeline items={timelineItems} variant="card" />
    </Section>
  );
}
