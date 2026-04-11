import ProjectContainer from "./ProjectContainer"

export default function Projects() {
  return (
    <div className="w-full py-24 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-gray-900">
          Projects
        </h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto" />
      </div>
      <ProjectContainer/>
    </div>
  );
}
