import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategoryBlock from "@/components/skills/SkillCategoryBlock";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <SectionHeading id="skills-heading" prefix="My" accent="Skills" />
      <div className="space-y-12 sm:space-y-14 lg:space-y-16">
        {skillCategories.map((category) => (
          <SkillCategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </Section>
  );
}
