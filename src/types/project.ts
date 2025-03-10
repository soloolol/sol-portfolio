import type { NestedList } from '@/components/ui/NestedList';

export type Project = {
  name: string;
  imgSrc?: string;
  techStack: string[];
  gitHub?: string;
  demoUrl?: string;
  startDate: string;
  endDate: string;
  summary: string;
  impact: NestedList[];
  learningPoint?: string;
};
