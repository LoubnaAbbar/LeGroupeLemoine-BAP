'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionWorld() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { text: "30 milliards de bâtonnets ouatés", suffix: ", soit 57 078 bâtonnets par minute." },
    { text: "175 millions", suffix: " de sachets disques à démaquiller" },
    { text: "8 millions", suffix: " de sachets de coton hydrophile" },
    { text: "10 produits par seconde", suffix: " !", prefix: "Soit une production de " },
    { text: "des milliers de palettes", suffix: " à travers le monde.", prefix: "Et si on parle de livraison, chaque année, le Groupe Lemoine livre " }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent min-h-[1158px]"
    >
      <div className="absolute inset-0 z-0">
        <motion.video
          src="/images/world.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      <motion.div
        className="absolute left-0 bottom-0 w-full pointer-events-none opacity-100 z-20 translate-y-[140px]"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 140 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src="/images/shape2.png" alt="" className="w-full object-cover" />
      </motion.div>

      <div className="relative max-w-[1440px] mx-auto px-[200px] pt-[750px] z-20">
        <motion.h2
          className="text-[36px] leading-[40px] font-bold text-white max-w-[518px] mb-8"
          style={{ fontFamily: "'Helvetica LT Pro', Helvetica, Arial, sans-serif" }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Présent dans le monde entier
        </motion.h2>

        <motion.div
          className="text-[16px] leading-[22px] text-white max-w-[590px]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Chaque année, dans les usines du groupe, sont produits et distribués :
          </motion.p>

          {stats.map((stat, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              {stat.prefix && <span>{stat.prefix}</span>}
              <span className="font-bold">{stat.text}</span>
              <span>{stat.suffix}</span>
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}