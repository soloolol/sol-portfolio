'use client';

export default function Introduction() {
  return (
    <div className="flex flex-col items-center w-full sm:pt-14 pb-4 px-5 text-gray-500 dark:text-gray-400 text-center leading-7">
      <div className="flex w-full items-start">
        <img
          className="w-14 mb-2 rotate-[20deg]"
          src="/doubleQ.png"
          alt="doubleQuotation"
        />
      </div>
      <div className="max-w-lg md:max-w-2xl md:text-lg">
        <p className="indent-5">
          <b className="dark:text-gray-300">
            React와 TypeScript 기반의 프론트엔드 개발에 집중하고 있으며,{' '}
          </b>
          컴포넌트 중심의 설계, UI/UX 개선, 성능 최적화 역량을 키워가고
          있습니다.
        </p>
        <p>
          데이터 파이프라인 구축, 검색 시스템 개발, 전자상거래 프론트 구현 등
          다양한 영역의 실무 경험을 바탕으로,{' '}
          <b className="dark:text-gray-300">
            시스템 전반의 구조와 흐름을 이해하는 프론트엔드 개발자
          </b>
          로 성장해왔습니다.
        </p>
        <p className="mt-2">
          디자인 감각과 논리적 사고를 바탕으로, 세련되고 안정적인 인터페이스
          구현에 강점을 가지고 있으며,
        </p>
        <p className="mt-2">
          <b className="dark:text-gray-300">
            단순히 동작하는 UI를 넘어 더 나은 사용자 경험을 제공하는 개발을
            목표로 하고 있습니다.
          </b>
        </p>
      </div>
      <div className="flex w-full justify-between">
        <div></div>
        <img
          className="w-14 rotate-[200deg]"
          src="/doubleQ.png"
          alt="doubleQuotation"
        />
      </div>
    </div>
  );
}
