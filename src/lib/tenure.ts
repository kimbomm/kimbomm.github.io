/**
 * 근무 기간 계산.
 * 경력기술서와 같은 방식으로 시작한 달과 끝난 달을 모두 센다.
 * 예) 2017-12 ~ 2025-01 = 86개월 = 7년 2개월
 */

/** 'YYYY-MM' → 달 단위 정수 (연도 * 12 + 월 인덱스) */
function toMonthIndex(ym: string): number {
  const match = /^(\d{4})-(0[1-9]|1[0-2])$/.exec(ym);
  if (!match) throw new Error(`YYYY-MM 형식이 아닙니다: "${ym}"`);
  return Number(match[1]) * 12 + (Number(match[2]) - 1);
}

function nowToYearMonth(now: Date): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

/** 시작/끝 달을 모두 포함한 개월 수. end가 'present'면 now 기준. */
export function countMonths(start: string, end: string, now: Date = new Date()): number {
  const endYm = end === 'present' ? nowToYearMonth(now) : end;
  const months = toMonthIndex(endYm) - toMonthIndex(start) + 1;
  if (months < 1) throw new Error(`끝나는 달이 시작하는 달보다 빠릅니다: ${start} ~ ${end}`);
  return months;
}

/** 87 → '7년 3개월', 12 → '1년', 8 → '8개월' */
export function formatMonths(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}개월`;
  if (months === 0) return `${years}년`;
  return `${years}년 ${months}개월`;
}

export function formatTenure(start: string, end: string, now: Date = new Date()): string {
  return formatMonths(countMonths(start, end, now));
}

/** '2025-03' → '2025.03', 'present' → '현재' */
export function formatRange(start: string, end: string): string {
  const dot = (ym: string) => ym.replace('-', '.');
  return `${dot(start)} – ${end === 'present' ? '현재' : dot(end)}`;
}
