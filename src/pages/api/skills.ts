import { NextApiRequest, NextApiResponse } from 'next';
import type { Skill } from '@/types/skill';

const data: Skill[] = [
  {
    name: 'HTML5',
    tagStyle: 'i',
    fontAwesomeClass: 'fa-brands fa-html5',
    iconColor: 'text-red-500',
  },
  {
    name: 'JavaScript',
    tagStyle: 'i',
    fontAwesomeClass: 'fa-brands fa-js',
    iconColor: 'text-yellow-400',
  },
  {
    name: 'Java',
    tagStyle: 'i',
    fontAwesomeClass: 'fa-brands fa-java',
    iconColor: 'text-orange-500',
  },
  {
    name: 'React',
    tagStyle: 'i',
    fontAwesomeClass: 'fa-brands fa-react',
    iconColor: 'text-blue-400',
  },
  {
    name: 'Vue.js',
    tagStyle: 'i',
    fontAwesomeClass: 'fa-brands fa-vuejs',
    iconColor: 'text-green-400',
  },
  {
    name: 'Next.js',
    tagStyle: 'img',
    imageSrc: 'next.jpg',
    imageAlt: 'next.js',
  },
  {
    name: 'SpringBoot',
    tagStyle: 'img',
    imageSrc: 'spring.svg',
    imageAlt: 'springboot',
  },
  {
    name: 'Elasticsearch',
    tagStyle: 'img',
    imageSrc: 'elasticsearch.svg',
    imageAlt: 'elasticsearch',
  },
  {
    name: 'TailwindCSS',
    tagStyle: 'img',
    imageSrc: 'tailwind.png',
    imageAlt: 'tailwindcss',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skill[]>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(data);

    default:
      return res.status(405);
  }
}
