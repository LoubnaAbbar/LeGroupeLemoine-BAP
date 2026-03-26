import styles from "./NosEngagements.module.css";

const engagements = [
  {
    id: 1,
    label: "Durabilité",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#00579a" strokeWidth="2" fill="white"/>
        <path d="M24 34C24 34 14 28 14 20C14 15.582 18.686 12 24 12C29.314 12 34 15.582 34 20C34 28 24 34 24 34Z" stroke="#00579a" strokeWidth="2" fill="none"/>
        <path d="M24 12V34M14 20C18 22 24 22 34 20" stroke="#00579a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    label: "Qualité",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#00579a" strokeWidth="2" fill="white"/>
        <path d="M24 10L27.09 17.26L35 18.27L29.5 23.74L30.9 31.62L24 27.77L17.1 31.62L18.5 23.74L13 18.27L20.91 17.26L24 10Z" stroke="#00579a" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    label: "Responsabilité",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" stroke="#00579a" strokeWidth="2" fill="white"/>
        <path d="M24 14C24 14 16 18 16 24V30L24 33L32 30V24C32 18 24 14 24 14Z" stroke="#00579a" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <path d="M20 24L23 27L28 21" stroke="#00579a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function NosEngagements() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nos Engagements</h2>
        <div className={styles.grid}>
          {engagements.map((e) => (
            <div key={e.id} className={styles.card}>
              <div className={styles.iconWrapper}>{e.icon}</div>
              <span className={styles.label}>{e.label}</span>
            </div>
          ))}
        </div>
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