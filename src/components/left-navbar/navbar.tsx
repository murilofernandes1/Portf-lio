import styles from "./navbar.module.css";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href={"/projects"} className={styles.page}>
            Projetos
          </Link>
          <Link href={"/technologies"} className={styles.page}>
            Tecnologias e Ferramentas
          </Link>

          <Link href={"/education"} className={styles.page}>
            Educação
          </Link>
          <Link href={"/contact"} className={styles.page}>
            Contato
          </Link>
          <Link href={"/about"} className={styles.page}>
            Sobre mim
          </Link>
        </div>
        <div className={styles.divisor} />
      </div>
    </>
  );
}
