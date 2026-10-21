import styles from './Tags.module.css';

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.tags} aria-label="사용 기술">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
