import { NextResponse } from 'next/server';
import data from '@/data/projects';
import type { Project } from '@/types/project';

export async function GET(): Promise<ReturnType<typeof NextResponse.json>> {
  return NextResponse.json(data as Project[]);
}
