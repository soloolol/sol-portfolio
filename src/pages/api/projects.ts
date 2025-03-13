import type { NextApiRequest, NextApiResponse } from 'next';
import type { Project } from '@/types/project';

const data: Project[] = [
  {
    name: '포트폴리오 웹사이트',
    techStack: ['React', 'Next.js', 'TailwindCSS'],
    gitHub: 'https://github.com/soloolol/sol-portfolio',
    demoUrl: 'https://sol-portfolio.vercel.app',
    imgSrc: 'portfolio-website.png',
    startDate: '2025-02',
    endDate: '2025-02',
    summary: '개인 포트폴리오 웹사이트 제작 및 배포',
    impact: [
      {
        id: '1',
        label: '초기 렌더링 최적화',
        children: [
          {
            id: '1-2',
            label:
              '데이터 변경 빈도가 낮은 인덱스 페이지에 ISR과 Revalidation API를 적용하여 렌더링 및 리소스 요청을 최적화, 성능과 효율성 개선',
          },
          {
            id: '1-1',
            label:
              'localstorage의 다크모드 상태 값 동기화 로직 개선하여 테마 초기 적용시 재렌더링 국소화',
          },
        ],
      },
      {
        id: '2',
        label: '경량화된 토스트 팝업 구현',
        children: [
          {
            id: '2-1',
            label:
              '`react-toastify`를 참고하여 필요한 부분만 직접 구현, 불필요한 의존성을 줄이고 성능 최적화',
          },
        ],
      },
    ],
    learningPoint:
      '이벤트 기반 패턴(Subscribe/Notify)을 활용하여, 컴포넌트가 직접 상태를 감지하지 않고 변경 시에만 UI를 업데이트하도록 구현. 이를 통해 상태 관리 라이브러리 없이도 전역 상태를 효율적으로 관리할 수 있음을 학습',
  },
  {
    name: '경찰청 사이버수사포털 시스템',
    techStack: ['JavaScript', 'Java', 'Spring Boot', 'SVN'],
    imgSrc: 'cyber-portal.png',
    startDate: '2024-08',
    endDate: '2024-12',
    summary: '경찰청 포털 시스템 개편 및 검색 고도화 프로젝트 – 개발 리딩',
    impact: [
      {
        id: '1',
        label: '레거시 개선을 통한 유지보수성과 성능 향상',
        children: [
          {
            id: '1-1',
            label:
              '데이터와 화면을 분리하여 유연한 화면 대응 및 코드 재사용성 증가',
          },
        ],
      },
      {
        id: '2',
        label: '검색 화면의 복잡성을 효율적으로 관리',
        children: [
          {
            id: '2-1',
            label:
              '다양한 옵션 조합에 따른 화면 변화를 다형성과 재사용성이 높은 컴포넌트 구조로 해결',
          },
        ],
      },
      {
        id: '3',
        label: '주도적인 개발 리딩을 통한 프로젝트 일정 단축',
        children: [
          {
            id: '3-1',
            label:
              '불확실한 요구사항 속에서도 선제적 개발을 진행하여 9M/M 프로젝트를 6M/M으로 단축, 기한 내 성공적 완료',
          },
        ],
      },
    ],
  },
  {
    name: '서울연구원 범죄 예고 신고 지원 서비스',
    techStack: ['Vue.js', 'Java', 'Spring Boot', 'Vite', 'Git'],
    startDate: '2024-05',
    endDate: '2024-08',
    summary:
      '크롤링, OCR 등을 통한 범죄 예고 및 신고 지원 온라인 서비스 구축 – BO & FO 개발',
    impact: [
      {
        id: '1',
        label: '개발 및 배포 프로세스 최적화',
        children: [
          {
            id: '1-1',
            label:
              'Vite의 빠른 빌드 및 핫 리로딩 지원을 통해 프론트엔드 개발 시간을 단축',
          },
        ],
      },
      {
        id: '2',
        label: '배포 프로세스 최적화',
        children: [
          {
            id: '2-1',
            label:
              '프론트엔드 애플리케이션을 백엔드 서버에서 직접 서빙하도록 구성하여 배포 과정 단순화 및 운영 효율성 증대',
          },
        ],
      },
      {
        id: '3',
        label: '협업 환경 개선',
        children: [
          {
            id: '3-1',
            label:
              'ESLint, Prettier를 적극 도입하여 코드 퀄리티 및 스타일 유지',
          },
        ],
      },
    ],
  },
  {
    name: '한국토지주택공사 지식관리시스템',
    techStack: ['JavaScript', 'Java', 'Spring Boot', 'Thymeleaf', 'SVN'],
    startDate: '2024-03',
    endDate: '2024-05',
    summary: '한국토지주택공사 지식관리시스템 구축 – 검색 파트 개발',
    impact: [
      { id: '1', label: '검색 서버 구축 및 개발 프로세스 관리' },
      {
        id: '2',
        label: '통합 검색 페이지 개발',
        children: [
          {
            id: '2-1',
            label:
              '보상정보, 건설관리, 법령정보 등 여러 도메인의 데이터를 통합하여 일관된 검색 환경 제공',
          },
        ],
      },
      {
        id: '3',
        label: '프론트엔드 리팩토링 및 성능 최적화',
        children: [
          {
            id: '3-1',
            label:
              'IE 브라우저 대응을 위해 Babel을 활용하여 ES6+ 코드를 ES5로 변환하여 호환성 문제 해결, 최적화를 통해 브라우저 로딩 시간을 7초 단축하여 사용자 경험 향상',
          },
        ],
      },
    ],
  },
  {
    name: '한국의약품 안전관리원',
    techStack: ['Vue.js', 'Java', 'Spring Boot', 'Elasticsearch'],
    startDate: '2023-09',
    endDate: '2024-01',
    summary:
      '국내외 의약품 문서를 정보 유형에 따라 자동 분류하는 자동화 시스템 개발',
    impact: [
      {
        id: '1',
        label: 'Elasticsearch 자연어 검색을 활용한 문서 분류 정확도 향상',
        children: [
          {
            id: '1-1',
            label: '동의어 사전 구축 및 문장 패턴화를 통해 검색 쿼리 최적화',
          },
        ],
      },
      {
        id: '2',
        label: '고객과의 소통 개선',
        children: [
          {
            id: '2-1',
            label:
              '고객이 분류 기준과 결과를 직관적으로 확인할 수 있도록 UI 개발, 자발적으로 기획 및 구현하여 소통과 검증 과정 개선에 기여',
          },
        ],
      },
      {
        id: '3',
        label: '협업 환경 개선',
        children: [
          {
            id: '3-1',
            label:
              'ESLint, Prettier를 적극 도입하여 코드 퀄리티 및 스타일 유지',
          },
        ],
      },
    ],
  },
  {
    name: '현대제철 전자 상거래 플랫폼',
    techStack: ['Vue.js', 'GitLab', 'Redmine'],
    startDate: '2023-01',
    endDate: '2023-04',
    imgSrc: 'hyundai-steel.png',
    demoUrl: 'https://hcorestore.hyundai-steel.com',
    summary:
      "현대제철 HCORE-STORE, 철강 제품 전자 상거래 프로젝트",
    impact: [
      {
        id: '1',
        label: "PC/모바일 '바로구매', '제품 검색' 등 제품 검색 파트 프론트엔드 개발",
        children: [
          {
            id: '1-1',
            label:
              '경력 이상의 책임이 요구되는 작업을 맡아, 업무 외 추가 학습을 병행하며 성공적으로 수행. 주어진 역할을 넘어 주도적으로 해결',
          },
        ],
      },
    ],
    learningPoint:
      'GitLab, Jenkins, Redmine 등을 활용한 협업 프로세스 경험을 쌓으며, 대규모 프로젝트에서의 효율적인 커뮤니케이션과 일정 관리의 중요성을 학습\nSSR 도입 후 Hydration 오류 발생 → CSR과 SSR의 차이를 직접 체감하며, Hydration 오류 해결 과정에서 Vue의 렌더링 방식에 대한 이해를 심화',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(data);

    default:
      return res.status(405);
  }
}
