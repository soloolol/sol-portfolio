import SkillList from '@/components/SkillList';
import ProjectList from '@/components/ProjectList';
import { fetchSkills, fetchProjects } from '@/lib/api';
import ContactList from '@/components/ContactList';
import IntroButtons from '@/components/IntroButtons';
import Introduction from '@/components/Introduction';
import BinuContent from '@/components/BinuContent';

export default async function Home() {
  const [skills, projects] = await Promise.all([
    fetchSkills(),
    fetchProjects(),
  ]);

  return (
    <main className="pb-12">
      <section
        id="intro"
        className="flex flex-col justify-center items-center md:max-w-3xl mx-auto"
      >
        <div className="flex justify-center items-center">
          <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
            <img
              className="w-56 h-56 rounded-full border-2 object-cover animate-wiggle shadow-xl"
              src="/sol.jpeg"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col justify-end text-right max-sm:w-min max-sm:ml-6 md:text-right min-h-56">
            <h1 className="text-4xl font-bold mb-2">SOL</h1>
            <p className="text-xl mb-4 tracking-wide">Creative Engineer</p>
          </div>
        </div>
        <IntroButtons />
        <Introduction />
      </section>

      <section
        id="skills"
        className="flex flex-col items-center py-16 w-full bg-gray-900"
      >
        <div>
          <h2 className="text-white text-4xl font-extrabold mb-6 text-center">
            주로 사용하는{' '}
            <span
              className="relative inline-block"
              style={{
                backgroundImage:
                  'radial-gradient(75% 75% at 50% 20%, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 56%, rgb(255, 128, 255) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Skills
              <img
                src="/highlight.png"
                alt="highlight"
                className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-2 w-[120%] pointer-events-none"
              />
            </span>
          </h2>
        </div>
        <SkillList skills={skills} />
      </section>

      <section
        id="projects"
        className="flex flex-col items-center py-16 bg-[#4FD6B2]/25"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">개인 프로젝트</h2>
        <div className="flex flex-col items-center md:w-3/5 sm:px-2 md:px-20 my-10 space-y-10 bg-white/10 rounded-2xl shadow-md">
          <div className="relative w-[350px] mx-auto aspect-[9/19.5]">
            {/* 비디오 먼저 */}
            <video
              className="absolute top-[1.5%] left-[3%] w-[94%] h-[97%] object-cover rounded-[2.5rem] z-0  shadow-2xl"
              autoPlay
              playsInline
              muted
              loop
              src="/Simulator Screen Recording - iPhone16Pro.mp4"
            />

            {/* 아이폰 껍데기 이미지를 위에 덮기 */}
            <img
              src="/apple-iphone-16-pro-max-2024-medium.png"
              alt="iphone"
              className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
            />
          </div>
          <div className="md:max-w-4xl">
            <BinuContent />
          </div>
        </div>
      </section>

      <section id="projects" className="flex flex-col items-center py-16">
        <h2 className="relative text-4xl font-bold mb-6 text-center">
          Career
          <img
            src={'/circle.png'}
            alt="circle"
            className="absolute top-[-80%] left-0 rotate-[30deg] -z-10"
          />
        </h2>
        <ProjectList projects={projects} />
      </section>

      <section id="about" className="flex flex-col items-center py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          학력 및 개발 관련 교육 과정
        </h2>
        <div className="px-5 grid grid-cols-1 gap-6">
          <article className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 max-sm:text-[15px] max-sm:px-3 hover:scale-105 transition-transform duration-300">
            <p>
              <span className="font-semibold mr-3">2021.12 ~ 2022.05</span>{' '}
              멀티캠퍼스 - 데이터 엔지니어링 전문가 과정 (844시간)
            </p>
            <p>
              <span className="font-semibold mr-3">2012.03 ~ 2017.02</span>{' '}
              건국대학교 - 자율전공학부(자연계열) 입학, 의상디자인 학사 졸업
            </p>
          </article>
        </div>
      </section>
      <section id="contact" className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">연락처</h2>
        <ContactList />
      </section>
    </main>
  );
}
