import { useQuery } from '@tanstack/react-query';
import type { Project } from '@/pages/api/project';
import axios from 'axios';
import { toast } from '@/components/toast/store';
import { NestedListComponent } from '@/components/ui/NestedList';

export default function Home() {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery<Project[], Error>({
    queryKey: ['projects'],
    queryFn: () => axios.get('/api/project').then((res) => res.data),
    initialData: [],
  });

  const copyToClipboard = (text: string) => {
    return navigator.clipboard.writeText(text);
  };

  const handleCopyEmail = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const email = e.currentTarget.querySelector('span')?.textContent;

    if (email) {
      copyToClipboard(email)
        .then(() => {
          toast({ message: '클립보드에 복사되었습니다! 👏🏻' });
        })
        .catch((error) => {
          console.error('복사 실패:', error);
        });
    }
  };

  return (
    <main className="container max-w-5xl mx-auto px-6 py-12">
      <section
        id="into"
        className="flex flex-col min-h-96 md:flex-row justify-between items-center mb-20"
      >
        <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
          {/* <img
          className="w-56 h-56 rounded-full border-2 object-cover"
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack"
          alt="avatar"
        /> */}
          <img
            className="w-56 h-56 rounded-full border-2 object-cover animate-wiggle"
            src="/sol.jpeg"
            alt="avatar"
          />
        </div>
        <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold mb-2">SOL</h1>
          <p className="text-xl mb-4">스탯 성장형 개발자</p>
          <p className="text-gray-600 dark:text-gray-400">
            다양한 기술 스택을 경험하며 빠르게 배우고 성장해온 개발자 <br />
            데이터 엔지니어링부터 백엔드, 프론트엔드까지 폭넓은 이해를 바탕으로,
            사용자 경험을 고려한 섬세한 UI 개발을 지향합니다. 디자인
            전공자로서의 감각과 논리적인 사고를 결합하여, 더욱 직관적이고
            효율적인 프론트엔드 개발을 만들어가고자 합니다.
          </p>
        </div>
      </section>

      <section id="skills" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">기술</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-brands fa-html5 text-4xl text-red-500"></i>
            <h3 className="text-lg font-semibold">HTML5</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-brands fa-js text-4xl text-yellow-400"></i>
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-brands fa-java text-4xl text-orange-500"></i>
            <h3 className="text-lg font-semibold">Java</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-brands fa-react text-4xl text-blue-400"></i>
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <i className="fa-brands fa-vuejs text-4xl text-green-400"></i>
            <h3 className="text-lg font-semibold">Vue.js</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <img className="max-w-11 h-10 pb-0.5" src="next.jpg"></img>
            <h3 className="text-lg font-semibold">Next.js</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <img className="max-w-11 h-10 pb-0.5" src="spring.svg"></img>
            <h3 className="text-lg font-semibold">SpringBoot</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <img className="max-w-11 h-10 pb-0.5" src="elasticsearch.svg"></img>
            <h3 className="text-lg font-semibold">Elasticsearch</h3>
          </div>
          <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300">
            <img className="max-w-11 h-10 pb-0.5" src="tailwind.png"></img>
            <h3 className="text-lg font-semibold">TailwindCSS</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">프로젝트</h2>
        <div className="grid grid-cols-1 gap-6">
          {isLoading && <p>...Loading</p>}
          {error && <p className="text-red-700">{error.message}</p>}
          {projects.map((item) => (
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
                  <NestedListComponent
                    items={item.impact}
                  ></NestedListComponent>
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
      </section>

      <section id="about" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">교육 및 경력</h2>
        <div className="grid grid-cols-1 gap-6">
          <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 max-sm:text-[15px] max-sm:px-3 hover:scale-105 transition-transform duration-300">
            <ul className="text-gray-800 dark:text-gray-300 leading-relaxed">
              <li>
                <span className="mr-3">2023.01 ~ 2025.01</span> 👉 메이팜소프트
                - 풀스택 개발
              </li>
              <li>
                <span className="mr-3">2021.12 ~ 2022.05</span> 👉 멀티캠퍼스 -
                데이터 엔지니어링 전문가 과정 수료
              </li>
              <li>
                <span className="mr-3">2012.03 ~ 2017.02</span> 👉 건국대학교 -
                의상디자인 학사 졸업
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">연락처</h2>
        <div className="">
          {/* <form id="contactForm" className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                이메일
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                메시지
              </label>
              <textarea
                itemType="text"
                id="message"
                name="message"
                required
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
            >
              이메일 보내기
            </button>
          </form> */}
          <div className="flex flex-col items-center justify-center gap-y-4">
            <a
              href="https://github.com/soloolol"
              target="_blank"
              className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://torybean.tistory.com/"
              target="_blank"
              className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-b"></i>
              <span>Blog</span>
            </a>
            <a
              onClick={handleCopyEmail}
              className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <i className="fa-regular fa-envelope"></i>
              <span>soloolol222@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
