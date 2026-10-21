import { describe, expect, it } from 'vitest';
import { countMonths, formatMonths, formatRange, formatTenure } from './tenure';

describe('countMonths', () => {
  it('시작한 달과 끝난 달을 모두 센다', () => {
    expect(countMonths('2025-03', '2025-03')).toBe(1);
    expect(countMonths('2017-12', '2025-01')).toBe(86);
  });

  it("'present'는 now가 속한 달까지 센다", () => {
    expect(countMonths('2025-03', 'present', new Date(2026, 9, 21))).toBe(20);
  });

  it('연도를 넘어가는 구간을 처리한다', () => {
    expect(countMonths('2022-05', '2023-05')).toBe(13);
  });

  it('끝나는 달이 더 빠르면 에러', () => {
    expect(() => countMonths('2025-03', '2025-02')).toThrow();
  });

  it('잘못된 형식은 에러 (2월 30일 같은 조용한 보정 금지)', () => {
    expect(() => countMonths('2025-13', '2025-12')).toThrow();
    expect(() => countMonths('2025.03', '2025-12')).toThrow();
  });
});

describe('formatMonths', () => {
  it('1년 미만은 개월만', () => {
    expect(formatMonths(8)).toBe('8개월');
  });
  it('딱 떨어지는 해는 년만', () => {
    expect(formatMonths(36)).toBe('3년');
  });
  it('년과 개월을 함께', () => {
    expect(formatMonths(86)).toBe('7년 2개월');
  });
});

describe('formatTenure / formatRange (경력기술서와 같은 값)', () => {
  it('프리아이브 2017-12 ~ 2025-01 = 7년 2개월', () => {
    expect(formatTenure('2017-12', '2025-01')).toBe('7년 2개월');
  });
  it('일진씨앤에스 2025-03 ~ 현재(2026-10) = 1년 8개월', () => {
    expect(formatTenure('2025-03', 'present', new Date(2026, 9, 21))).toBe('1년 8개월');
  });
  it('기간 표기', () => {
    expect(formatRange('2025-03', 'present')).toBe('2025.03 – 현재');
    expect(formatRange('2017-12', '2025-01')).toBe('2017.12 – 2025.01');
  });
});
