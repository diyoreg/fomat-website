import { safeFetch } from "@/sanity/lib/client";
import { clientLogosQuery, projectsQuery } from "@/sanity/lib/queries";
import type { ClientLogoDoc, ProjectDoc } from "@/sanity/lib/types";
import ProjectsContent from "./ProjectsContent";

export const revalidate = 60;

export default async function ProjectsPage() {
  const [projects, logos] = await Promise.all([
    safeFetch<ProjectDoc[]>(projectsQuery, {}, []),
    safeFetch<ClientLogoDoc[]>(clientLogosQuery, {}, []),
  ]);
  return <ProjectsContent projects={projects} logos={logos} />;
}
