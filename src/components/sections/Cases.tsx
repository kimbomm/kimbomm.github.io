import { cases } from '@content/cases';
import { Section } from '@/components/ui/Section';
import { Tags } from '@/components/ui/Tags';
import styles from './Cases.module.css';

export function Cases() {
  return (
    <Section
      id="cases"
      title="대표 사례"
      description="회사 내부 코드라 공개할 수 없어서, 맥락과 결정을 글로 정리했습니다."
    >
      <div className={styles.list}>
        {cases.map((c) => (
          <article key={c.slug} id={c.slug} className={styles.case}>
            <header className={styles.top}>
              <span className={styles.meta}>{c.meta}</span>
              <h3>{c.title}</h3>
            </header>
            <dl className={styles.spec}>
              <dt>맥락</dt>
              <dd>{c.context}</dd>
              <dt>내 역할</dt>
              <dd>{c.role}</dd>
              <dt>문제</dt>
              <dd>{c.problem}</dd>
              <dt>결정</dt>
              <dd>{c.decision}</dd>
              <dt>결과</dt>
              <dd>{c.result}</dd>
              <dt>스택</dt>
              <dd>
                <Tags items={c.stack} />
              </dd>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
