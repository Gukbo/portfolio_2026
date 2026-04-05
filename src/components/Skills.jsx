import { SKILLS_DATA } from "../data/skillData";

export default function Skills() {
  const categories = Object.keys(SKILLS_DATA);
  // const [active, setActive] = useState("Frontend_Core");
  return (
    <div className="w-full h-screen mx-auto px-4 py-16 bg-white">
      <nav className="mb-12 border-b border-gray-200">
        <ul className=" flex flex-row gap-[clamp(1rem,4vw,3rem)] justify-center w-full">
          {categories.map((category) => (
            <li
              key={category}
              className="pb-4 cursor-pointer text-gray-500 hover:text-blue-600 font-bold transition-colors duration-300"
            >
              {category.replace("_", " ")}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
