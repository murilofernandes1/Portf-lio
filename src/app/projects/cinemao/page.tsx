/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

const placeholders = [0, 1, 2];

export default function Cinemao() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? placeholders.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === placeholders.length - 1 ? 0 : i + 1));
  }

  return (
    <main className={styles.main}>
      <Link href={"/projects"} className={styles.back}>
        <ArrowLeft />
        Projetos
      </Link>
      <div className={styles.layout}>
        <section className={styles.info}>
          <h1 className={styles.bigname}>Cinemão</h1>

          <p className={styles.description}>
            Aplicação web de um cinema fictício com landing page de filmes em
            cartaz, sinopse e tempo de filme, horários e agendamento de sessões,
            consulta e escolha de assentos disponíveis e dashboard
            administrativa para gestão do site.
          </p>

          <div className={styles.techs}>
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            />
          </div>

          <div className={styles.actions}>
            <a
              className={styles.actionButton}
              href="https://github.com/murilofernandes1/Cinemao"
              target="_blank"
            >
              <Github size={18} />
              Repositório
            </a>

            <a
              className={styles.actionButton}
              href="https://cinemao.vercel.app/"
              target="_blank"
            >
              <ExternalLink size={18} />
              Deploy
            </a>
          </div>
        </section>

        <aside className={styles.carousel}>
          <button className={styles.nav} onClick={prev}>
            <ChevronLeft size={18} />
          </button>

          <div className={styles.placeholder} />

          <button className={styles.nav} onClick={next}>
            <ChevronRight size={18} />
          </button>
        </aside>
      </div>
    </main>
  );
}
