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
            "text": "Syncflo-Accounting 솔루션 구축"
          }
        ],
        "year": "2025",
        "problem": "구축형 솔루션이라 고객사마다 지도 API 정책이 달랐고, 지도 로직이 바뀔 때마다 메인 코드를 고쳐야 해서 사이드 이펙트 위험이 있었음",
        "approach": "정산 폼은 공통으로 유지하고 지도 노출 · 거리 측정 로직만 독립 plugin 컴포넌트로 분리해, 어드민 설정에 따라 Mapbox · 카카오맵을 동적으로 전환. 출장 거리 · 편도/왕복 · 유가 산식을 적용한 유류비 자동 계산, 세금계산서 과세/면세 구분과 부가세 자동 계산, 법인카드 승인 내역을 작성/미작성으로 필터링해 전표 입력 폼에 자동 매핑하는 기능도 개발",
        "stack": [
          "Vue.js",
          "Nuxt.js",
          "Mapbox",
          "Kakao Map"
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
            "text": "골든디스크 어워즈",
            "href": "https://www.goldendisc.co.kr/ko"
          }
        ],
        "year": "2023 – 2025",
        "problem": "초 단위로 접속자가 몰리는 이벤트 사이트라 초기 로딩 속도와 SEO가 중요했고, 레거시 미디어 플레이어가 React 라이프사이클과 맞물려 충돌함",
        "approach": "Next.js App Router 디렉터리 구조를 설계하고 서버 컴포넌트(RSC)와 클라이언트 컴포넌트를 나눠 초기 HTML 렌더링과 SEO를 개선. 레거시 미디어 플레이어는 Custom Hook · Ref 래퍼로 독립 모듈화. 공통 UI 컴포넌트 라이브러리를 만들어 화면 수정 · 추가 작업 기간을 약 20% 단축하고, 개발 서버 Docker 배포 환경을 구축",
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
            "text": "수학 · 영어 AIDT 플랫폼"
          }
        ],
        "year": "2024",
        "problem": "파편화된 레거시 SCSS와 중복 퍼블리싱 코드로 UI 수정 영향 범위를 파악하기 어려웠고, AIDT 인증의 웹 접근성 · 호환성 기준도 충족해야 함",
        "approach": "디자인 시스템 공통 UI 컴포넌트 라이브러리와 스타일 가이드를 만들고, 중복 SCSS를 변수 · mixin 체계로 재정의해 스타일 · 컴포넌트 코드 중복을 약 15% 줄임. 표준 마크업과 웹 접근성 지침을 반영해 영어 플랫폼 인증 테스트(웹 접근성 포함)를 최종 통과",
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
            "text": "백상예술대상",
            "href": "https://www.baeksangawards.co.kr/ko/"
          }
        ],
        "year": "2024",
        "problem": "시상식 일정에 맞춰 PC · 모바일 반응형 리뉴얼 사이트를 열어야 했고, 수상자 · 후보와 영상 · 갤러리처럼 성격이 다른 화면이 많았음",
        "approach": "골든디스크와 별도로 사이트 전용 공통 컴포넌트를 구축하고, 수상자 · 후보 페이지와 영상 · 갤러리 미디어 영역을 개발. 시상식 일정에 맞춰 리뉴얼 사이트를 오픈",
        "stack": [
          "React",
          "TypeScript",
          "SCSS",
          "Docker"
        ]
      },
      {
        "title": [
          {
            "text": "카카오브레인 B^Cloud",
            "href": "https://github.com/kimbomm/b_cloud_console_front"
          }
        ],
        "year": "2023",
        "problem": "대외용 클라우드 · 리소스 관리 콘솔이라 관리 화면이 70개 이상이었고, 화면마다 UI와 스타일이 서로 달라지기 쉬웠음",
        "approach": "콘솔 화면을 메인 프론트엔드로 설계 · 구현. 화면 개발 전에 공통 컴포넌트 18종을 먼저 만들고 사용법을 가이드 페이지로 공유했으며, 화면 영역별 SCSS 분리로 한 화면의 수정이 다른 화면에 영향을 주지 않게 함",
        "stack": [
          "Vue.js",
          "Quasar",
          "Pinia"
        ]
      },
      {
        "title": [
          {
            "text": "카카오브레인 웹사이트",
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
        "problem": "연구 · 기술 · 문화 · 채용 등 콘텐츠 종류가 많고 검색 노출이 중요했으며, 기업 홈페이지 외에 마이크로사이트와 행사 페이지도 운영해야 했음",
        "approach": "기업 홈페이지 구축, 마이크로사이트 운영, 행사 페이지 2건을 메인 프론트엔드로 개발(인터랙션, 다국어 · 반응형). 콘텐츠 유형별 재사용 컴포넌트 체계와 서버 사이드 렌더링 · 사이트맵 자동 생성으로 검색 노출을 확보",
        "stack": [
          "Nuxt.js",
          "SSR"
        ]
      },
      {
        "title": [
          {
            "text": "투자 앱 DNDN 웹뷰"
          }
        ],
        "year": "2020 – 2024",
        "problem": "레거시 Stylus 코드로 UI 수정 영향 범위를 파악하기 어려웠고, 금융 상품 데이터를 기다리는 동안 오류처럼 보이는 빈 화면이 노출됨",
        "approach": "투자 성향 진단, 계좌 개설 플로우, 본인 인증, 수익률 · 배당 조회 화면을 개발하고 신규 금융 상품 약 10개 출시에 대응. Stylus를 모듈화된 SCSS 체계로 전면 이관하고, 데이터 대기 구간에 Skeleton UI를 적용해 빈 화면 노출을 막음",
        "stack": [
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
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
            "text": "Vibe — 공유 가계부 웹앱",
            "href": "https://kookbomm-expenses.web.app"
          }
        ],
        "year": "2025 – 현재",
        "problem": "여럿이 함께 쓰는 가계부라 역할마다 할 수 있는 일이 달라야 하고, 금액 · 메모 같은 민감한 값이 서버에 그대로 남지 않아야 했음",
        "approach": "React 19 · TypeScript SPA를 FSD 6개 레이어 구조로 설계. owner · editor · viewer 권한을 화면과 Firestore 보안 규칙에서 이중 검증하고, 민감 필드는 가계부별 키로 클라이언트에서 AES-256-GCM 암호화. 엑셀 업로드는 파서 · 컬럼 매퍼 · 날짜 파서 · 행 단위 검증기로 나눠 구현. 기획 · 데이터 모델 · 권한 · 암호화 설계와 코드 리뷰 · 보안 점검 · 동작 검증은 직접 했고, 구현은 Cursor로 진행",
        "stack": [
          "React",
          "TypeScript",
          "Zustand",
          "React Hook Form",
          "Zod",
          "Firebase"
        ]
      }
    ]
  }
];

