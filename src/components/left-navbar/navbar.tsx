"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link
          href="/projects"
          className={`${styles.page} ${
            pathname === "/projects" ? styles.active : ""
          }`}
        >
          Projetos
        </Link>

        <Link
          href="/technologies"
          className={`${styles.page} ${
            pathname === "/technologies" ? styles.active : ""
          }`}
        >
          Tecnologias e Ferramentas
        </Link>

        <Link
          href="/contact"
          className={`${styles.page} ${
            pathname === "/contact" ? styles.active : ""
          }`}
        >
          Contato
        </Link>

        <Link
          href="/about"
          className={`${styles.page} ${
            pathname === "/about" ? styles.active : ""
          }`}
        >
          Sobre mim
        </Link>
      </div>

      <div className={styles.divisor} />
    </div>
  );
}
