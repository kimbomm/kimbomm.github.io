import type { ReactNode } from 'react';
import styles from './Section.module.css';

type Props = {
  /** 메뉴 앵커(#id)와 aria-labelledby에 함께 쓰인다 */
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={styles.sec} aria-labelledby={headingId}>
      <div className={styles.head}>
        <h2 id={headingId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
