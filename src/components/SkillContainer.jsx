import { SKILLS_DATA } from "../data/skillData";
import SkillsCard from "./SkillsCard";

export default function SkillContainer() {
  const allSkills = Object.values(SKILLS_DATA)
    .flat()
    .reduce((acc, current) => {
      if (!acc.find((item) => item.name === current.name)) {
        acc.push(current);
      }
      return acc;
    }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full max-w-4xl mx-auto px-4">
      {allSkills.map((skill) => (
        // 💡 3. 하이라이트 없이 데이터만 전달
        <SkillsCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
