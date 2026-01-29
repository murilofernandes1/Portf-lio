import Image from "next/image";
import styles from "./page.module.css";

const techs = [
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "React.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    icon: "https://www.svgrepo.com/show/374035/reactts.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },
  {
    name: "Prisma",
    icon: "https://www.svgrepo.com/show/354210/prisma.svg",
  },
  {
    name: "Expo",
    icon: "https://www.svgrepo.com/show/373753/light-expo.svg",
  },

  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
  },

  {
    name: "Firebase",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Figma",
    icon: "https://www.svgrepo.com/show/452202/figma.svg",
  },
];

export default function Technologies() {
  return (
    <main className={styles.main}>
      <h1 className={styles.bigname}>Tecnologias</h1>
      <h2 className={styles.role}>
        Linguagens, Frameworks, Bibliotecas, Bancos de Dados e outras
        Ferramentas que utilizo em meus projetos.
      </h2>

      <section className={styles.grid}>
        {techs.map((tech) => (
          <div key={tech.name} className={styles.techItem}>
            <div className={styles.card}>
              <Image src={tech.icon} alt={tech.name} width={36} height={36} />
            </div>
            <span className={styles.label}>{tech.name}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
