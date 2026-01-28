/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function OrbitBank() {
  return (
    <main className={styles.main}>
      <Link href={"/projects"} className={styles.back}>
        <ArrowLeft />
        Projetos
      </Link>
      <div className={styles.layout}>
        <section className={styles.info}>
          <h1 className={styles.bigname}>Orbit Bank</h1>

          <p className={styles.description}>
            Banco digital fictício desenvolvido com API própria, foco em
            separação de responsabilidades, escalabilidade e experiência do
            usuário. O projeto teve como foco utilizar o máximo de
            funcionalidades do React Native, como biometria e vibrações nativas
            do dispositivo.
          </p>

          <div className={styles.techs}>
            <img alt="" src="https://www.svgrepo.com/show/374035/reactts.svg" />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
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
              href="https://github.com/murilofernandes1/Bank"
              target="_blank"
            >
              <Github size={18} />
              Repositório
            </a>
          </div>
        </section>

        <aside className={styles.carousel}>
          <div className={styles.placeholder}>
            <Image
              width={1200}
              height={800}
              className={styles.image}
              src="/orbit-pic.png"
              alt="orbit-pic"
              priority
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
