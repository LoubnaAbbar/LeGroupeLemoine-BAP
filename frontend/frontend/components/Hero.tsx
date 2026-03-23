"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    title: "Rejoignez une aventure qui dure depuis 40 ans",
    description:
      "Depuis 40 ans, le Groupe Lemoine s’est imposé comme un leader incontournable, devenant N°1 en Europe et N°2 dans le monde dans la fabrication et la commercialisation de produits d’hygiène en coton. Aujourd’hui, nous recherchons des talents prêts à s’engager à nos côtés pour construire l’avenir et relever de nouveaux défis.",
    cta: "Nous recrutons !",
    image: "/images/hero-recrutement.jpg",
    imageAlt: "Équipe du Groupe Lemoine dans un environnement professionnel",
  },
  {
    id: 2,
    title: "Leader des produits hygiène coton",
    description:
      "Depuis 40 ans, le Groupe Lemoine s’est hissé parmi les leaders du marché, devenant N°1 en Europe et N°2 dans le monde dans la fabrication et la commercialisation de produits d’hygiène en coton. Nous développons des partenariats solides et durables pour continuer à innover et accompagner notre croissance à l’échelle internationale.",
    cta: "Partenariats",
    image: "/images/hero-coton.jpg",
    imageAlt: "Production et produits d’hygiène coton du Groupe Lemoine",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className={styles.hero} aria-label="Carrousel principal">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${
            index === currentIndex ? styles.slideActive : ""
          }`}
          aria-hidden={index !== currentIndex}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              className={styles.heroImage}
            />

            <img
              src="/images/blue-shape.png"
              alt=""
              className={styles.blueShape}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <button type="button" className={styles.cta}>
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.bottomPanel}>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={goToPrev}
            aria-label="Slide précédent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className={styles.dots}
            role="tablist"
            aria-label="Navigation du carrousel"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`${styles.dot} ${
                  index === currentIndex ? styles.dotActive : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={goToNext}
            aria-label="Slide suivant"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>


      </div>
    </section>
  );
}