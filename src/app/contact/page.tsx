"use client";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <h1 className={styles.bigname}>Tem algo em mente?</h1>

      <p className={styles.intro}>
        Se você tem uma ideia, conta comigo pra te ajudar nessa!
      </p>

      <div className={styles.grid}>
        <a href="mailto:murilofernandesvaz4@gmail.com" className={styles.card}>
          <div className={styles.header}>
            <Mail size={20} />
            <ArrowUpRight size={18} className={styles.external} />
          </div>
          <h3>Email</h3>
          <p>Entre em contato por email, retornarei assim que possível.</p>
          <span className={styles.highlight}>
            murilofernandesvaz4@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/murilofernandesdev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <div className={styles.header}>
            <Linkedin size={20} />
            <ArrowUpRight size={18} className={styles.external} />
          </div>
          <h3>LinkedIn</h3>
          <p>
            Conecte-se comigo no LinkedIn, por lá compartilho projetos e ideias.
          </p>
          <span className={styles.highlight}>Conectar</span>
        </a>
      </div>
    </main>
  );
}
