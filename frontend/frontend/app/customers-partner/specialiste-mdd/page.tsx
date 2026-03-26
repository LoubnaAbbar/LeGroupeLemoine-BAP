import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./specialiste-mdd.module.css";

export const metadata = {
  title: "Spécialiste des MDD — Groupe Lemoine",
  description: "Découvrez l'expertise du Groupe Lemoine dans les Marques De Distributeur.",
};

export default function SpecialisteMDDPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* ---- Hero ---- */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Spécialiste des MDD</h1>
            <p className={styles.heroSubtitle}>
              Des solutions sur mesure pour les marques distributeurs
            </p>
            <button className={styles.heroBtn}>Nous recrutons !</button>
          </div>
        </section>

        {/* ---- Qu'est-ce que les MDD ---- */}
        <section className={styles.mddSection}>
          <div className={styles.container}>
            <h2 className={styles.mddTitle}>QU'EST-CE QUE<br />LES MDD ?</h2>
            <p className={styles.mddAccroche}>
              Les Marques De Distributeur (MDD) désignent des produits fabriqués
              pour être commercialisés sous la marque d'une enseigne (grande
              distribution, pharmacie, etc.).
            </p>
            <p className={styles.mddText}>
              Le groupe Lemoine est un spécialiste reconnu des Marques De Distributeur (MDD).
              Grâce à son expertise industrielle et à son savoir-faire dans la transformation
              du coton, le groupe accompagne ses partenaires dans la conception et la
              fabrication de produits sur mesure.
            </p>
            <p className={styles.mddText}>
              De la sélection des matières premières à la production, Lemoine garantit des
              solutions fiables, conformes aux exigences de qualité et aux normes en vigueur.
              Cette approche permet aux distributeurs de proposer des produits performants
              sous leur propre marque.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}