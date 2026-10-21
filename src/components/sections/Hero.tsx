import { nav, profile } from '@content/profile';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <header className={styles.hero}>
      <span className={styles.label}>
        {profile.name} · {profile.role}
      </span>
      <h1>
        {profile.headline[0]}
        <br />
        {profile.headline[1]}
      </h1>
      <p className={styles.lead}>{profile.lead}</p>
      <nav className={styles.links} aria-label="섹션 이동">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
