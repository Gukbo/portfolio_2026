import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "../data/projectData";

export default function ProjectContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto px-4">
      {PROJECTS_DATA.map((project) => (
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  );
}
