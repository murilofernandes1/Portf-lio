import Link from "next/link";
import styles from "./header.module.css";
import { Github, Linkedin, Mail } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link href={"/"} scroll className={styles.name}>
          MFV
        </Link>

        <div className={styles.navbar}>
          <Link href={"https://github.com/murilofernandes1"}>
            <Github className={styles.icon} size={30} />
          </Link>

          <Link href={"https://www.linkedin.com/in/murilofernandesdev/"}>
            <Linkedin className={styles.icon} size={30} />
          </Link>

          <Link href={"mailto:murilofernandesvaz4@gmail.com"}>
            <Mail className={styles.icon} size={30} />
          </Link>
        </div>
      </div>
      <div className={styles.divisor} />
    </>
  );
}
