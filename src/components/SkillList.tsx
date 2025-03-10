import type { Skill } from '@/types/skill';
import SkillCard from './SkillCard';

export default function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills?.map((item) => <SkillCard key={item.name} {...item} />)}
    </div>
  );
}
