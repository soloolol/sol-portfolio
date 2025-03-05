import { NestedListComponent } from '@/components/ui/NestedList';
import type { Project } from '@/pages/api/projects';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {projects?.map((item) => (
        <article
          key={item.name}
          className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="md:shrink-0 md:basis-1/3">
            <img
              className="w-full h-48 object-cover"
              src={
                item.imgSrc ||
                'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600'
              }
              alt={item.name + ' 이미지'}
            />
            <div className="grid grid-cols-1 gap-2 p-3 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {item.name}
              </h3>
              <div className="flex flex-wrap">
                {item.techStack.map((stack) => (
                  <span
                    key={stack}
                    className="bg-gray-200 dark:bg-gray-700 text-xs mr-0.5 mb-0.5 px-2 py-0.5 rounded-md border border-gray-300 dark:border-gray-600"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex justify-start space-x-2">
                {item.gitHub && (
                  <a
                    href={item.gitHub}
                    className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
                  >
                    GitHub
                  </a>
                )}
                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                  >
                    바로가기
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="basis-auto flex flex-col justify-center p-3 md:p-6">
            <div className="flex flex-col justify-center mb-3">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {`${item.startDate} ~ ${item.endDate}`}
              </h4>
              <p>{item.summary}</p>
            </div>
            <div className="flex flex-col justify-center">
              <NestedListComponent items={item.impact} />
            </div>
            {item.learningPoint && (
              <div className="flex flex-col justify-center mt-3">
                <p className="whitespace-pre-wrap text-sm">
                  ✅
                  <a className="underline font-semibold italic decoration-sky-500 mx-3">
                    learning point :
                  </a>
                  {item.learningPoint}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
