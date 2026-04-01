import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.intro}>
        Vos questionnements ainsi que vos retours sont très importants pour nous,
        n'hésitez pas à nous joindre par ces différents moyens de contact :
      </p>
      <ul className={styles.list}>
        <li>Adresse: 42 rue de Bellevue, 92100 Boulogne-Billancourt, FR</li>
        <li>Téléphone : <a href="tel:+33146946080" className={styles.link}>+33 1 46 94 60 80</a></li>
        <li>Email: <a href="mailto:contact@groupe-lemoine.com" className={styles.link}>contact@groupe-lemoine.com</a></li>
      </ul>
    </div>
  );
}