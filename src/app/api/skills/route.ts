import { NextResponse } from 'next/server';
import data from '@/data/skills';
import type { Skill } from '@/types/skill';

export async function GET(): Promise<ReturnType<typeof NextResponse.json>> {
  return NextResponse.json(data as Skill[]);
}
