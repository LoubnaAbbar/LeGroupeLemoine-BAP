"use client";
import Image from "next/image";
import styles from "./disques.module.css";

/** Vague bleue du hero — positionnée en absolute sur la photo */
function HeroWave() {
  return (
    <svg
      viewBox="0 0 1440 260"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, left: 0, width: "100%", display: "block", zIndex: 2 }}
    >
      {/* Vague qui monte depuis la gauche, couvre tout le bas */}
      <path
        d="M0,80 C200,20 400,0 600,30 C800,60 1000,130 1200,100 C1350,78 1420,50 1440,60 L1440,260 L0,260 Z"
        fill="#5190C2"
      />
    </svg>
  );
}

function Vector2() {
  return (
    <div className={styles.vector2}>
      <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:"100%",height:"100%",display:"block"}}>
        <path d="M0,200 C200,80 400,0 600,40 C800,80 1000,200 1200,160 C1360,130 1420,60 1440,80 L1440,600 L0,600 Z" fill="#5190C2"/>
      </svg>
    </div>
  );
}
function FormeOrga3() {
  return (
    <div className={styles.formeOrga3}>
      <svg viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:"100%",display:"block"}}>
        <path d="M0,100 C160,40 340,0 520,30 C700,60 860,140 1060,120 C1220,100 1360,44 1440,66 L1440,800 L0,800 Z" fill="#5190C2"/>
      </svg>
    </div>
  );
}

const produits = [
  { label: "Maxi caré bébé",   src: "/images/d1.png" },
  { label: "Carré à démaquiller duo serti",  src: "/images/d2.png" },
  { label: "Disque cosmétique",     src: "/images/d3.png" },
  { label: "oval à démaquiller  duo",          src: "/images/d4.png" },
{ label: "oval à démaquiller  serti",   src: "/images/d5.png" },

];

const sectionsData = [
  {
    titre: "L'embossage",
    texte: "Sur les produits à démaquiller, la face structurée aide au démaquillage et la face lisse permet l’application de lotion.",
    src: "/images/d1a.jpg",
    reverse: false,
  },
  {
    titre: "Les extraits",
    texte: "Afin d’apporter une touche douceur, nous pouvons ajouter au coton les extraits suivants : aloe vera, protéine de soie ou amande douce.",
    src: "/images/d2b.jpg",
    reverse: true,
  },
  {
    titre: "Les Sertissage",
    texte: "Les bords du disque sont soudés pour renforcer la tenue du coton et donner un aspect couture, très premium.",
    src: "/images/d3c.jpg",
    reverse: false,
  },
  {
    titre: "Baby care",
    texte: "En bâtonnets comme en disques, nous avons développé une gamme spéciale bébé adaptée au confort des tout-petits et aux besoins de leurs parents. Nos bâtonnets bébé ont un embout conçu pour assurer une sécurité d'usage maximale. En boîtes plastique ou en Décobox, plusieurs formats de conditionnement sont disponibles.",
    src: "/images/d4d.jpg",
    reverse: true,
  },
];

const autresProduits = [
  { label: "Autres",      src: "/images/image9.jpg" },
  { label: "Disques",               src: "/images/disques.jpg" },
  
];

export default function BatonnetsPage() {
  return (
    <div className={styles.container}>
      <Vector2 />
      <div className={styles.rect11} />
      <FormeOrga3 />

      {/* ── HERO : photo + vague bleue en overlay + texte sur la vague ── */}
      <section className={styles.hero}>
        {/* Photo pleine largeur */}
        <div className={styles.heroImg}>
          <Image
            src="/images/d0.jpg"
            alt="Disques de cotonnade"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
          {/* Vague bleue SVG par-dessus la photo */}
          <HeroWave />
          {/* Texte positionné sur la partie bleue */}
          <div className={styles.heroText}>
            <h1>Disques</h1>
            <p>Nos modèles de disques ont des formes adaptées à toutes les utilisations de la famille : hygiène auriculaire des grands et des petits, retouches maquillage…</p>
          </div>
        </div>
      </section>

      {/* ── GRILLE 4 PRODUITS ── */}
      <section className={styles.prodSection}>
        <div className={styles.inner}>
          <div className={styles.grid4}>
            {produits.map((p, i) => (
              <div key={i} className={styles.prodCard}>
                <div className={styles.prodImg}>
                  <Image src={p.src} alt={p.label} width={220} height={260} style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.prodLabel}>{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNIÈRE ── */}
      <section className={styles.banner}>
        <div className={styles.inner}><h2>Le coton dans tous ses états !</h2></div>
      </section>

      {/* ── SECTIONS EMBOUTS / STICKS / PACKAGINGS / BABY CARE ── */}
      <section className={styles.sections}>
        <div className={styles.inner}>
          {sectionsData.map((s, i) => (
            <div key={i} className={s.reverse ? styles.rowR : styles.row}>
              <div className={styles.txt}>
                <h3>{s.titre}</h3>
                <p>{s.texte}</p>
              </div>
              <div className={styles.imgPill}>
                <Image src={s.src} alt={s.titre} fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ICÔNES ── */}
      <section className={styles.icons}>
        <div className={styles.inner}>
          <div className={styles.iconsGrid}>
            <div className={styles.iconCard}>
              <div className={styles.iconCircle}>🪶</div>
              <div><h4>Confort</h4><p>Des embouts doux et confortables pour une utilisation quotidienne optimale.</p></div>
            </div>
            <div className={styles.iconCard}>
              <div className={styles.iconCircle}>👂</div>
              <div><h4>Sécurité</h4><p>La qualité de nos bâtonnets vous garantit les meilleures certifications possibles.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
<section className={styles.cert}>
  <div className={styles.inner}>
    <h2>Certifications possibles</h2>
    <div className={styles.certImgGrid}>
      {["c1", "c2", "c3"].map((name) => (
        <div key={name} className={styles.certImgCard}>
          <Image
            src={`/images/${name}.png`}
            alt={`Certification ${name}`}
            width={180}
            height={180}
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
    <p className={styles.certNote}>Blanc Angles FSC · Autres Angles FSC · Blanc Angles PEFC · Lavande Angles CE · [...]</p>
  </div>
</section>

      {/* ── AUTRES PRODUITS ── */}
      <section className={styles.others}>
        <div className={styles.inner}>
          <h3>Retrouvez nos autres produits !</h3>
          <div className={styles.othersGrid}>
            {autresProduits.map((p) => (
              <a key={p.label} href="#" className={styles.otherCard}>
                <div className={styles.otherCardImg}>
                  <Image src={p.src} alt={p.label} width={150} height={110} style={{ objectFit: "cover", borderRadius: 10 }} />
                </div>
                <span>{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerSocials}>
          <a href="#">f</a><a href="#">◎</a><a href="#">in</a>
        </div>
        <span>© 2026 Groupe Lemoine. All rights reserved</span>
      </footer>
    </div>
  );
}
