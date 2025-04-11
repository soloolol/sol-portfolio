import type { Skill } from '@/types/skill';
import type { Project } from '@/types/project';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api/skills`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch skills');
    return res.json();
  } catch (err) {
    console.error('Error fetching skills:', err);
    return [];
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`${BASE_URL}/api/projects`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
};
