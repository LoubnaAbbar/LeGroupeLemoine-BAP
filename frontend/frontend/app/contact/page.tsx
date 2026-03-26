import Header from "@/components/Header";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./contact.module.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact — Groupe Lemoine",
  description: "Contactez le Groupe Lemoine par téléphone, email ou via notre formulaire.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Cercles décoratifs en arrière-plan */}
       <span className={styles.blobCercles} />
<span className={styles.blobWaveTop} />
<span className={styles.blobWaveBottom} />
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Contact</h1>

          {/* Bloc infos */}
          <ContactInfo />

          {/* Bloc formulaire */}
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
