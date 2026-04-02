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

        {/* ---- HERO + BLOB SUPERPOSÉ ---- */}
        <div className={styles.heroWrapper}>

          {/* Image fond cotons-tiges */}
          <div className={styles.heroImgBox}>
            <Image src="/images/image-fond.png" alt="" fill priority className={styles.heroImage} />
          </div>

          {/* Blob bleu qui se superpose sur le hero */}
          <div className={styles.blobHero}>
            <Image src="/images/vector-blob.png" alt="" fill className={styles.blobHeroImg} />
            
            {/* Contenu textuel centré verticalement sur le bleu */}
            <div className={styles.blobHeroContent}>
              <h1 className={styles.heroTitle}>Nos marques</h1>
              <p className={styles.heroText}>
                Idéales pour concevoir et tester nos innovations (produit ou packaging),
                nous avons implanté nos marques propres sur des marchés émergents de la MDD.
                Nous gérons aujourd'hui 3 marques que sont Tippys, Bella Cotton et Star Cott.
              </p>

              <div className={styles.peaudouceGroup}>
                <h2 className={styles.peaudouceTitleBlob}>Peaudouce</h2>
                <p className={styles.peaudouceSoustitreBlob}>Une histoire de douceur et d'exigence</p>
              </div>

              <h3 className={styles.histoireTitleBlob}>Histoire de la marque</h3>
            </div>
          </div>

        </div>

        {/* ---- SECTION GRISE : Timeline + Produits ---- */}
        <div className={styles.greySection}>

          {/* Timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineInner}>
              <div className={styles.timelineLine} />

              {/* Item 1 */}
              <div className={styles.timelineRow}>
                <div className={styles.timelineDot} />
                <div className={styles.sideLeft}>
                  <Image src="/images/peaudouce-pub3.png" alt="Peaudouce 1" width={220} height={185} className={styles.timelineImg} />
                </div>
                <div className={styles.sideRight}>
                  <h4 className={styles.timelineItemTitle}>Il y a plus de 50 ans</h4>
                  <p className={styles.timelineItemText}>
                    Peaudouce invente la première couche jetable en France, révolutionnant
                    les soins pour bébés et établissant un standard de qualité.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className={styles.timelineRow}>
                <div className={styles.timelineDot} />
                <div className={styles.sideLeft}>
                  <h4 className={styles.timelineItemTitle}>L'évolution</h4>
                  <p className={styles.timelineItemText}>
                    Fort de son expertise, Peaudouce développe une gamme complète de produits
                    pour bébés, alliant innovation et respect de la peau.
                  </p>
                </div>
                <div className={styles.sideRight}>
                  <Image src="/images/peaudouce-pub2.png" alt="Peaudouce 2" width={220} height={185} className={styles.timelineImg} />
                </div>
              </div>

              {/* Item 3 */}
              <div className={styles.timelineRow}>
                <div className={styles.timelineDot} />
                <div className={styles.sideLeft}>
                  <Image src="/images/peaudouce-pub1.png" alt="Peaudouce 3" width={220} height={185} className={styles.timelineImg} />
                </div>
                <div className={styles.sideRight}>
                  <h4 className={styles.timelineItemTitle}>Depuis 2023</h4>
                  <p className={styles.timelineItemText}>
                    Peaudouce innove avec des produits bio et éco-responsables, toujours
                    au service du bien-être des bébés.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Produits */}
          <div className={styles.produits}>
            <h3 className={styles.produitsTitle}>Les produits de la gamme Peaudouce</h3>

            <div className={styles.produitRow}>
              <Image src="/images/peaudouce-liniment.png" alt="Liniment" width={260} height={210} className={styles.produitImg} />
              <div className={styles.produitInfo}>
                <h4 className={styles.produitNom}>Cotons bébé</h4>
                <ul className={styles.produitList}>
                  <li>100% coton biologique certifié</li>
                  <li>Ultra-doux pour la peau sensible</li>
                  <li>Sans parfum ni allergènes</li>
                </ul>
              </div>
            </div>

            <div className={styles.produitRow}>
              <div className={styles.produitInfo}>
                <h4 className={styles.produitNom}>Savon bébé</h4>
                <ul className={styles.produitList}>
                  <li>Nettoyant doux pour bébé</li>
                  <li>Testé dermatologiquement</li>
                  <li>Formule hypoallergénique</li>
                </ul>
              </div>
              <Image src="/images/peaudouce-carres.png" alt="Carrés" width={260} height={210} className={styles.produitImg} />
            </div>

            <div className={styles.produitRow}>
              <Image src="/images/peaudouce-couches.png" alt="Couches" width={260} height={210} className={styles.produitImg} />
              <div className={styles.produitInfo}>
                <h4 className={styles.produitNom}>Couches bébé</h4>
                <ul className={styles.produitList}>
                  <li>Ultra-absorbantes et respirantes</li>
                  <li>Protection anti-fuites 12h</li>
                  <li>Disponibles en plusieurs tailles</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* ---- UNION BLOB + AUTRES MARQUES ---- */}
        <div className={styles.unionSection}>
          <Image src="/images/union-blob.png" alt="" fill className={styles.unionImg} />
          <div className={styles.autresMarques}>

            <div className={styles.marqueItem}>
              <div className={styles.marqueLogoBox}>
                <Image src="/images/bella-cotton.png" alt="Bella Cotton" width={130} height={85} className={styles.marqueLogo} />
              </div>
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
              <div className={styles.marqueLogoBox}>
                <Image src="/images/star-cott.png" alt="Star Cott" width={130} height={85} className={styles.marqueLogo} />
              </div>
              <div className={styles.marqueInfo}>
                <h3 className={styles.marqueNom}>STAR COTT - UNE MARQUE POUR TOUTE LA FAMILLE</h3>
                <p className={styles.marqueText}>
                  Star Cott propose une gamme complète de produits en coton pour toute la famille,
                  alliant qualité et accessibilité pour répondre aux besoins du quotidien.
                </p>
              </div>
            </div>

            <div className={styles.marqueItem}>
              <div className={styles.marqueLogoBox}>
                <Image src="/images/tippys.png" alt="Tippys" width={130} height={85} className={styles.marqueLogo} />
              </div>
              <div className={styles.marqueInfo}>
                <h3 className={styles.marqueNom}>TIPPYS - LA GAMME LA PLUS LARGE</h3>
                <p className={styles.marqueText}>
                  Tippys propose la gamme la plus large de produits en coton, répondant aux
                  besoins de toute la famille avec des produits de qualité et abordables.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll to top */}
        <button className={styles.scrollTop} onClick={scrollToTop} aria-label="Retour en haut">
          <Image src="/images/solar_alt-arrow-up-outline.png" alt="" width={52} height={52} />
        </button>

      </main>
      <Footer />
    </>
  );
}