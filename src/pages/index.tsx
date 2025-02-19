import Toast from '@/components/banner/Toast';
import Intro from '@/components/home/Intro';

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto px-6 py-12">
      <Intro />

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
              alt="전자상거래 플랫폼 이미지"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                전자상거래 플랫폼
              </h3>
              <div className="space-x-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Node.js
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Express
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  MongoDB
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href="#"
                  className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=600"
              alt="작업 관리 앱 이미지"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                작업 관리 앱
              </h3>
              <div className="space-x-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Redux
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Drag and Drop
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Firebase
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href="#"
                  className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=600"
              alt="포트폴리오 웹사이트 이미지"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                포트폴리오 웹사이트
              </h3>
              <div className="space-x-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  HTML
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  CSS
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  JavaScript
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href="#"
                  className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
          <article className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              className="w-full h-48 object-cover"
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=600"
              alt="블로그 플랫폼 이미지"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                블로그 플랫폼
              </h3>
              <div className="space-x-2 mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Next.js
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Tailwind CSS
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-md text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                  Markdown
                </span>
              </div>
              <div className="flex justify-start space-x-2">
                <a
                  href="#"
                  className="text-sm bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 px-3 py-1 rounded-md"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  라이브 데모
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="mt-16">
        <h2 className="text-3xl font-bold mb-6">👨‍🎓 교육 및 경력</h2>
        <div className="grid grid-cols-1 gap-6">
          <article className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form id="contactForm" className="space-y-4">
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
          </form>
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
              href="#"
              target="_blank"
              className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a className="dark:text-gray-300 flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <i className="fa-regular fa-envelope"></i>
              <span>soloolol222@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
      <Toast text="복사되었습니다 👏🏻"></Toast>
    </main>
  );
}
