import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import ProjectDetailsContent from "@/components/projects/ProjectDetailsContent";
import { getProjectById, projectsData } from "@/data/projects";

type ProjectDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} | TARIF HASAN SAMIN`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetailsContent project={project} />
      </main>
    </>
  );
}
