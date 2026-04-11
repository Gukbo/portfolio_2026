export default function ProjectCard({ project }) {
  const Thumbnail = project.thumbnail;

  return (
    <div className="flex flex-col justify-center items-center p-6 ">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl p-4 bg-mainbg border-2 hover:shadow-blue-600/50
       hover:border-blue-600 cursor-pointer hover:scale-105 
       hover:bg-blue-600 transition-all ease-in duration-200 
       border-gray-100 shadow-md"
      >
        <div className="flex flex-col w-48 h-72 transition-opacity duration-300 group-hover:opacity-0">
          <Thumbnail className="w-full h-full " />
        </div>

        <div className="absolute inset-0 p-6 justify-center break-keep items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
          <h2 className="font-bold text-2xl">{project.name}</h2>
          <p className="text-sm font-light text-gray-200">{project.date}</p>
          <p className="text-sm font-light pt-5">{project.stack}</p>
          <p className="text-sm font-light pt-5">{project.desc}</p>
        </div>
      </a>
    </div>
  );
}
