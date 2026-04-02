import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "140px 20px 60px", // 140px pour compenser ton header fixed
        background: "#f4f2ef",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "32px",
          width: "min(1200px, 100%)",
          alignItems: "start",
        }}
      >




        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
}