"use client";

import { useEffect, useState } from "react";
import styles from "./careers.module.css";
import Header from "@/components/Header";

type Job = {
  id: number;
  attributes: {
    title: string;
    description: string;
    type?: string;
    location?: string;
    publishedAt?: string;
  };
};

/* ─── forme_orga : SVG organique, couvre le hero ─── */
function FormeOrga() {
  return (
    <div className={styles.formeOrga}>
      <svg viewBox="0 0 1440 780" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
        <path
          d="M0,0 L1440,0 L1440,640
             C1380,660 1280,700 1160,680
             C1040,660 960,600 840,590
             C720,580 620,640 500,650
             C380,660 260,620 140,630
             C80,635 30,620 0,610 Z"
          fill="#5190C2"
        />
      </svg>
    </div>
  );
}

/* ─── vector_2 : forme intermédiaire top:1048px ─── */
function Vector2() {
  return (
    <div className={styles.vector2}>
      <svg viewBox="0 0 1440 626" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
        <path
          d="M0,180
             C180,80  360,0   540,40
             C720,80  900,200 1080,160
             C1260,120 1380,60 1440,80
             L1440,626 L0,626 Z"
          fill="#5190C2"
        />
      </svg>
    </div>
  );
}

/* ─── forme_orga_3 : grande forme en bas top:3512px, h:954 ─── */
function FormeOrga3() {
  return (
    <div className={styles.formeOrga3}>
      <svg viewBox="0 0 1440 954" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none" style={{ width: "100%", display: "block" }}>
        <path
          d="M0,120
             C120,60  280,0   460,30
             C640,60  800,160 1000,140
             C1200,120 1360,50 1440,70
             L1440,954 L0,954 Z"
          fill="#719fc5"
        />
      </svg>
    </div>
  );
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    fetch("https://strap-l7f7.onrender.com/api/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data.data || []))
      .catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setStatus("Envoi en cours…");
    try {
      const res = await fetch("https://strap-l7f7.onrender.com/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("Candidature envoyée avec succès !");
      e.currentTarget.reset();
    } catch {
      setStatus("Erreur lors de l'envoi, veuillez réessayer.");
    }
  };

  return (
    <div className={styles.container}>
    <Header />
      {/* ── Formes de fond ── */}
      <FormeOrga />
      <Vector2 />
      <div className={styles.rect11} />
      <FormeOrga3 />

     

      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero}>
        <h1>Rejoignez le Groupe Lemoine</h1>
        <p>Au sein du Groupe Lemoine, nous considérons nos salariés comme les principaux acteurs de l'entreprise.</p>
        <p>Loin d'une organisation stratifiée, nous faisons de la proximité avec nos salariés un des enjeux majeurs de notre politique Ressources Humaines.</p>
      </section>

      {/* ══════════ JOBS ══════════ */}
      <section className={styles.jobs}>
        <div className={styles.inner}>
          <p className={styles.jobsLabel}>Nos offres d'emploi :</p>
          <div className={styles.jobsGrid}>
            {jobs.length > 0
              ? jobs.map((job) => (
                  <div key={job.id} className={styles.card}>
                    <div className={styles.cardContent}>
                      <h3>{job.attributes.title}</h3>
                      <p>{job.attributes.description}</p>
                    </div>
                    <div className={styles.cardBox}>
                      <p><strong>Type :</strong> {job.attributes.type || "N/A"}</p>
                      <p><strong>Localisation :</strong> {job.attributes.location || "N/A"}</p>
                      <p><strong>Publié le :</strong> {job.attributes.publishedAt?.split("T")[0] || "N/A"}</p>
                    </div>
                  </div>
                ))
              : [1, 2].map((n) => (
                  <div key={n} className={styles.card}>
                    <div className={styles.cardContent}>
                      <h3 style={{ color: "#aaa" }}>Chargement…</h3>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* ══════════ FORMULAIRE ══════════ */}
      <section className={styles.formSection}>
        <div className={styles.inner}>
          <h2>Candidature Spontanée</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            {status && <p className={styles.status}>{status}</p>}

            <div className={styles.grid2}>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Poste souhaité <span className={styles.req}>*</span></label>
                <input name="poste" type="text" required />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Site souhaité <span className={styles.req}>*</span></label>
                <input name="site" type="text" required />
              </div>
            </div>

            <p className={styles.sectionTitle}>Informations personnelles</p>
            <div className={styles.grid3}>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Civilité <span className={styles.req}>*</span></label>
                <input name="civilite" type="text" required />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Prénom <span className={styles.req}>*</span></label>
                <input name="prenom" type="text" required />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Nom <span className={styles.req}>*</span></label>
                <input name="nom" type="text" required />
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>E-mail <span className={styles.req}>*</span></label>
                <input name="email" type="email" required />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Téléphone <span className={styles.req}>*</span></label>
                <input name="telephone" type="tel" required />
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Code postal <span className={styles.req}>*</span></label>
                <input name="codePostal" type="text" required />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.label}>Ville <span className={styles.req}>*</span></label>
                <input name="ville" type="text" required />
              </div>
            </div>

            <p className={styles.sectionTitle}>Expériences Professionnelles et Diplômes</p>
            <p className={styles.sectionSub}>CV au format PDF, DOC, RTF, TXT ou OTF</p>
            <input type="file" id="cvFile" name="cvFile" accept=".pdf,.doc,.docx,.rtf,.txt,.otf" style={{ display: "none" }}
              onChange={(e) => {
                const name = e.target.files?.[0]?.name;
                const el = document.getElementById("cvLabel");
                if (el && name) el.textContent = name;
              }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button type="button" className={styles.browseBtn} onClick={() => document.getElementById("cvFile")?.click()}>Parcourir</button>
              <span id="cvLabel" style={{ fontSize: 13, color: "#666" }}>Aucun fichier sélectionné</span>
            </div>
            <p className={styles.orText}>Ou bien remplissez le champ ci-dessous</p>
            <textarea name="experience" />

            <p className={styles.sectionTitle}>Motivations</p>
            <p className={styles.sectionSub}>Lettre de motivation au format PDF, DOC, RTF, TXT ou OTF</p>
            <input type="file" id="motivFile" name="motivFile" accept=".pdf,.doc,.docx,.rtf,.txt,.otf" style={{ display: "none" }}
              onChange={(e) => {
                const name = e.target.files?.[0]?.name;
                const el = document.getElementById("motivLabel");
                if (el && name) el.textContent = name;
              }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button type="button" className={styles.browseBtn} onClick={() => document.getElementById("motivFile")?.click()}>Parcourir</button>
              <span id="motivLabel" style={{ fontSize: 13, color: "#666" }}>Aucun fichier sélectionné</span>
            </div>
            <p className={styles.orText}>Ou bien remplissez le champ ci-dessous</p>
            <textarea name="motivation" />

            <label className={styles.checkboxRow}>
              <input type="checkbox" required />
              <span>
                J'ai lu la politique de confidentialité du site et j'accepte la façon
                dont seront traitées mes données par le Groupe Lemoine.{" "}
                <span className={styles.req}>*</span>
              </span>
            </label>

            <p className={styles.recaptchaLabel}>Recaptcha</p>
            <div className={styles.recaptchaBox}>
              <input type="checkbox" />
              <span>Je ne suis pas un robot</span>
              <div className={styles.recaptchaMeta}>
                <div>reCAPTCHA</div>
                <div>Confidentialité – Conditions</div>
              </div>
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={styles.submitBtn}>Envoyer le message</button>
            </div>
          </form>
        </div>
      </section>

      

    </div>
  );
}
