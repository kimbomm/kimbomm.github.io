export type TitlePart = { text: string; href?: string };

export type CaseStudy = {
  /** 앵커/상세 페이지로 확장할 때 쓰는 식별자 */
  slug: string;
  meta: string;
  title: string;
  context: string;
  role: string;
  problem: string;
  decision: string;
  result: string;
  stack: string[];
};

export type Question = { q: string; a: string; ref: string };

export type Project = {
  title: TitlePart[];
  year: string;
  problem: string;
  approach: string;
  stack: string[];
};

export type ProjectGroup = {
  /** 탭 안에서 보여줄 묶음 제목. 없으면 헤더 없이 목록만 보여준다. */
  company?: string;
  /** 'YYYY-MM' (근무 기간 계산용) */
  start?: string;
  /** 'YYYY-MM' 또는 'present' */
  end?: string;
  projects: Project[];
};

export type Job = {
  company: string;
  team: string;
  start: string;
  end: string;
};
