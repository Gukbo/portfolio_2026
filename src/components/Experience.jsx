import { Experience_DATA } from "../data/experienceData";

export default function Experience() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white py-16 px-4">
      <div className="flex flex-col w-full max-w-5xl items-center">
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter  text-gray-900">
          Experience
        </h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto" />
        {Experience_DATA.map((exp) => (
          <div
            key={exp.name}
            className="flex flex-col w-1/2 gap-4 border-2 border-gray-100 shadow-md mt-12 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">{exp.name}</h2>
            <p>📆 {exp.duration}</p>
            <p>😊 {exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
