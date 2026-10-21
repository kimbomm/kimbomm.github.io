import type { Project } from '@content/types';
import { Tags } from '@/components/ui/Tags';
import styles from './Projects.module.css';

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className={styles.proj}>
      <div className={styles.ph}>
        <span className={styles.title}>
          {project.title.map((part, i) =>
            part.href ? (
              <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
                {part.text}
              </a>
            ) : (
              <span key={i}>{part.text}</span>
            ),
          )}
        </span>
        <span className={styles.year}>{project.year}</span>
      </div>
      <dl className={styles.pd}>
        <dt>문제</dt>
        <dd>{project.problem}</dd>
        <dt>접근</dt>
        <dd>{project.approach}</dd>
      </dl>
      <Tags items={project.stack} />
    </li>
  );
}
