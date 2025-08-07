'use client';

import { useState } from 'react';

export default function BinuContent() {
  const [isBinuOpen, setIsBinuOpen] = useState(false);

  const toggleBinuDetails = () => {
    setIsBinuOpen((prev) => !prev);
  };
  return (
    <section className="flex flex-col items-center text-gray-800 text-[15px] leading-relaxed">
      <div className="text-center p-5">
        <div className="flex items-center justify-center gap-5">
          <h2 className="text-2xl font-bold mb-2">
            🧼 비누있어? | 화장실 위생 리뷰 앱
          </h2>
          <button className="flex items-center gap-2 py-1 px-5 rounded-2xl bg-gray-700/70 text-white">
            figma
            <img
              width="12"
              alt="Figma-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/64px-Figma-logo.svg.png?20250625151003"
            />
          </button>
        </div>
        <p>
          화장실의 비누 유무, 전반적인 위생 상태를 사용자 리뷰를 통해 공유하고
          확인할 수 있는 하이브리드 앱
        </p>
        <p>
          React Native + Next.js 기반의 WebView 하이브리드 구조로 제작, 위치
          기반 리뷰 작성, 지도 기반 탐색, 위생 정보 공유 기능을 제공
        </p>
        <div className="flex justify-end">
          <button
            className="py-2 px-5 rounded-2xl bg-teal-200 shadow-sm"
            onClick={() => toggleBinuDetails()}
          >
            {isBinuOpen ? '접어두기' : '펼쳐보기'}
          </button>
        </div>
      </div>

      {isBinuOpen && (
        <div id="binu-details" className="flex flex-col space-y-7 py-8 w-4/5">
          <div>
            <h3 className="text-xl font-semibold mb-2">🔧 프로젝트 개요</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>개발 기간:</strong> 2025.06 ~ 진행 중
              </li>
              <li>
                <strong>개발 형태:</strong> 개인 프로젝트
              </li>
              <li>
                <strong>기술 스택:</strong>
                <ul className="ml-6 list-disc space-y-1">
                  <li>React Native, Next.js, TypeScript, TailwindCSS</li>
                  <li>
                    Zustand, TanStack Query (예정), WebView, Naver Maps SDK
                  </li>
                  <li>PNPM, Monorepo, ESLint, Prettier, CI/CD 등</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🧩 프로젝트 구조 및 구성 방식
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Monorepo 구조 도입</strong>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    <code>apps/mobile</code>: React Native 앱 (쉘)
                  </li>
                  <li>
                    <code>apps/web</code>: Next.js 기반의 WebView 콘텐츠
                  </li>
                  <li>
                    <code>packages/*</code>: 공통 유틸, 타입, 디자인 시스템 등
                  </li>
                  <li>
                    앱/웹의 코드 재사용성과 관리 효율을 높이기 위해 pnpm 기반
                    Monorepo 구성
                  </li>
                </ul>
              </li>
              <li>
                <strong>하이브리드 앱 구성</strong>: Native는 기능 담당,
                WebView는 UI 담당
              </li>
              <li>
                <strong>상태 관리 및 로그인 흐름 개선</strong>: Zustand로 퍼미션
                상태 및 흐름 제어
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">✨ 주요 기능</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>화장실 위생 정보 확인 및 리뷰 작성</strong>
                <ul className="ml-6 list-disc space-y-1">
                  <li>비누, 비데, 휴지, 청결도 등 위생 정보 등록</li>
                  <li>사진 첨부, 자동 위치 인식, 설명 작성 기능</li>
                </ul>
              </li>
              <li>
                <strong>지도 기반 탐색 기능</strong>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Naver Maps SDK 기반</li>
                  <li>현재 위치 중심 탐색 및 리뷰 위치 표시</li>
                </ul>
              </li>
              <li>
                <strong>회원가입 및 로그인</strong>
                <ul className="ml-6 list-disc space-y-1">
                  <li>이메일 기반 가입</li>
                  <li>프로필 수정, 닉네임 유효성 검사, 이미지 등록</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              💡 왜 이렇게 만들었나요?
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>하이브리드 앱 구조 선택</strong>: 배포 효율성과 UI
                유연성을 동시에 확보
              </li>
              <li>
                <strong>Monorepo 도입 이유</strong>: 코드 재사용성과 모듈화,
                테스트 용이성
              </li>
              <li>
                <strong>상태 관리 도구 선택</strong>: 단순한 전역 상태와 비동기
                흐름에 맞는 Zustand 사용
              </li>
              <li>
                React Query → TanStack Query로 전환 예정: 캐시 활용으로 검색
                속도 개선 목표
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🔧 직접 개선한 점</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>로그인 이후 퍼미션 흐름 개선</strong>: 미들웨어에서
                로그인 성공 시 퍼미션 확인 및 상태 갱신
              </li>
              <li>
                <strong>닉네임 유효성 검사 방식 분리</strong>: UX를 고려한 입력
                흐름 개선
              </li>
              <li>
                <strong>WebView 초기 렌더링 최적화</strong>: renderWait 조건
                조정 및 로딩 UI 개선
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              🚀 앞으로 추가하고 싶은 기능
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>딥링크를 통한 장소 공유 기능</li>
              <li>TanStack Query 전환 및 검색 결과 캐싱 최적화</li>
              <li>PWA 버전 대응 및 배포</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">🧠 배운 점</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                React Native와 Next.js의 네이티브/웹 차이를 깊이 이해하게 됨
              </li>
              <li>모노레포 설계를 통해 구조적 사고 및 협업 고려한 개발 진행</li>
              <li>
                앱의 핵심 구조를 스스로 설계하고 개선하며 상태 흐름 전반에 대한
                감을 익힘
              </li>
              <li>UX를 위한 실질적인 개선 작업 경험 축적</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
