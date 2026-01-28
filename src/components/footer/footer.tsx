import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divisor} />
      <div className={styles.container}>
        <p className={styles.name}>
          © {new Date().getFullYear()} <span className={styles.dot}>•</span>{" "}
          Desenvolvido por Murilo Fernandes Vaz
        </p>
      </div>
    </footer>
  );
}
