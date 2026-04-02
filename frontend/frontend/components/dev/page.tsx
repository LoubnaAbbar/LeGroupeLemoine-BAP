'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DeveloppementDurable() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const chiffres = [
    { valeur: "4000 T", label: "Plastique" },
    { valeur: "508T", label: "co2" },
    { valeur: "20 milliards tiges", label: "papier" },
    { valeur: "25 000", label: "arbres plantés" },
  ];

  const engagements = [
    {
      icon: "/images/dev/icon1.png",
      text: (
        <>
          <span className="text-[#005DAA] font-medium">Suppression</span> du plastique et remplacement
          par du papier et carton issus de{" "}
          <span className="text-[#005DAA] font-medium">forêts gérées durablement</span>
        </>
      ),
    },
    {
      icon: "/images/dev/icon2.png",
      text: (
        <>
          <span className="text-[#005DAA] font-medium">Réduction</span> de l'impact environnemental :
          empreinte carbone, réduction des déchets, de la{" "}
          <span className="text-[#005DAA] font-medium">consommation d'énergie et d'eau</span>
        </>
      ),
    },
    {
      icon: "/images/dev/icon3.png",
      text: (
        <>
          Constitution d'une filière durable : circuits courts, matières premières durables{" "}
          <span className="text-[#005DAA] font-medium">création de gammes responsables</span>
        </>
      ),
    },
    {
      icon: "/images/dev/icon4.png",
      text: (
        <>
          Sensibilisation des{" "}
          <span className="text-[#005DAA] font-medium">enfants à la protection de l'environnement</span>{" "}
          et de la biodiversité en œuvrant pour le{" "}
          <span className="text-[#005DAA] font-medium">reboisement de la mangrove</span>
        </>
      ),
    },
  ];

  return (
    <main className="w-full bg-white font-sans">
      <section ref={heroRef} className="relative w-full h-[800px] overflow-hidden">
        <motion.img
          src="/images/dev/dev.jpeg"
          alt="Développement durable"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={isHeroInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <motion.div
          className="absolute left-90 md:left-90 bottom-24 max-w-[520px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            className="text-2xl md:text-5xl font-bold text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Développement durable
          </motion.h1>

          <motion.p
            className="text-base md:text-[20px] font-semibold text-white leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Le Groupe Lemoine, pionier d'une industrie responsable et engagée depuis sa
            création dans la lutte contre le réchauffement climatique.
          </motion.p>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          className="text-2xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos chiffres
        </motion.h2>

        <motion.div
          className="bg-[#b8d4e8] rounded px-2 py-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {chiffres.map((c, i) => (
              <motion.div
                key={c.label}
                className={`flex flex-col justify-center items-start px-8 py-4 ${
                  i < chiffres.length - 1 ? "border-r border-white/60" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <span className="text-[17px] font-semibold text-white leading-tight">
                  {c.valeur}
                </span>
                <span className="text-[17px] font-semibold text-white leading-tight">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {engagements.map((e, i) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={i}
                ref={ref}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <img
                    src={e.icon}
                    alt={`Icône engagement ${i + 1}`}
                    className="w-20 h-20 object-contain"
                  />
                </motion.div>
                <motion.p
                  className="text-sm text-black leading-relaxed max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  {e.text}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}