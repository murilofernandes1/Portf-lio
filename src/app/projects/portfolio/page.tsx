/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";

const placeholders = [0, 1, 2];

export default function Portfolio() {
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
          <h1 className={styles.bigname}>Portfólio</h1>

          <p className={styles.description}>
            Meu portfólio profissional, construído com Next.js para uma
            navegação mais flúida entre páginas. Aqui você pode encontrar mais
            informações sobre mim, meus projetos e tecnologias que uso no meu
            dia a dia.
          </p>

          <div className={styles.techs}>
            <img
              src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/next-js-logo-white.png"
              alt="Next.js White Logo"
            />

            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
          </div>

          <div className={styles.actions}>
            <a
              className={styles.actionButton}
              href="https://github.com/murilofernandes1/Portfolio"
              target="_blank"
            >
              <Github size={18} />
              Repositório
            </a>

            {/* <a className={styles.actionButton} href="#" target="_blank">
              <ExternalLink size={18} />
              Deploy
            </a> */}
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
