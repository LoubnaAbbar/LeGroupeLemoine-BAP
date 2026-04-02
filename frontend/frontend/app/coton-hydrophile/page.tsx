"use client";
import styles from "./coton.module.css";
import Image from "next/image";

function FormeOrga() {
  return (
    <div className={styles.formeOrga}>
      <svg viewBox="0 0 1440 720" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:"100%",display:"block"}}>
        <path d="M0,0 L1440,0 L1440,580 C1380,600 1280,640 1160,620 C1040,600 960,540 840,530 C720,520 620,580 500,590 C380,600 260,560 140,570 C80,575 30,558 0,548 Z" fill="#d8d8d8"/>
      </svg>
    </div>
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

export default function CotonHydrophilePage() {
  return (
    <div className={styles.container}>
      <FormeOrga />
      <Vector2 />
      <div className={styles.rect11} />
      <FormeOrga3 />
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => (
        <div key={n} className={`${styles.circle} ${(styles as Record<string,string>)[`c${n}`]}`} aria-hidden />
      ))}

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImg}>
          <Image
            src="/images/hydro.png"
            alt="Coton hydrophile"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroWave}>
            <svg viewBox="0 0 1440 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:"100%",display:"block"}}>
              <path d="M0,120 C200,60 400,0 600,30 C800,60 1000,140 1200,110 C1340,88 1400,50 1440,60 L1440,220 L0,220 Z" fill="#5190C2"/>
            </svg>
          </div>
        </div>
        <div className={styles.heroContent}>
          <h1>Coton hydrophile</h1>
          <p>En bande, en rouleaux ou en petites boules blanches ou de couleur, notre gamme de coton hydrophile répond à tous les besoins des consommateurs.</p>
        </div>
      </section>

      {/* SECTIONS PLATEAUX + ROULEAUX */}
      <section className={styles.sections}>
        <div className={styles.inner}>

          <div className={styles.row}>
            <div className={styles.txt}>
              <h3>Rouleaux</h3>
              <p>Nos rouleaux de coton hydrophile sont disponibles dans des formats allant de 50g à 1000g. Nous proposons également des formats en pochette. Vous pouvez également ajouter des boules de papier.</p>
              <div className={styles.imgSm}>
                <Image
                  src="/images/rouleaux.jpg"
                  alt="Rouleau de coton hydrophile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h4>zz</h4>
              <p style={{fontSize:14,lineHeight:1.75,marginBottom:16}}>Prédécoupés ou pas, 100% coton, nous pouvons produire tous types de sachets ZZ. De différentes contenances d’une part (de 50g à 200g), dans des sachets de qualités variées (transparents ou givrés) et fermés enfin de plusieurs manières (soudure, cordon ou zip).</p>
              <div className={styles.img}>
                <Image
                  src="/images/plateaux.jpg"
                  alt="Plateau de coton hydrophile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div className={styles.rowR}>
            <div className={styles.txt}>
              <h3>Boules</h3>
              <p>100% coton, notre gamme de boules de coton se décline en différents grammages et en différentes teintes (blanches ou colorées).</p>
            </div>
            <div className={styles.img}>
              <Image
                src="/images/boules.jpg"
                alt="Rouleau de coton hydrophile"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ICÔNES */}
      <section className={styles.icons}>
        <div className={styles.inner}>
          <div className={styles.iconsGrid}>
            <div className={styles.iconCard}>
              <div className={styles.iconCircle}>🪶</div>
              <div>
                <h4>Douceur</h4>
                <p>Une texture douce et délicate respectueuse de la peau.</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <div className={styles.iconCircle}>💧</div>
              <div>
                <h4>Absorption</h4>
                <p>Le traitement de notre coton hydrophile garantit une capacité d'absorption optimale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className={styles.cert}>
        <div className={styles.inner}>
          <h2>Certifications possibles</h2>
          <div className={styles.certGrid}>
            {["Lavande BIO / ICEA","Oeko-Tex / ICEA","Nordic Swan / ICEA","Ecolabel EU / ICEA","Lavande BIO / ICEA","Oeko-Tex / ICEA"].map((c,i) => (
              <div key={i} className={styles.certBadge}><strong>{c}</strong></div>
            ))}
          </div>
          <p className={styles.certNote}>Lavande BIO / ICEA · Oeko-Tex / ICEA · Nordic Swan / ICEA · Ecolabel EU / ICEA · [...]</p>
        </div>
      </section>

      {/* AUTRES PRODUITS */}
      <section className={styles.others}>
        <div className={styles.inner}>
          <h3>Retrouvez nos autres produits !</h3>
          <div className={styles.othersGrid}>
          {[
  { name: "Disques", img: "/images/disques.jpg" },
  { name: "Bâtonnets", img: "/images/batonnets.jpg" }
].map(p => (
  <a key={p.name} href="#" className={styles.otherCard}>
    <div className={styles.otherCardImg}>
      <Image
        src={p.img}   
        alt={p.name}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <span>{p.name}</span>
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