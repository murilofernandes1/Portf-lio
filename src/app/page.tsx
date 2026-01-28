"use client";
import styles from "./page.module.css";
import ShinyText from "../components/ShinyText";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <ShinyText
          className={styles.bigname}
          text="Murilo Fernandes Vaz"
          speed={3}
          color="#ffffff"
          shineColor="#a5a5a5"
          spread={120}
        />
        <ShinyText
          className={styles.role}
          text="Desenvolvedor Full Stack"
          speed={3}
          color="#888888"
          shineColor="#ffffff"
          spread={100}
        />
      </div>

      <p className={styles.message}>
        Transformo ideias em aplicações sólidas e modernas
        <br />
        <span className={styles.highlight}>Do Mobile ao Desktop.</span>
      </p>
    </main>
  );
}
