"use client";

import Header from "@/components/Header";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";
import Image from "next/image";

export default function ContactPage() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <ContactInfo />
          <ContactForm />

         {/* reCAPTCHA hors de la card bleue */}
<div className={styles.recaptcha}>
  <p className={styles.recaptchaLabel}>Recaptcha</p>
  <div className={styles.recaptchaBox}>
    <input type="checkbox" disabled />
    <span className={styles.recaptchaText}>Je ne suis pas un robot</span>
    <Image src="/images/recaptcha-logo.png" alt="reCAPTCHA" width={60} height={48} />
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