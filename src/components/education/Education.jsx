import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/timeline/Timeline";
import { educationData } from "@/data/education";

export default function Education() {
  const timelineItems = educationData.map((item) => ({
    id: item.id,
    title: item.degree,
    subtitle: item.institute,
    meta: item.session,
    badge: item.cgpa,
    description: item.description,
  }));

  return (
    <Section id="education" aria-labelledby="education-heading">
      <SectionHeading id="education-heading" prefix="My" accent="Education" />
      <Timeline items={timelineItems} />
    </Section>
  );
}
