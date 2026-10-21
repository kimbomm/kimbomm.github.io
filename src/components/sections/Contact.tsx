import { profile } from '@content/profile';
import { Section } from '@/components/ui/Section';
import { CopyEmail } from './CopyEmail';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contact" title="연락처">
      <div className={styles.contact}>
        <CopyEmail email={profile.email} />
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
    </Section>
  );
}
