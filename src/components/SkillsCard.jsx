export default function SkillsCard({ skill }) {
  const Icon = skill?.icon;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 mb-4 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-full h-full" style={{ fill: skill.color }} />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-full" />
        )}
      </div>

      <h3 className="text-sm font-bold text-gray-800 tracking-tight">
        {skill.name}
      </h3>
    </div>
  );
}
