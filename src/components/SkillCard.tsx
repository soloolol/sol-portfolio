import type { Skill } from '@/types/skill';

export default function SkillCard({
  name,
  tagStyle,
  fontAwesomeClass,
  iconColor,
  imageSrc,
  imageAlt,
}: Skill) {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
      {tagStyle === 'i' ? (
        <i className={`${fontAwesomeClass} ${iconColor} text-4xl`} />
      ) : (
        <img className="max-w-11 h-10 pb-0.5" src={imageSrc} alt={imageAlt} />
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
}
