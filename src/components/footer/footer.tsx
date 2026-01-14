import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divisor} />
      <div className={styles.container}>
        <span className={styles.name}>
          © {new Date().getFullYear()} • Desenvolvido por Murilo Fernandes Vaz
        </span>
      </div>
    </footer>
  );
}
