import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <a
      className={styles.primary}
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className={styles.logo}
        src="https://nextjs.org/icons/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </a>
  );
}
