# kimbomm.github.io — 포트폴리오

김보민의 원페이지 포트폴리오. Next.js(App Router) 정적 export를 GitHub Pages로 배포한다.
대화와 커밋 메시지는 한국어, 말투는 친절하게. 한 번에 크게 바꾸지 말고 단계별로 진행하고 확인을 받는다.

## 명령어

```bash
pnpm install
pnpm dev          # 개발 서버
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest run
pnpm build        # out/ 에 정적 파일 생성
```

`main`에 push하면 GitHub Actions가 typecheck → test → build → Pages 배포를 한다. 매월 1일에도 재배포한다(근무 기간 갱신).

## 구조

```
content/            사이트 내용(데이터). 문구는 여기서만 고친다.
src/app/            layout, page, globals.css(디자인 토큰)
src/components/
  sections/         Hero, Cases, Questions, Projects, Career, Contact
  ui/               Section, Tags
src/lib/tenure.ts   근무 기간 계산 (+ tenure.test.ts)
```

- 문구/사례/프로젝트 수정 → `content/*.ts` 만 수정. 컴포넌트에 문구를 하드코딩하지 않는다.
- 색은 `globals.css`의 CSS 변수만 쓴다. 라이트/다크 모두 확인한다.
- 서버 컴포넌트가 기본. 상태가 필요한 `ProjectTabs`, `CopyEmail`만 `'use client'`.
- `new Date()`는 서버 컴포넌트에서만 쓰고 결과 문자열을 props로 내려준다(하이드레이션 불일치 방지).
- 스타일은 CSS Modules. 반응형 기준점은 640px, 좌우 여백 16px 이상.

## 내용 원칙 (중요)

- **사실만 쓴다.** 경력기술서에 없는 수치·성과를 만들지 않는다. 경력기술서의 "20% 향상", "15% 절감" 같은 수치는 근거를 설명할 수 있을 때만 넣는다.
- 회사 내부 코드·고객사명·운영 주소·키/설정 값은 쓰지 않는다. 공개 가능한 것만 링크한다.
- 골든디스크·백상예술대상은 현재 운영 중이라 링크하지 않는다(저장소 private).
- 팀장 직함을 부각하지 않는다. `welfaremate`는 언급하지 않는다.
- 경력기술서와 어긋나는 내용이 생기면 경력기술서 문구를 기준으로 삼는다.
- 용어는 `Vue.js`, `Nuxt.js`로 통일한다.

## 알려진 한계 / 다음 할 일

- 근무 기간은 시작한 달과 끝난 달을 모두 센다(경력기술서와 동일).
- 대표 사례를 `/cases/[slug]` 상세 페이지로 늘릴 수 있다(`CaseStudy.slug` 준비됨, 정적 export는 `generateStaticParams`로 가능).
- 기술 노트(블로그형) 섹션은 일단 제외했다.
