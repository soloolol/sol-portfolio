import SkillList from '@/components/SkillList';
import ProjectList from '@/components/ProjectList';
import { fetchSkills, fetchProjects } from '@/lib/api';
import ContactList from '@/components/ContactList';

export default async function Home() {
  const [skills, projects] = await Promise.all([
    fetchSkills(),
    fetchProjects(),
  ]);

  return (
    <main className="container max-w-5xl mx-auto px-6 py-12">
      <section
        id="intro"
        className="flex flex-col space-y-14 justify-center items-center my-12 md:my-24"
      >
        <div className="flex justify-center items-center">
          <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
            <img
              className="w-56 h-56 rounded-full border-2 object-cover animate-wiggle"
              src="/sol.jpeg"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col justify-end text-center md:text-right min-h-56">
            <h1 className="text-4xl font-bold mb-2">SOL</h1>
            <p className="text-xl mb-4 tracking-wide">Creative Engineer</p>
          </div>
        </div>
        <div className="max-w-2xl text-gray-500 dark:text-gray-400 text-center">
          <p className="intro-left-quotation font-serif text-5xl text-gray-400 dark:text-gray-300 text-left">
            &lsquo;
          </p>
          <p className="indent-5">
            데이터 파이프라인 구축, 검색 시스템 개발, 전자상거래 프론트 구현 등
            다양한 영역의 실무를 경험하며, 시스템 전반의 구조와 데이터 흐름을
            이해하는 시야를 갖추게 되었습니다. 기능 단위의 구현을 넘어, 전체
            서비스의 맥락 속에서 기술적 완성도와 사용자 경험을 함께 고려하며
            문제를 해결해왔습니다.
          </p>
          <p>
            현재는 React와 TypeScript 기반의 프론트엔드 개발에 집중하고 있으며,
            컴포넌트 중심의 설계, UI/UX 개선, 사용자 흐름 최적화 역량을 키워가고
            있습니다. 디자인 전공자로서의 감각과 논리적인 사고를 바탕으로
            직관적이고 세련된 인터페이스 구현에 강점을 가지고 있으며, 세심한
            개선과 지속적인 학습을 통해 더 나은 경험을 만들어가는 개발자가
            되고자 합니다.
          </p>
          <p className="intro-right-quotation font-serif text-5xl text-gray-400 dark:text-gray-300 text-right">
            &rsquo;
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
        <ContactList />
      </section>
    </main>
  );
}
