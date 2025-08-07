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
    <div className="flex flex-col items-center bg-violet-50 dark:bg-gray-800 rounded-3xl p-4 hover:scale-105 transition-transform duration-300">
      {tagStyle === 'i' ? (
        <i className={`${fontAwesomeClass} ${iconColor} text-4xl`} />
      ) : (
        <img className="max-w-11 h-10 pb-0.5" src={imageSrc} alt={imageAlt} />
      )}
      <p className="md:text-lg font-semibold">{name}</p>
    </div>
  );
}
