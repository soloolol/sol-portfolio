import type { Skill } from '@/pages/api/skills';
import SkillCard from './SkillCard';

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills?.map((item) => <SkillCard key={item.name} {...item} />)}
    </div>
  );
}
