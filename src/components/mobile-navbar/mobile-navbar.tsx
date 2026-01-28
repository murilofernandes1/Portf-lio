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

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Projetos", path: "/projects" },
    { name: "Tecnologias", path: "/technologies" },
    { name: "Sobre mim", path: "/about" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`${styles.overlay} ${navOpen ? styles.show : ""}`}
        onClick={() => setNavOpen(false)}
      />
      <nav className={`${styles.container} ${navOpen ? styles.open : ""}`}>
        <div className={styles.navbar}>
          {menuLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.page} ${pathname === link.path ? styles.active : ""}`}
              onClick={() => setNavOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
