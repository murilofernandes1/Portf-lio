"use client";

import styles from "./mobile-navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileNavbarProps = {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
};

export default function MobileNavbar({
  navOpen,
  setNavOpen,
}: MobileNavbarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`${styles.overlay} ${navOpen ? styles.show : ""}`}
        onClick={() => setNavOpen(false)}
      />
      <nav className={`${styles.container} ${navOpen ? styles.open : ""}`}>
        <div className={styles.navbar}>
          <Link
            href="/"
            className={`${styles.page} ${pathname === "/home" ? styles.active : ""}`}
            onClick={() => setNavOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`${styles.page} ${pathname === "/projects" ? styles.active : ""}`}
            onClick={() => setNavOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/technologies"
            className={`${styles.page} ${pathname === "/technologies" ? styles.active : ""}`}
            onClick={() => setNavOpen(false)}
          >
            Tecnologias
          </Link>
          <Link
            href="/contact"
            className={`${styles.page} ${pathname === "/contact" ? styles.active : ""}`}
            onClick={() => setNavOpen(false)}
          >
            Contato
          </Link>
          <Link
            href="/about"
            className={`${styles.page} ${pathname === "/about" ? styles.active : ""}`}
            onClick={() => setNavOpen(false)}
          >
            Sobre mim
          </Link>
        </div>
      </nav>
    </>
  );
}
