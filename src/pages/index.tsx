import { InferGetStaticPropsType } from 'next';
import { toast } from '@/components/toast/store';
import SkillList from '@/components/SkillList';
import { fetchSkills, fetchProjects } from '@/lib/api';
import ProjectList from '@/components/ProjectList';

export const getStaticProps = async () => {
  const [skills, projects] = await Promise.all([
    fetchSkills(),
    fetchProjects(),
  ]);
  return {
    props: {
      skills,
      projects,
    },
  };
};

export default function Home({
  skills,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
  };

  const handleCopyEmail = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    cb: () => void
  ) => {
    const email = e.currentTarget.querySelector('span')?.textContent;
    if (email) {
      copyToClipboard(email)
        .then(() => {
          cb();
        })
        .catch((error) => {
          console.error('복사 실패:', error);
        });
    }
  };

  return (
    <main className="container max-w-5xl mx-auto px-6 py-12">
      <section
        id="intro"
        className="flex flex-col min-h-96 md:flex-row justify-between items-center mb-20"
      >
        <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
          <img
            className="w-56 h-56 rounded-full border-2 object-cover animate-wiggle"
            src="/sol.jpeg"
            alt="profileImage"
          />
        </div>
        <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold mb-2">SOL</h1>
          <p className="text-xl mb-4">크리에이티브 엔지니어</p>
          <p className="text-gray-600 dark:text-gray-400">
            다양한 기술 스택을 경험하며 빠르게 배우고 성장해온 개발자 <br />
            데이터 엔지니어링부터 백엔드, 프론트엔드까지 폭넓은 경험을
            쌓아왔습니다. 디자인 전공자로서의 감각과 논리적인 사고를 결합하여,
            직관적이고 효율적인 사용자 경험을 제공하는 데 집중합니다. 작은 요소
            하나도 고민하며 더 나은 방향으로 개선하는 개발자가 되기 위해
            끊임없이 성장하고 있습니다.
          </p>
        </div>
      </section>

      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">기술</h2>
        <SkillList skills={skills} />
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
        <ProjectList projects={projects} />
      </section>

      <section id="about" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">교육 및 경력</h2>
        <div className="grid grid-cols-1 gap-6">
          <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 max-sm:text-[15px] max-sm:px-3 hover:scale-105 transition-transform duration-300">
            <ul className="list-inside text-gray-800 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="mr-3">2023.01 ~ 2025.01</span> 👉 메이팜소프트
                - 풀스택 개발
              </li>
              <li>
                <span className="mr-3">2021.12 ~ 2022.05</span> 👉 멀티캠퍼스 -
                데이터 엔지니어링 전문가 과정 수료 (844시간)
              </li>
              <li>
                <span className="mr-3">2012.03 ~ 2017.02</span> 👉 건국대학교 -
                자율전공학부(자연계열) 입학, 의상디자인 학사 졸업
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">연락처</h2>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <a
            href="https://github.com/soloolol"
            target="_blank"
            className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
          <a
            href="https://torybean.tistory.com/"
            target="_blank"
            className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <i className="fa-brands fa-b" />
            <span>Blog</span>
          </a>
          <a
            onClick={(event) =>
              handleCopyEmail(event, () =>
                toast({ message: '클립보드에 복사되었습니다! 👏🏻' })
              )
            }
            className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            <i className="fa-regular fa-envelope" />
            <span>soloolol222@gmail.com</span>
          </a>
        </div>
      </section>
    </main>
  );
}
