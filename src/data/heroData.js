import { socialsData } from "@/data/socials";

export const heroData = {
  name: "TARIF HASAN SAMIN",
  designationPrefix: "And I'm a",
  designation: "Frontend Developer",
  introduction:
    "I craft clean, responsive, and high-performing web interfaces with modern frontend technologies. Focused on pixel-perfect UI, smooth user experiences, and turning thoughtful designs into reliable production-ready products.",
  image: "/images/hero.png",
  resumeUrl: "/resume/resume.pdf",
  hireMeHref: "/#contact",
  socials: socialsData.map(({ id, label, href, icon }) => ({
    id,
    label,
    href,
    icon,
  })),
};
