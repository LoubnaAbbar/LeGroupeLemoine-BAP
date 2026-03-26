import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NosMarquesHero from "@/components/nos-marques/NosMarquesHero";
import NosEngagements from "@/components/nos-marques/NosEngagements";
import MarqueSection from "@/components/nos-marques/MarqueSection";
import styles from "./nos-marques.module.css";

export const metadata = {
  title: "Nos Marques — Groupe Lemoine",
  description: "Découvrez les marques du Groupe Lemoine.",
};

const marques = [
  {
    id: 1,
    nom: "Peaudouce",
    soustitre: "Une histoire de douceur et d'exigence",
    intro: "Né du savoir-faire du groupe Lemoine, Peau Douce Longue s'inscrit dans une tradition d'exigence et de maîtrise autour d'une matière essentielle : le coton. Fort de son expertise reconnue à l'échelle européenne, le groupe a su développer au fil du temps une connaissance approfondie de cette fibre naturelle, de sa sélection à sa transformation. Peau Douce Longue est ainsi née d'une volonté claire : valoriser le coton dans ce qu'il a de plus pur, pour en révéler toute la douceur et en faire une signature de confiance au quotidien.",
    timeline: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ],
    autresMarques: [
      {
        id: 1,
        nom: "Bella Coton",
        texte: "Bella Coton met au cœur de ses engagements la qualité et la douceur du coton. La marque conçoit des produits respectueux de la peau et adaptés aux usages quotidiens, en privilégiant des procédés de fabrication fiables et responsables.",
      },
      {
        id: 2,
        nom: "Bella Coton",
        texte: "Bella Coton met au cœur de ses engagements la qualité et la douceur du coton. La marque conçoit des produits respectueux de la peau et adaptés aux usages quotidiens, en privilégiant des procédés de fabrication fiables et responsables.",
      },
    ],
  },
];

export default function NosMarquesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <NosMarquesHero />
        <NosEngagements />
        {marques.map((marque) => (
          <MarqueSection key={marque.id} marque={marque} />
        ))}
      </main>
      <Footer />
    </>
  );
}