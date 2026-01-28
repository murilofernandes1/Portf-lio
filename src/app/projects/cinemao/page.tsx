/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Cinemao() {
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
          <div className={styles.placeholder}>
            <Image
              width={1200}
              height={800}
              className={styles.image}
              src="/cinemao-pic.png"
              alt="cinemao-pic"
              priority
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
