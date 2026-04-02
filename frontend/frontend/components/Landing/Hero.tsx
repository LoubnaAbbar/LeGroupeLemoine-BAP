"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Rejoignez une aventure qui dure depuis plus de 45 ans",
    description:
      "Depuis 40 ans, le Groupe Lemoine s'est imposé comme un leader incontournable, devenant N°1 en Europe et N°2 dans le monde dans la fabrication et la commercialisation de produits d'hygiène en coton. Aujourd'hui, nous recherchons des talents prêts à s'engager à nos côtés pour construire l'avenir et relever de nouveaux défis.",
    cta: "NOUS RECRUTONS",
    image: "/images/hero-recrutement.png",
  },
  {
    id: 2,
    title: "Leader des produits hygiène coton",
    description:
      "Depuis 40 ans, le Groupe Lemoine s'est hissé parmi les leaders du marché, devenant N°1 en Europe et N°2 dans le monde. Nous développons des partenariats solides et durables pour continuer à innover à l'échelle internationale.",
    cta: "PARTENARIATS",
    image: "/images/hero-coton.png",
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

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full pt-[118px] overflow-hidden"
      style={{ minHeight: "924px" }}
    >
      <div className="absolute left-0 right-0 top-[118px] h-[810px] z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={index === currentIndex ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={index === currentIndex ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        ))}
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[200px] pt-[104px] z-20">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${currentIndex}`}
            className="text-[36px] leading-[40px] font-bold text-white max-w-[688px] mb-6"
            style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {currentSlide.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`desc-${currentIndex}`}
            className="text-[16px] leading-[22px] text-white max-w-[774px] mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {currentSlide.description}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.button
            key={`btn-${currentIndex}`}
            className="h-[45px] px-6 rounded-[50px] bg-[#EEF2F1] text-[#005DAA] font-bold text-[16px] uppercase tracking-wide cursor-pointer hover:bg-[#e4e9e8] transition-colors"
            style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {currentSlide.cta}
          </motion.button>
        </AnimatePresence>

        <div className="flex items-center gap-4 mt-10">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`rounded-full transition-all ${
                index === currentIndex
                  ? "w-[18px] h-[18px] bg-[#005DAA]"
                  : "w-[18px] h-[18px] border-2 border-[#005DAA] bg-transparent"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}