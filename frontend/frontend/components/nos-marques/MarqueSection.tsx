import Image from "next/image";
import styles from "./MarqueSection.module.css";

interface TimelineItem { id: number; }
interface AutreMarque { id: number; nom: string; texte: string; }
interface Marque {
  id: number;
  nom: string;
  soustitre: string;
  intro: string;
  timeline: TimelineItem[];
  autresMarques: AutreMarque[];
}

export default function MarqueSection({ marque }: { marque: Marque }) {
  return (
    <section className={styles.section}>

      {/* Vagues décoratives */}
      <Image src="/images/Vector_4.png" alt="" width={280} height={480} className={styles.waveRight} />
      <Image src="/images/Vector_5.png" alt="" width={280} height={400} className={styles.waveLeft} />

      {/* Intro marque */}
      <div className={styles.introBlock}>
        <h2 className={styles.marqueTitle}>{marque.nom}</h2>
        <p className={styles.marqueSoustitre}>{marque.soustitre}</p>
        <p className={styles.marqueIntro}>{marque.intro}</p>
      </div>

      {/* Timeline */}
      <div className={styles.timelineWrapper}>
        <h3 className={styles.timelineTitle}>Histoire de la marque</h3>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {marque.timeline.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.timelineLeft : styles.timelineRight
              }`}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineImage} />
            </div>
          ))}
        </div>
      </div>

      {/* Autres marques */}
      {marque.autresMarques.length > 0 && (
        <div className={styles.autresMarquesBlock}>
          <h3 className={styles.autresMarquesTitle}>Autre marque</h3>
          <div className={styles.cards}>
            {marque.autresMarques.map((am) => (
              <div key={am.id} className={styles.card}>
                <div className={styles.logoPlaceholder}>
                  <span className={styles.logoText}>Logo</span>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardText}>{am.texte}</p>
                  <button className={styles.ctaBtn}>En savoir plus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}