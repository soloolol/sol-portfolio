function Intro() {
  return (
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
          사용자 경험을 고려한 섬세한 UI 개발을 지향합니다. 디자인 전공자로서의
          감각과 논리적인 사고를 결합하여, 더욱 직관적이고 효율적인 프론트엔드
          개발을 만들어가고자 합니다.
        </p>
      </div>
    </section>
  );
}
export default Intro;
