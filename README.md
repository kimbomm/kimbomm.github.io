# kimbomm.github.io

**👉 [kimbomm.github.io](https://kimbomm.github.io)**

Frontend Engineer 김보민의 원페이지 포트폴리오입니다.
회계 · 금융처럼 업무 규칙이 복잡한 서비스에서 해 온 프론트엔드 작업을 사례 중심으로 정리했습니다.

## 만든 방식

- **Next.js App Router 정적 export → GitHub Pages.** `main`에 push하면 GitHub Actions가 typecheck → test → build → 배포를 순서대로 실행합니다.
- **내용과 화면 분리.** 문구 · 사례 · 경력은 모두 `content/*.ts` 데이터 파일에 있고, 컴포넌트에는 문구를 하드코딩하지 않습니다.
- **서버 컴포넌트 기본.** 상태가 필요한 탭 · 이메일 복사만 클라이언트 컴포넌트입니다. 근무 기간은 서버에서 계산해 내려주고(하이드레이션 불일치 방지), 매월 1일 자동 재배포로 갱신됩니다.
- **테스트.** 근무 기간 계산 로직은 Vitest로 검증합니다.
- **스타일.** CSS Modules + CSS 변수 디자인 토큰, 라이트/다크 모드 지원.

## 기술 스택

Next.js 15 · React 19 · TypeScript · CSS Modules · Vitest · pnpm · GitHub Actions

## 실행

```bash
pnpm install
pnpm dev        # 개발 서버
pnpm test       # 테스트
pnpm build      # out/ 에 정적 파일 생성
```

## 구조

```
content/          사이트 내용(데이터)
src/app/          layout, page, 디자인 토큰
src/components/   섹션 · UI 컴포넌트
src/lib/          근무 기간 계산 + 테스트
```
