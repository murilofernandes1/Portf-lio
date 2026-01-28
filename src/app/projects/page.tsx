import styles from "./page.module.css";
import Link from "next/link";

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1 className={styles.bigname}>Projetos</h1>
      <h2 className={styles.role}>
        Meus projetos pessoais finalizados e em produção
      </h2>

      <section className={styles.grid}>
        <Link href={"/projects/orbit-bank"}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Orbit Bank</h3>
            <p className={styles.cardDescription}>
              Aplicação mobile bancária digital com interface responsiva e
              moderna.
            </p>
            <span className={styles.cardStack}>
              React Native · TypeScript · Node.js · Prisma ORM · MongoDB
            </span>
          </article>
        </Link>

        <Link href={"/projects/cinemao"}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Cinemão</h3>
            <p className={styles.cardDescription}>
              Aplicação web para agendamento de sessões de filmes com API
              própria.
            </p>
            <span className={styles.cardStack}>
              React · JavaScript · Node.js · Prisma ORM · MongoDB
            </span>
          </article>
        </Link>
        <Link href={"/projects/portfolio"}>
          <article className={styles.card}>
            <h3 className={styles.cardTitle}>Portfólio</h3>
            <p className={styles.cardDescription}>
              Meu portfólio profissional com minhas stacks, projetos, meios de
              contato e informações sobre mim.
            </p>
            <span className={styles.cardStack}>Next.js · TypeScript</span>
          </article>
        </Link>
      </section>
    </main>
  );
}
