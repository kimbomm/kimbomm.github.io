import { Hero } from '@/components/sections/Hero';
import { Cases } from '@/components/sections/Cases';
import { Questions } from '@/components/sections/Questions';
import { Projects } from '@/components/sections/Projects';
import { Career } from '@/components/sections/Career';
import { Contact } from '@/components/sections/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.wrap}>
      <Hero />
      <Cases />
      <Questions />
      <Projects />
      <Career />
      <Contact />
    </main>
  );
}
