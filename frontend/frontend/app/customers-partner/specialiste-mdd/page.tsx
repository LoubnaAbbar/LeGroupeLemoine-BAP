"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./specialiste-mdd.module.css";
import Image from "next/image";

export default function SpecialisteMDDPage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <Image
            src="/images/white-label.png"
            alt="Spécialiste des MDD"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Spécialiste des MDD</h1>
            <p className={styles.heroSubtitle}>
              Des solutions sur mesure pour les marques distributeurs
            </p>
          </div>
        </section>

        {/* Section MDD */}
        <section className={styles.mddSection}>
          <div className={styles.mddContainer}>
            <h2 className={styles.mddTitle}>QU'EST-CE QUE LES MDD ?</h2>

            <div className={styles.mddBlobWrapper}>
              <Image
                src="/images/union-blob.png"
                alt=""
                fill
                className={styles.mddBlob}
              />
              <div className={styles.mddTexts}>
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
            </div>
          </div>
        </section>

        {/* Scroll to top */}
        <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Retour en haut">
          <Image src="/images/solar_alt-arrow-up-outline.png" alt="" width={52} height={52} />
        </button>

      </main>
      <Footer />
    </>
  );
}