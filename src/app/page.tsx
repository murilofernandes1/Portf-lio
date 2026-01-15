import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.bigname}>Murilo Fernandes Vaz</h1>
      <h2 className={styles.role}>Desenvolvedor Full Stack</h2>
      <h3 className={styles.message}>
        Transformo ideias em aplicações sólidas e modernas
        <br />
        <span className={styles.highlight}>Do Mobile ao Desktop.</span>
        <br />
        Arquitetura, performance e detalhe em cada linha.
      </h3>
    </main>
  );
}
