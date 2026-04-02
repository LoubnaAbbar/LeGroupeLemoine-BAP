'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const imgCercles1 = "/images/cercles1.png";
const imgCercles2 = "/images/cercles2.png";
const imgCercles3 = "/images/cercles3.png";
const imgCercles4 = "/images/cercles4.png";

export default function Section() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const cards = [
    {
      img: "/images/germany.png",
      year: "1998",
      desc: "Acquisition of pads production plant in Emst, The Netherlands",
    },
    {
      img: "/images/holland.png",
      year: "2014",
      desc: "Acquisition of Lemoine Germany, entity producing pads, pleats, balls and buds in Oederan, Germany",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "900px" }}
    >
      <div className="absolute right-0 top-[-50px] w-[735px] h-[550px] pointer-events-none z-0">
        {/* Haut */}
        <motion.div
          className="absolute top-[0px] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -50, rotate: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={imgCercles1} alt="" className="w-[280px] h-[280px] object-contain" />
        </motion.div>
        {/* Gauche */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[0px]"
          initial={{ opacity: 0, x: -50, rotate: -90 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={imgCercles2} alt="" className="w-[280px] h-[280px] object-contain" />
        </motion.div>
        {/* Droite */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-[0px]"
          initial={{ opacity: 0, x: 50, rotate: 90 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={imgCercles3} alt="" className="w-[280px] h-[280px] object-contain" />
        </motion.div>
        {/* Bas */}
        <motion.div
          className="absolute bottom-[0px] left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 50, rotate: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={imgCercles4} alt="" className="w-[280px] h-[280px] object-contain" />
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[200px] pt-[200px] z-20">
        <motion.h2
          className="text-[36px] leading-[40px] font-bold text-white max-w-[743px] mb-18"
          style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Plus de 45 ans de savoir-faire à la française
        </motion.h2>

        <motion.p
          className="text-[16px] leading-[22px] text-white max-w-[776px] mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Fondé en 1978 par Philippe et Jeanne Lemoine, le Groupe Lemoine a développé un savoir-faire unique
          dans la fabrication de produits de soin et d&apos;hygiène à base de coton. En quelques années, la
          petite entreprise familiale est devenue leader sur son marché en Europe, et N°2 dans le monde, avec
          plus de 300 clients à l&apos;international et 10 usines sur les 5 continents. Une expertise
          reconnue, qui repose non seulement sur sa capacité d&apos;innovation mais aussi sur son engagement
          fort en matière de développement durable.
        </motion.p>

        <motion.button
          className="h-[45px] px-6 rounded-[25.6px] bg-[#EEF2F1] text-[#005DAA] font-bold text-[16px] uppercase tracking-wide cursor-pointer hover:bg-[#e4e9e8] transition-colors mb-16"
          style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN SAVOIR PLUS
        </motion.button>

        <div className="flex gap-8">
          {cards.map((card, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, { once: true, amount: 0.5 });

            return (
              <motion.div
                key={card.year}
                ref={cardRef}
                className="shrink-0 rounded-[12px] overflow-hidden relative"
                style={{ width: "512px", height: "420px", border: "2px solid #5190C2" }}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50, scale: 0.95 }}
                animate={isCardInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <motion.img
                  src={card.img}
                  alt={card.year}
                  className="w-full h-full object-cover absolute inset-0"
                  initial={{ scale: 1.1 }}
                  animate={isCardInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4"
                  initial={{ y: 100 }}
                  animate={isCardInView ? { y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <motion.p
                    className="text-[18px] font-bold text-[#005DAA] mb-1"
                    style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    {card.year}
                  </motion.p>
                  <motion.p
                    className="text-[14px] text-black leading-[20px]"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    {card.desc}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}