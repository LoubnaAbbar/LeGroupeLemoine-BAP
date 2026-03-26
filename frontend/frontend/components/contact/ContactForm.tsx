"use client";

import { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  service: string;
  sujet: string;
  message: string;
  rgpd: boolean;
}

interface FormErrors {
  prenom?: string;
  nom?: string;
  email?: string;
  service?: string;
  sujet?: string;
  message?: string;
  rgpd?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    service: "",
    sujet: "",
    message: "",
    rgpd: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  /* --- Validation --- */
  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!formData.prenom.trim()) e.prenom = "Le prénom est requis.";
    if (!formData.nom.trim()) e.nom = "Le nom est requis.";
    if (!formData.email.trim()) {
      e.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "L'email n'est pas valide.";
    }
    if (!formData.service.trim()) e.service = "Le service est requis.";
    if (!formData.sujet.trim()) e.sujet = "Le sujet est requis.";
    if (!formData.message.trim()) e.message = "Le message est requis.";
    if (!formData.rgpd) e.rgpd = "Vous devez accepter la politique de confidentialité.";
    return e;
  }

  /* --- Submit --- */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      // TODO: brancher sur l'API Strapi quand le back sera prêt
      // const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ data: formData }),
      // });
      // if (!res.ok) throw new Error();

      // Simulation pour l'instant
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setFormData({ prenom: "", nom: "", email: "", telephone: "", service: "", sujet: "", message: "", rgpd: false });
    } catch {
      setStatus("error");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <div className={styles.card}>
      <p className={styles.intro}>
        Vous pouvez également nous contacter directement sur l'un de nos services :
      </p>

      {status === "success" && (
        <div className={styles.successBanner}>
          ✅ Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorBanner}>
          ❌ Une erreur est survenue. Veuillez réessayer ou nous contacter par email.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className={styles.form}>

        {/* Ligne 1 : Prénom + Nom */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="prenom" className={styles.label}>
              Prénom <span className={styles.required}>*</span>
            </label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              value={formData.prenom}
              onChange={handleChange}
              className={`${styles.input} ${errors.prenom ? styles.inputError : ""}`}
              placeholder=""
              autoComplete="given-name"
            />
            {errors.prenom && <span className={styles.errorMsg}>{errors.prenom}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="nom" className={styles.label}>
              Nom <span className={styles.required}>*</span>
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={formData.nom}
              onChange={handleChange}
              className={`${styles.input} ${errors.nom ? styles.inputError : ""}`}
              placeholder=""
              autoComplete="family-name"
            />
            {errors.nom && <span className={styles.errorMsg}>{errors.nom}</span>}
          </div>
        </div>

        {/* Ligne 2 : Email + Téléphone */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              E-mail <span className={styles.required}>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
              placeholder=""
              autoComplete="email"
            />
            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="telephone" className={styles.label}>
              Téléphone
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              value={formData.telephone}
              onChange={handleChange}
              className={styles.input}
              placeholder=""
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Ligne 3 : Service + Sujet */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Service concerné <span className={styles.required}>*</span>
            </label>
            <input
              id="service"
              name="service"
              type="text"
              value={formData.service}
              onChange={handleChange}
              className={`${styles.input} ${errors.service ? styles.inputError : ""}`}
              placeholder=""
            />
            {errors.service && <span className={styles.errorMsg}>{errors.service}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="sujet" className={styles.label}>
              Sujet <span className={styles.required}>*</span>
            </label>
            <input
              id="sujet"
              name="sujet"
              type="text"
              value={formData.sujet}
              onChange={handleChange}
              className={`${styles.input} ${errors.sujet ? styles.inputError : ""}`}
              placeholder=""
            />
            {errors.sujet && <span className={styles.errorMsg}>{errors.sujet}</span>}
          </div>
        </div>

        {/* Message */}
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message <span className={styles.required}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
            placeholder=""
          />
          {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
        </div>

        {/* Bouton submit */}
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {/* RGPD */}
        <div className={styles.rgpdWrapper}>
          <label className={styles.rgpdLabel}>
            <input
              type="checkbox"
              name="rgpd"
              checked={formData.rgpd}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span>
              J'ai lu la politique de confidentialité du site et j'accepte la façon
              dont seront traitées mes données par le Groupe Lemoine.{" "}
              <span className={styles.required}>*</span>
            </span>
          </label>
          {errors.rgpd && <span className={styles.errorMsg}>{errors.rgpd}</span>}
        </div>

      </form>

      {/* reCAPTCHA placeholder */}
      <div className={styles.recaptchaWrapper}>
        <p className={styles.recaptchaLabel}>Recaptcha</p>
        <div className={styles.recaptchaBox}>
          <input type="checkbox" className={styles.checkbox} disabled />
          <span>Je ne suis pas un robot</span>
          <div className={styles.recaptchaLogo}>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <path fill="#4A90D9" d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z"/>
              <path fill="white" d="M32 16l4 8h-8l4-8zm0 32l-4-8h8l-4 8zM16 32l8-4v8l-8-4zm32 0l-8 4v-8l8 4z"/>
            </svg>
            <span className={styles.recaptchaText}>reCAPTCHA<br/><small>Confidentialité · Conditions</small></span>
          </div>
        </div>
      </div>
    </div>
  );
}
