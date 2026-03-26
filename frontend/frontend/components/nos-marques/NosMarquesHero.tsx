import styles from "./NosMarquesHero.module.css";

export default function NosMarquesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imagePlaceholder}>
        <div className={styles.crossLine1} />
        <div className={styles.crossLine2} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Nos marques</h1>
        <p className={styles.text}>
          Le groupe Lemoine travaille en étroite collaboration avec des partenaires
          sélectionnés pour leur savoir-faire et leur engagement en matière de
          qualité et de responsabilité. Ensemble, nous œuvrons pour proposer des
          solutions en coton répondant aux normes les plus exigeantes.
        </p>
      </div>
    </section>
  );
}