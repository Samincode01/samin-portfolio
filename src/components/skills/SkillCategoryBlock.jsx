import SkillItem from "@/components/skills/SkillItem";

export default function SkillCategoryBlock({ category }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-6 text-lg font-semibold text-[#00eeff] sm:mb-8 sm:text-xl md:text-2xl">
        {category.title}
      </h3>

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:gap-y-9 md:grid-cols-2 md:gap-x-14 lg:gap-x-16 lg:gap-y-10">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
