import { questions } from '@content/questions';
import { Section } from '@/components/ui/Section';
import styles from './Questions.module.css';

export function Questions() {
  return (
    <Section
      id="questions"
      title="기능을 만들기 전에 묻는 것"
      description="새 요구사항을 받으면 먼저 확인하는 질문들입니다."
    >
      <ol className={styles.list}>
        {questions.map((item) => (
          <li key={item.q}>
            <p className={styles.q}>{item.q}</p>
            <p className={styles.a}>
              {item.a} <span>— {item.ref}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
