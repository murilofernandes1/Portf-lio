"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import MobileNavbar from "../mobile-navbar/mobile-navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.leftSection}>
          <button
            className={`${styles.navToggle} ${navOpen ? styles.active : ""}`}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link href="/" className={styles.logoWrapper}>
            <div className={styles.logoBox}>
              <span className={styles.logoBracket}>&lt;</span>
              <span className={styles.logoText}>mfv</span>
              <span className={styles.logoBracket}>/&gt;</span>
            </div>
          </Link>
        </div>

        {navOpen && <MobileNavbar navOpen={navOpen} setNavOpen={setNavOpen} />}

        <nav className={styles.socialLinks}>
          <Link
            href="https://github.com/murilofernandes1"
            target="_blank"
            className={styles.iconLink}
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/murilofernandesdev/"
            target="_blank"
            className={styles.iconLink}
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:murilofernandesvaz4@gmail.com"
            className={styles.iconLink}
          >
            <Mail size={20} />
          </Link>
        </nav>
      </header>
      <div className={styles.divisor} />
    </>
  );
}
