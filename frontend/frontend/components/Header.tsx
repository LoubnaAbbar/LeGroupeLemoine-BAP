import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo Groupe Lemoine"
            width={120}
            height={52}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="#" className={`${styles.link} ${styles.active}`}>
            Groupe Lemoine
          </Link>

          <Link href="#" className={styles.link}>
            Customer’s Partner
          </Link>

          <Link href="#" className={styles.link}>
            Peaudouce
          </Link>

          <Link href="#" className={styles.link}>
            Carrières
          </Link>

          <Link href="#" className={styles.link}>
            Contact
          </Link>

          <div className={styles.actions}>
            <button className={styles.lang} aria-label="Changer la langue">
              FR
            </button>

            <button className={styles.search} aria-label="Rechercher">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.searchIcon}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}