import type { ProjectGroup } from './types';

/** 직장 탭: 회사별 묶음 */
export const workProjects: ProjectGroup[] = [
  {
    "company": "일진씨앤에스",
    "start": "2025-03",
    "end": "present",
    "projects": [
      {
        "title": [
          {
            "text": "Syncflo 회계 솔루션 구축"
          }
        ],
        "year": "2025",
        "problem": "구축형(On-Premise) 솔루션이라 고객사마다 쓰는 지도 API(Mapbox, 카카오맵 등)가 달랐고, 지도 로직이 바뀔 때마다 메인 솔루션 코드를 고쳐야 해서 사이드 이펙트 위험이 있었음",
        "approach": "유류대 정산 폼 구조는 유지하고 지도 노출 · 거리 측정 로직만 독립 플러그인 컴포넌트로 분리. 어드민 마스터 설정값에 따라 지도 엔진을 동적으로 전환하고, 신규 고객사에는 해당 모듈만 주입하는 구조로 설계. 매입 세금계산서(외부 데이터 수집, 승인 · 발행 상태 동기화, 세금코드별 과세 · 면세와 부가세 자동 계산)와 법인카드 승인 내역의 전표 폼 자동 매핑도 개발",
        "stack": [
          "Vue.js",
          "Nuxt.js"
        ]
      }
    ]
  },
  {
    "company": "프리아이브",
    "start": "2017-12",
    "end": "2025-01",
    "projects": [
      {
        "title": [
          {
            "text": "골든디스크 어워즈"
          }
        ],
        "year": "2023 – 2025",
        "problem": "초 단위로 접속자가 몰리는 이벤트 사이트라 초기 로딩 속도와 SEO가 중요했고, 레거시 미디어 플레이어가 React 라이프사이클과 맞물려 충돌함",
        "approach": "Next.js App Router에서 서버 컴포넌트(RSC)와 클라이언트 컴포넌트(RCC)를 나눠 설계해 초기 HTML 렌더링과 SEO를 확보. 레거시 플레이어는 Custom Hook · Ref 기반 래퍼로 독립 모듈화. 공통 UI 라이브러리와 Design System을 만들고 Docker 기반 배포 환경을 구축",
        "stack": [
          "Next.js",
          "React",
          "TypeScript",
          "Docker"
        ]
      },
      {
        "title": [
          {
            "text": "AIDT 수학 · 영어 디지털 교과서"
          }
        ],
        "year": "2024",
        "problem": "파편화된 레거시 SCSS와 중복 퍼블리싱 코드로 번들이 커지고 UI 수정 시 영향 범위를 파악하기 어려웠으며, 공인 AIDT 기준의 웹 접근성과 성능 요건도 충족해야 함",
        "approach": "디자인 시스템 기반의 공통 UI 컴포넌트 라이브러리를 만들고, SCSS 변수 · Mixins 체계를 다시 정의해 중복을 줄임. 표준화된 마크업과 접근성 지침을 적용해 영어 AIDT 인증 테스트를 통과",
        "stack": [
          "Vue.js",
          "Vuetify",
          "TypeScript",
          "SCSS"
        ]
      },
      {
        "title": [
          {
            "text": "백상예술대상"
          }
        ],
        "year": "2024 – 2025",
        "problem": "해마다 디자인과 화면이 바뀌어 UI가 쉽게 파편화되고, 오래된 역대 수상 기록과 영상 다시보기를 한 사이트에서 보기 쉽게 보여줘야 함",
        "approach": "공통 컴포넌트를 Storybook으로 먼저 만들고 화면에서 조합하는 방식으로 개발. 라우트 · 서비스(API) · 모델 타입 계층을 분리하고, 부문별 수상 이력은 테이블 컴포넌트로 구조화",
        "stack": [
          "React",
          "TypeScript",
          "Storybook",
          "Docker"
        ]
      },
      {
        "title": [
          {
            "text": "클라우드 관리 콘솔",
            "href": "https://github.com/kimbomm/b_cloud_console_front"
          }
        ],
        "year": "2023",
        "problem": "관리 화면이 70개 이상이라 화면마다 UI와 스타일이 서로 달라지기 쉬웠음",
        "approach": "화면 개발 전에 공통 컴포넌트 18종을 먼저 만들고, 사용법을 가이드 페이지로 공유. 스타일은 화면 영역별 SCSS로 나눠 한 화면의 수정이 다른 화면에 영향을 주지 않게 하고, 같은 코드로 SPA와 PWA를 모두 빌드",
        "stack": [
          "Vue.js",
          "Quasar",
          "Pinia",
          "Docker"
        ]
      },
      {
        "title": [
          {
            "text": "카카오브레인 홈페이지",
            "href": "https://github.com/kimbomm/kakaobrain_homepage"
          },
          {
            "text": " · "
          },
          {
            "text": "채용 사이트",
            "href": "https://github.com/kimbomm/kakaobrain_recruit"
          }
        ],
        "year": "2022 – 2023",
        "problem": "연구 · 기술 · 문화 · 채용 등 콘텐츠 종류가 많고 검색 노출이 중요했으며, 홈페이지에는 브라우저에서 AI 이미지 생성 모델을 직접 체험하는 데모도 필요했음",
        "approach": "콘텐츠 유형별 페이지와 재사용 가능한 상세 컴포넌트(제목, 본문, 이미지, 유튜브) 체계를 구성하고, 서버 사이드 렌더링과 사이트맵 자동 생성으로 검색 노출을 확보. 이미지 생성 · 변형 · 부분 수정 흐름을 하나의 데모 화면으로 구현",
        "stack": [
          "Nuxt.js",
          "SSR"
        ]
      },
      {
        "title": [
          {
            "text": "DNDN 금융 앱 웹뷰"
          }
        ],
        "year": "2020 – 2024",
        "problem": "이질적인 Stylus 스타일 코드 때문에 UI 수정의 영향 범위를 파악하기 어려웠고, 금융 상품 데이터를 불러오는 동안의 로딩 지연이 화면 이탈로 이어짐",
        "approach": "Stylus 코드를 구조화된 SCSS 체계로 전면 이관하고, 비동기 로딩 구간에 Skeleton UI 모듈을 적용. 유지보수 기간 동안 약 10여 개의 신규 금융 상품 화면 출시를 지원",
        "stack": [
          "Vue.js",
          "Nuxt.js",
          "SCSS"
        ]
      }
    ]
  }
];

/** 개인 탭 */
export const soloProjects: ProjectGroup[] = [
  {
    "projects": [
      {
        "title": [
          {
            "text": "Vibe — 함께 쓰는 가계부",
            "href": "https://github.com/kimbomm/vibe_expenses"
          }
        ],
        "year": "2026",
        "problem": "엑셀로 가계부를 같이 쓰면 버전이 꼬이고, 보기만 해야 하는 사람이 실수로 데이터를 지울 수 있으며, 금액과 메모가 서버에 그대로 남는 것이 꺼려짐",
        "approach": "실시간 공유와 소유자 · 편집자 · 열람자 권한을 두고, 권한 검사를 화면 훅과 Firestore 보안 규칙 양쪽에 적용. 금액과 메모 같은 민감 필드는 클라이언트에서 AES-256-GCM으로 암호화해 저장하고, 기존 엑셀 데이터를 옮길 수 있게 가져오기 · 내보내기를 지원. 기획과 설계는 직접 했고 구현에는 AI 도구를 활용",
        "stack": [
          "React",
          "TypeScript",
          "Firebase",
          "Zustand"
        ]
      }
    ]
  }
];
