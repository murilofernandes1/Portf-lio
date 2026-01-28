/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowLeft } from "lucide-react";

export default function Portfolio() {
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

            <a className={styles.actionButton} href="/" target="_blank">
              <ExternalLink size={18} />
              Deploy
            </a>
          </div>
        </section>

        <aside className={styles.carousel}>
          <div className={styles.placeholder}>
            <Image
              width={1200}
              height={800}
              className={styles.image}
              src="/portolio-pic.png"
              alt="portolio-pic"
              priority
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
