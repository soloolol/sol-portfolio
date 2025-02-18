function Intro() {
  return (
    <section
      id="into"
      className="flex flex-col md:flex-row justify-between items-center mb-12"
    >
      <div className="shrink-0 mb-6 md:mb-0 md:mr-10">
        {/* <img
          className="w-56 h-56 rounded-full border-2 object-cover"
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jack"
          alt="avatar"
        /> */}
        <img
          className="w-56 h-56 rounded-full border-2 object-cover"
          src="/sol.jpeg"
          alt="avatar"
        />
      </div>
      <div className="text-center md:text-right">
        <h1 className="text-4xl font-bold mb-2">sol</h1>
        <p className="text-xl mb-4">혁신적인 개발자</p>
        <p className="text-gray-600 dark:text-gray-400">
          2년 이상의 경력을 가진 열정적인 풀스택 개발자입니다. 확장 가능한 웹
          애플리케이션 구축에 전문성을 갖추고 있으며, 최신 JavaScript
          프레임워크와 클라우드 기술에 대한 전문 지식을 보유하고 있습니다. 항상
          새로운 도전과 학습을 즐깁니다.
        </p>
      </div>
    </section>
  );
}
export default Intro;
