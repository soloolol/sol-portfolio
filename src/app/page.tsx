import SkillList from '@/components/SkillList';
import ProjectList from '@/components/ProjectList';
import { fetchSkills, fetchProjects } from '@/lib/api';
import ContactList from '@/components/ContactList';
import IntroButtons from '@/components/IntroButtons';
import Introduction from '@/components/Introduction';

export default async function Home() {
  const [skills, projects] = await Promise.all([
    fetchSkills(),
    fetchProjects(),
  ]);

  return (
    <main className="container max-w-5xl mx-auto px-6 py-12">
      <section
        id="intro"
        className="flex flex-col justify-between items-center md:max-w-2xl mx-auto pb-12"
      >
        <div className="flex justify-center items-center">
          <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
            <img
              className="w-56 h-56 rounded-full border-2 object-cover animate-wiggle shadow-xl"
              src="/sol.jpeg"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col justify-end text-center md:text-right min-h-56">
            <h1 className="text-4xl font-bold mb-2">SOL</h1>
            <p className="text-xl mb-4 tracking-wide">Creative Engineer</p>
          </div>
        </div>
        <IntroButtons />
        <Introduction />
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
        <ContactList />
      </section>
    </main>
  );
}
