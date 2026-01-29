/* eslint-disable @next/next/no-img-element */
"use client";

import { Github, ArrowLeft, Download } from "lucide-react";
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
            App mobile que simula um banco digital. Dentro das features do
            projeto constam transferência de valores fictícios entre usuários
            via chave PIX ou geração ou leitura de QR Code, reservas para
            guardar esses valores cartão virtual animado para simular NFT,
            extrato de transferências e pagamento com cartão de crédito com
            limite e faturas funcionais. O aplicativo também conta com
            funcionalidades nativas como autenticação segura para o contexto
            bancário via biometria do dispositivo e vibração para um melhor
            feedback e experiência do usuário.
          </p>

          <div className={styles.techs}>
            <img alt="" src="https://www.svgrepo.com/show/374035/reactts.svg" />
            <img
              alt=""
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
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
              href="https://github.com/murilofernandes1/Bank"
              target="_blank"
            >
              <Github size={18} />
              Repositório
            </a>
            <a
              className={styles.actionButton}
              href=" https://drive.google.com/file/d/1swjz98cfYixyead5xXFhSlJaRCu9Hk73/view?usp=drive_link"
              target="_blank"
            >
              <Download size={18} />
              Instalar app (Android)
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
