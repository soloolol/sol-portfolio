const data = [
  // {
  //   name: '포트폴리오 웹사이트',
  //   techStack: ['React', 'Next.js', 'TailwindCSS'],
  //   gitHub: 'https://github.com/soloolol/sol-portfolio',
  //   demoUrl: 'https://sol-portfolio.vercel.app',
  //   imgSrc: 'portfolio-website.png',
  //   startDate: '2025-02',
  //   endDate: '2025-02',
  //   summary: '개인 기술 포트폴리오 웹사이트 제작 및 배포.',
  //   impact: [
  //     {
  //       id: '1',
  //       label:
  //         'page 라우트에서 app 라우트로 마이그레이션 → 서버 컴포넌트와 클라이언트 컴포넌트의 책임 분리',
  //     },
  //     {
  //       id: '2',
  //       label:
  //         '서버 컴포넌트에서 fetch 함수의 캐시 전략(force-cache, no-store)을 적절히 적용해 API 요청 최적화',
  //     },
  //     {
  //       id: '3',
  //       label:
  //         '상태 관리를 서버 → 클라이언트 흐름 중심으로 재구성하여 초기 렌더링 속도 개선',
  //     },
  //     {
  //       id: '4',
  //       label: '다크모드 상태를 localStorage와 싱크하여 깜빡임 현상 제거',
  //     },
  //     {
  //       id: '5',
  //       label:
  //         '외부 라이브러리 없이 react-toastify 구조를 참고해 경량 토스트 팝업 커스텀 구현',
  //     },
  //   ],
  //   learningPoint:
  //     '서버 컴포넌트 기반의 최적화 경험과 Next.js 구조 이해도 심화\n이벤트 기반 패턴(Subscribe/Notify)을 활용하여, 컴포넌트가 직접 상태를 감지하지 않고 변경 시에만 UI를 업데이트하도록 구현. 이를 통해 상태 관리 라이브러리 없이도 전역 상태를 효율적으로 관리할 수 있음을 학습',
  // },
  {
    name: '경찰청 사이버수사포털 시스템',
    techStack: ['JavaScript', 'Java', 'Spring Boot', 'SVN'],
    imgSrc: 'cyber-portal.png',
    startDate: '2024-08',
    endDate: '2024-12',
    summary:
      '경찰청 사이버수사포털 개편 프로젝트에서 복잡한 검색 시스템 및 화면 구조 리팩터링을 담당. 개발 리딩.',
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
        label: '기획 미확정 상태에서도 주도적으로 개발을 추진, 일정 단축',
        children: [
          {
            id: '3-1',
            label: '9M/M 예상 프로젝트를 6M/M으로 단축하며 성공적 배포',
          },
        ],
      },
    ],
  },
  {
    name: '서울연구원 범죄 예고 신고 지원 서비스',
    techStack: ['Vue.js', 'Java', 'Spring Boot', 'Vite', 'Git'],
    imgSrc: 'crime_prediction.png',
    startDate: '2024-05',
    endDate: '2024-08',
    summary:
      'SNS/웹에서의 범죄 예고를 자동 감지 및 신고할 수 있는 시스템 개발. 프론트엔드 및 일부 백엔드 기능 구현 전반 참여.',
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
    learningPoint:
      '비정형 데이터 처리 프로젝트에서 UX 중심 개발 기획까지 경험\n작은 규모의 프로젝트에서 전체 흐름을 아우르는 시야 확보',
  },
  {
    name: '한국토지주택공사 지식관리시스템',
    techStack: ['JavaScript', 'Java', 'Spring Boot', 'Elasticsearch', 'SVN'],
    imgSrc: 'kms_search.png',
    startDate: '2024-03',
    endDate: '2024-05',
    summary:
      '다양한 업무 도메인의 데이터를 통합 검색할 수 있는 KMS(지식관리시스템) 구축 프로젝트에서 검색 파트 개발 담당.',
    impact: [
      {
        id: '1',
        label: 'Elasticsearch 기반 검색 서버 구축 및 인덱싱 로직 구현',
      },
      {
        id: '2',
        label: '통합 검색 페이지 개발',
        children: [
          {
            id: '2-1',
            label: '여러 도메인의 데이터를 통합하여 일관된 검색 환경 제공',
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
    imgSrc: 'drugsafe_dur.png',
    startDate: '2023-09',
    endDate: '2024-01',
    summary:
      '의약품 관련 문서를 자동 분류하고 검색할 수 있는 시스템 구축. 검색 최적화 및 UI 설계 주도.',
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
      '현대제철 B2B 전자상거래 플랫폼(HCORE-STORE) 개발. 제품 구매 및 검색 기능의 프론트엔드 전반을 담당.',
    impact: [
      {
        id: '1',
        label: 'PC/모바일에서의 제품 검색, 필터, 바로 구매 기능 구현',
      },
      {
        id: '2',
        label: '실무 1년차로서 전자상거래 핵심 화면을 독립 구현',
      },
    ],
    learningPoint:
      'GitLab, Jenkins, Redmine 등을 활용한 협업 프로세스 경험을 쌓으며, 대규모 프로젝트에서의 효율적인 커뮤니케이션과 일정 관리의 중요성을 학습\nSSR 도입 후 Hydration 오류 발생 → CSR과 SSR의 차이를 직접 체감하며, Hydration 오류 해결 과정에서 Vue의 렌더링 방식에 대한 이해를 심화',
  },
];

export default data;
