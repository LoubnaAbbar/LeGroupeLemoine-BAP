"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./nos-marques.module.css";
import Image from "next/image";

export default function NosMarquesPage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>

        {/* Hero */}
        <section className={styles.hero}>
          <Image src="/images/image-fond.png" alt="Nos marques" fill priority className={styles.heroImage} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Nos marques</h1>
            <p className={styles.heroText}>
              Le groupe Lemoine travaille en étroite collaboration avec des partenaires
              sélectionnés pour leur savoir-faire et leur engagement en matière de
              qualité et de responsabilité. Ensemble, nous œuvrons pour proposer des
              solutions en coton répondant aux normes les plus exigeantes.
            </p>
          </div>
        </section>

        {/* Blob séparateur haut */}
        <div className={styles.blobTop}>
          <Image src="/images/vector-blob.png" alt="" fill className={styles.blobImg} />
        </div>

        {/* Section Peaudouce intro */}
        <section className={styles.peaudouceIntro}>
          <h2 className={styles.peaudouceTitle}>Peaudouce</h2>
          <p className={styles.peaudouceSoustitre}>Une histoire de douceur et d'exigence</p>
          <p className={styles.peaudouceText}>
            Né du savoir-faire du groupe Lemoine, Peau Douce Longue s'inscrit dans une tradition
            d'exigence et de maîtrise autour d'une matière essentielle : le coton. Fort de son
            expertise reconnue à l'échelle européenne, le groupe a su développer au fil du temps
            une connaissance approfondie de cette fibre naturelle, de sa sélection à sa transformation.
          </p>
        </section>

        {/* Timeline histoire */}
        <section className={styles.timeline}>
          <h3 className={styles.timelineTitle}>Histoire de la marque</h3>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLine} />

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineLeft}>
                <Image src="/images/peaudouce-pub3.png" alt="Première couche jetable" width={240} height={200} className={styles.timelineImg} />
              </div>
              <div className={styles.timelineRight}>
                <h4 className={styles.timelineItemTitle}>Il y a plus de 50 ans</h4>
                <p className={styles.timelineItemText}>
                  Peaudouce invente la première couche jetable en France, révolutionnant
                  les soins pour bébés et établissant un standard de qualité et de performance.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineLeft}>
                <h4 className={styles.timelineItemTitle}>L'évolution</h4>
                <p className={styles.timelineItemText}>
                  Fort de son expertise, Peaudouce développe une gamme complète de produits
                  pour bébés, alliant innovation technique et respect de la peau.
                </p>
              </div>
              <div className={styles.timelineRight}>
                <Image src="/images/peaudouce-pub2.png" alt="Évolution Peaudouce" width={240} height={200} className={styles.timelineImg} />
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineLeft}>
                <Image src="/images/peaudouce-pub1.png" alt="Peaudouce aujourd'hui" width={240} height={200} className={styles.timelineImg} />
              </div>
              <div className={styles.timelineRight}>
                <h4 className={styles.timelineItemTitle}>Depuis 2023</h4>
                <p className={styles.timelineItemText}>
                  Peaudouce continue d'innover avec des produits bio et éco-responsables,
                  toujours au service du bien-être des bébés et de leurs familles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Produits Peaudouce */}
        <section className={styles.produits}>
          <h3 className={styles.produitsTitle}>Les produits de la gamme Peaudouce</h3>

          <div className={styles.produitItem}>
            <Image src="/images/peaudouce-liniment.png" alt="Liniment bio" width={280} height={220} className={styles.produitImg} />
            <div className={styles.produitInfo}>
              <h4 className={styles.produitNom}>Liniment bébé</h4>
              <ul className={styles.produitList}>
                <li>Formulé à base d'huile d'olive bio</li>
                <li>Nettoie et protège la peau de bébé</li>
                <li>Sans parfum, sans conservateur</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.produitItem} ${styles.produitReverse}`}>
            <div className={styles.produitInfo}>
              <h4 className={styles.produitNom}>Savon bébé</h4>
              <ul className={styles.produitList}>
                <li>Douceur et protection pour la peau</li>
                <li>Testé dermatologiquement</li>
                <li>Sans allergènes</li>
              </ul>
            </div>
            <Image src="/images/peaudouce-carres.png" alt="Carrés bébé" width={280} height={220} className={styles.produitImg} />
          </div>

          <div className={styles.produitItem}>
            <Image src="/images/peaudouce-couches.png" alt="Couches bébé" width={280} height={220} className={styles.produitImg} />
            <div className={styles.produitInfo}>
              <h4 className={styles.produitNom}>Couches bébé</h4>
              <ul className={styles.produitList}>
                <li>Ultra-absorbantes et respirantes</li>
                <li>Protection anti-fuites 12h</li>
                <li>Doux sur la peau sensible</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blob séparateur bas */}
        <div className={styles.blobBottom}>
          <Image src="/images/union-blob.png" alt="" fill className={styles.blobImg} />
        </div>

        {/* Autres marques */}
        <section className={styles.autresMarques}>
          <div className={styles.marqueItem}>
            <Image src="/images/bella-cotton.png" alt="Bella Cotton" width={120} height={80} className={styles.marqueLogo} />
            <div className={styles.marqueInfo}>
              <h3 className={styles.marqueNom}>BELLA COTTON - UNE MARQUE PREMIUM</h3>
              <p className={styles.marqueText}>
                Bella Cotton met au cœur de ses engagements la qualité et la douceur du coton.
                La marque conçoit des produits respectueux de la peau et adaptés aux usages
                quotidiens, en privilégiant des procédés de fabrication fiables et responsables.
              </p>
            </div>
          </div>

          <div className={styles.marqueItem}>
            <Image src="/images/star-cott.png" alt="Star Cott" width={120} height={80} className={styles.marqueLogo} />
            <div className={styles.marqueInfo}>
              <h3 className={styles.marqueNom}>STAR COTT - UNE MARQUE POUR TOUTE LA FAMILLE</h3>
              <p className={styles.marqueText}>
                Star Cott propose une gamme complète de produits en coton pour toute la famille,
                alliant qualité et accessibilité pour répondre aux besoins du quotidien.
              </p>
            </div>
          </div>

          <div className={styles.marqueItem}>
            <Image src="/images/tippys.png" alt="Tippys" width={120} height={80} className={styles.marqueLogo} />
            <div className={styles.marqueInfo}>
              <h3 className={styles.marqueNom}>TIPPYS - LA GAMME LA PLUS LARGE</h3>
              <p className={styles.marqueText}>
                Tippys propose la gamme la plus large de produits en coton, répondant aux
                besoins de toute la famille avec des produits de qualité et abordables.
              </p>
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