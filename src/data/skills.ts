export type SkillIconId =
  | "html5"
  | "css3"
  | "javascript"
  | "react"
  | "nextjs"
  | "tailwind"
  | "nodejs"
  | "express"
  | "python"
  | "mongodb"
  | "mysql"
  | "postgresql"
  | "git"
  | "figma"
  | "vscode"
  | "postman";

export type Skill = {
  name: string;
  percentage: number;
  icon: SkillIconId;
};

export type SkillCategory = {
  id: "frontend" | "backend" | "database" | "tools";
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML5", percentage: 95, icon: "html5" },
      { name: "CSS3", percentage: 90, icon: "css3" },
      { name: "JavaScript", percentage: 75, icon: "javascript" },
      { name: "React", percentage: 70, icon: "react" },
      { name: "Next.js", percentage: 70, icon: "nextjs" },
      { name: "Tailwind CSS", percentage: 85, icon: "tailwind" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", percentage: 70, icon: "nodejs" },
      { name: "Express.js", percentage: 65, icon: "express" },
      { name: "Python", percentage: 60, icon: "python" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", percentage: 65, icon: "mongodb" },
      { name: "MySQL", percentage: 60, icon: "mysql" },
      { name: "PostgreSQL", percentage: 55, icon: "postgresql" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", percentage: 80, icon: "git" },
      { name: "Figma", percentage: 80, icon: "figma" },
      { name: "VS Code", percentage: 85, icon: "vscode" },
      { name: "Postman", percentage: 65, icon: "postman" },
    ],
  },
];
