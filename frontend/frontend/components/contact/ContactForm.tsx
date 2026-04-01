"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  prenom: string; nom: string; email: string; telephone: string;
  service: string; sujet: string; message: string; rgpd: boolean;
}
interface FormErrors {
  prenom?: string; nom?: string; email?: string;
  service?: string; sujet?: string; message?: string; rgpd?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "", nom: "", email: "", telephone: "",
    service: "", sujet: "", message: "", rgpd: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!formData.prenom.trim()) e.prenom = "Requis";
    if (!formData.nom.trim()) e.nom = "Requis";
    if (!formData.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Email invalide";
    if (!formData.service.trim()) e.service = "Requis";
    if (!formData.sujet.trim()) e.sujet = "Requis";
    if (!formData.message.trim()) e.message = "Requis";
    if (!formData.rgpd) e.rgpd = "Veuillez accepter la politique de confidentialité";
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setErrors({});
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setFormData({ prenom: "", nom: "", email: "", telephone: "", service: "", sujet: "", message: "", rgpd: false });
    } catch { setStatus("error"); }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div className={styles.card}>
      <p className={styles.intro}>
        Vous pouvez également nous contactez directement sur l'un de nos service :
      </p>

      {status === "success" && <div className={styles.successBanner}>✅ Message envoyé avec succès !</div>}
      {status === "error" && <div className={styles.errorBanner}>❌ Une erreur est survenue.</div>}

      <form onSubmit={handleSubmit} noValidate className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Prénom <span className={styles.req}>*</span></label>
            <input name="prenom" type="text" value={formData.prenom} onChange={handleChange} className={`${styles.input} ${errors.prenom ? styles.inputError : ""}`} />
            {errors.prenom && <span className={styles.errorMsg}>{errors.prenom}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Nom <span className={styles.req}>*</span></label>
            <input name="nom" type="text" value={formData.nom} onChange={handleChange} className={`${styles.input} ${errors.nom ? styles.inputError : ""}`} />
            {errors.nom && <span className={styles.errorMsg}>{errors.nom}</span>}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>E-mail <span className={styles.req}>*</span></label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} className={`${styles.input} ${errors.email ? styles.inputError : ""}`} />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Téléphone</label>
            <input name="telephone" type="tel" value={formData.telephone} onChange={handleChange} className={styles.input} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Service concerné <span className={styles.req}>*</span></label>
            <input name="service" type="text" value={formData.service} onChange={handleChange} className={`${styles.input} ${errors.service ? styles.inputError : ""}`} />
            {errors.service && <span className={styles.errorMsg}>{errors.service}</span>}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Sujet <span className={styles.req}>*</span></label>
            <input name="sujet" type="text" value={formData.sujet} onChange={handleChange} className={`${styles.input} ${errors.sujet ? styles.inputError : ""}`} />
            {errors.sujet && <span className={styles.errorMsg}>{errors.sujet}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Message <span className={styles.req}>*</span></label>
          <textarea name="message" rows={7} value={formData.message} onChange={handleChange} className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`} />
          {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
        </div>

        <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
          {status === "loading" ? "Envoi..." : "ENVOYER LE MESSAGE"}
        </button>

        <div className={styles.rgpdWrapper}>
          <label className={styles.rgpdLabel}>
            <input type="checkbox" name="rgpd" checked={formData.rgpd} onChange={handleChange} className={styles.checkbox} />
            <span>J'ai lu la politique de confidentialité du site et j'accepte la façon dont seront traitées mes données par le Groupe Lemoine. <span className={styles.req}>*</span></span>
          </label>
          {errors.rgpd && <span className={styles.errorMsg}>{errors.rgpd}</span>}
        </div>
      </form>
    </div>
  );
}