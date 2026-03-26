import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          <a href="#" aria-label="Facebook" className={styles.socialLink}>f</a>
          <a href="#" aria-label="Instagram" className={styles.socialLink}>ig</a>
          <a href="#" aria-label="LinkedIn" className={styles.socialLink}>in</a>
        </div>
        <p className={styles.copy}>© 2026 Groupe Lemoine. All rights reserved</p>
      </div>
    </footer>
  );
}