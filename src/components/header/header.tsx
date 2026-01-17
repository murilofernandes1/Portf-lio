"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import MobileNavbar from "../mobile-navbar/mobile-navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles["initial-icons"]}>
          <button className={styles.nav} onClick={() => setNavOpen(!navOpen)}>
            <Menu className={styles.icon} />
          </button>
          <Link href="/" scroll className={styles.name}>
            MURIDEV
          </Link>
        </div>

        {navOpen && <MobileNavbar navOpen={navOpen} setNavOpen={setNavOpen} />}

        <div className={styles.navbar}>
          <Link href="https://github.com/murilofernandes1">
            <Github className={styles.icon} />
          </Link>
          <Link href="https://www.linkedin.com/in/murilofernandesdev/">
            <Linkedin className={styles.icon} />
          </Link>
          <Link href="mailto:murilofernandesvaz4@gmail.com">
            <Mail className={styles.icon} />
          </Link>
        </div>
      </div>
      <div className={styles.divisor} />
    </>
  );
}
