import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals"> Browser Meals</Link>
          </li>
          <li>
            <Link href="/community"> Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
