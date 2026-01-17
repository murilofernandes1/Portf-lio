import styles from "./page.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.bigname}>Sobre mim</h1>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Quem sou eu?</h3>
          <p>
            Meu nome é Murilo, tenho 19 anos e atuo com desenvolvimento de
            software há cerca de 2 anos. Atualmente estou no 3º semestre de
            Análise e Desenvolvimento de Sistemas na UniAnchieta. Sempre fui
            apaixonado por tecnologia e encontrei no desenvolvimento uma forma
            de transformar ideias minhas e de outras pessoas em soluções reais
            (nesse caso, digitais).
          </p>
        </div>

        <div className={styles.card}>
          <h3>Quais tipos de aplicações consigo desenvolver?</h3>
          <p>
            Atuo no desenvolvimento de aplicações web e mobile. Isso me permite
            trabalhar tanto na interface que o usuário vê quanto em toda a
            lógica por trás do sistema, construindo soluções completas do
            front-end ao back-end.
          </p>
        </div>

        <Link
          href="/curriculo-murilo.pdf"
          target="_blank"
          className={styles.card}
        >
          <ArrowUpRight className={styles.externalIcon} />

          <h3>Meu currículo</h3>
          <p>
            Um resumo direto do que eu faço, como penso e do tipo de projeto que
            eu consigo entregar.
          </p>
        </Link>
      </div>
    </main>
  );
}
