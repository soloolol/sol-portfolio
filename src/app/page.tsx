import SkillList from '@/components/SkillList';
import ProjectList from '@/components/ProjectList';
import { fetchSkills, fetchProjects } from '@/lib/api';
import ContactList from '@/components/ContactList';
import IntroButtons from '@/components/IntroButtons';
import Introduction from '@/components/Introduction';
import { NestedListComponent } from '@/components/ui/NestedList';
import PersonalProject from '@/components/PersonalProject';

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
        className="flex flex-col items-center py-16 w-full bg-gray-800"
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
        className="flex flex-col items-center py-16 bg-[#c0fbec]/60 text-gray-800"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">개인 프로젝트</h2>
        <div className="flex flex-col items-center md:w-3/5 p-3 mx-2 my-5 md:px-20 md:py-10 md:my-10 space-y-10 bg-white/10 rounded-2xl shadow-md">
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
          <PersonalProject />
        </div>
        <div className="flex flex-col items-center md:w-3/5 p-2 mx-2 my-5 md:px-20 md:py-10 md:my-10 space-y-10 bg-white/10 rounded-2xl shadow-md">
          <section className="flex flex-col items-center md:max-w-4xl text-[15px] leading-relaxed">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-5">
                <h2 className="text-xl md:text-2xl font-bold leading-none">
                  👤 포트폴리오 웹사이트
                </h2>
                <a
                  className="flex items-center gap-2 py-1 px-3 md:px-5 rounded-2xl bg-gray-700/70 text-white"
                  href="https://github.com/soloolol"
                  target="_blank"
                >
                  github
                  <i className="fa-brands fa-github" />
                </a>
              </div>
              <div>
                <p>개인 기술 포트폴리오 웹사이트 제작 및 배포</p>
              </div>
            </div>
            <div className="flex flex-col space-y-7 py-8 w-4/5 text-sm md:text-[15px]">
              <div className="flex flex-wrap">
                {['React', 'Next.js', 'TailwindCSS'].map((stack) => (
                  <span
                    key={stack}
                    className="text-sm mr-0.5 mb-0.5 px-2 py-0.5 rounded-md border border-gray-300 dark:border-gray-600"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <NestedListComponent
                  items={[
                    {
                      id: '1',
                      label:
                        'page 라우트에서 app 라우트로 마이그레이션 → 서버 컴포넌트와 클라이언트 컴포넌트의 책임 분리',
                    },
                    {
                      id: '2',
                      label:
                        '서버 컴포넌트에서 fetch 함수의 캐시 전략(force-cache, no-store)을 적절히 적용해 API 요청 최적화',
                    },
                    {
                      id: '3',
                      label:
                        '상태 관리를 서버 → 클라이언트 흐름 중심으로 재구성하여 초기 렌더링 속도 개선',
                    },
                    {
                      id: '4',
                      label:
                        '다크모드 상태를 localStorage와 싱크하여 깜빡임 현상 제거',
                    },
                    {
                      id: '5',
                      label:
                        '외부 라이브러리 없이 react-toastify 구조를 참고해 경량 토스트 팝업 커스텀 구현',
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col justify-center mt-3">
                <p className="whitespace-pre-wrap text-sm">
                  ✅
                  <a className="underline font-semibold italic decoration-sky-500 mx-3">
                    learning point :
                  </a>
                  서버 컴포넌트 기반의 최적화 경험과 Next.js 구조 이해도 심화,
                  이벤트 기반 패턴(Subscribe/Notify)을 활용한 UI 업데이트 방식
                  학습
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="career" className="flex flex-col items-center py-16">
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
