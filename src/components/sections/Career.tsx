import { jobs, mainStack } from '@content/career';
import { formatRange } from '@/lib/tenure';
import { Section } from '@/components/ui/Section';
import styles from './Career.module.css';

export function Career() {
  return (
    <Section id="career" title="경력">
      <ul className={styles.jobs}>
        {jobs.map((job) => (
          <li key={job.company} className={styles.job}>
            <span className={styles.when}>{formatRange(job.start, job.end)}</span>
            <div>
              <h3>{job.company}</h3>
              <p>{job.team}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.stack}>
        <b>주로 쓰는 기술</b> — {mainStack}
      </p>
    </Section>
  );
}
