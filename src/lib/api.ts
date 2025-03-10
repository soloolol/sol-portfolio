import axios from 'axios';
import type { Skill } from '@/types/skill';
import type { Project } from '@/types/project';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const { data } = await axios.get<Skill[]>(`${BASE_URL}/api/skills`);
    return data;
  } catch (err) {
    console.error('Error fetching skills:', err);
    return [];
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await axios.get<Project[]>(`${BASE_URL}/api/projects`);
    return data;
  } catch (err) {
    console.error('Error fetching projects:', err);
    return [];
  }
};
