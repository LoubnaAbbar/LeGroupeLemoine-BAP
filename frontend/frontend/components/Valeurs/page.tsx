'use client';

import Image from "next/image";
import { ChevronUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    letter: "R",
    titleStart: "Comme... ",
    titleHighlight: "Réactivité",
    text: "S'adapter aux nouvelles exigences réglementaires et aux évolutions du marché demande une réelle réactivité dans nos prises de décision.\nCette posture agile nous permet d'être précurseur par rapport aux attentes des consommateurs et de relever de nouveaux défis à l'international.",
  },
  {
    letter: "E",
    titleStart: "Comme... ",
    titleHighlight: "Engagements",
    text: "L'Engagement s'exprime de multiples façons au sein de notre entreprise.\nEngagés, nous le sommes avec nos clients et nos fournisseurs, avec qui nous nouons des relations de confiance. Engagés, nous le sommes aussi avec nos collaborateurs, en menant une politique RH vertueuse. Enfin, nos actions en matière de développement durable témoignent de notre engagement pour la sauvegarde de la planète.",
  },
  {
    letter: "C",
    titleStart: "Comme... ",
    titleHighlight: "Confiance",
    text: "Parmi les valeurs phares qui constituent notre ADN, la Confiance est sûrement un des moteurs qui a permis de nous hisser au rang de leader mondial.\nConfiance en l'avenir d'abord, car rien de grand ne peut se faire sans audace ! Confiance en interne aussi, puisque nous veillons à créer et nourrir un dialogue permanent avec nos collaborateurs. Confiance en externe enfin, car nous avons à cœur de développer des relations privilégiées avec tous nos partenaires : clients, fournisseurs, banques, collectivités...",
  },
  {
    letter: "I",
    titleStart: "Comme... ",
    titleHighlight: "Innovation",
    text: "Elle crée une dynamique collective et reste la clé d'une croissance durable.\nParce que rien n'est jamais figé et que tout peut être amélioré, nous accordons une importance particulière à la recherche et à l'innovation. L'innovation est indispensable pour assurer notre leadership et notre compétitivité sur un marché très concurrentiel.",
  },
  {
    letter: "P",
    titleStart: "Comme... ",
    titleHighlight: "Passion",
    text: "Notre métier nous le vivons avec passion !\nEt cet enthousiasme se retrouve dans les produits que nous fabriquons, et dans le bien-être qu'ils apportent... Cet élan nous conduit à relever, chaque jour, de nouveaux défis tout en permettant la créativité des hommes des femmes qui travaillent avec nous.",
  },
  {
    letter: "E",
    titleStart: "Comme... ",
    titleHighlight: "Excellence",
    text: "Une bonne dose de réactivité et d'engagements, une belle part de confiance et d'innovation, une grande pincée de passion... Telle est la recette de l'Excellence !\nCette quête que nous menons chaque jour est plus qu'une valeur : c'est une véritable philosophie, qui vise à offrir le meilleur à nos clients. Elle s'exprime dans notre capacité d'innovation, mais aussi au travers de nos engagements en matière de préservation de l'environnement, d'achats responsables et de politique RH engagée.",
  },
];

const valueIcons = [
  "/images/valeurs/icone-r.png",
  "/images/valeurs/icone-e.png",
  "/images/valeurs/icone-c.png",
  "/images/valeurs/icone-i.png",
  "/images/valeurs/icone-p.png",
  "/images/valeurs/icone-e2.png",
];

function ValueIcon({ src }: { src: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img src={src} alt="" className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] object-contain" />
    </motion.div>
  );
}

export default function NosValeursPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] text-black">
      <section className="relative w-full">
        <motion.div
          className="relative h-[500px] sm:h-[560px] md:h-[620px] lg:h-[760px] w-full bg-[#ECECEC]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/valeurs/1.png"
              alt="Nos valeurs Groupe Lemoine"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/10" />

          <motion.div
            className="absolute bottom-[-150px] sm:bottom-[-200px] md:bottom-[-250px] left-0 z-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/images/valeurs/shape.png"
              alt=""
              className="block w-full h-auto"
            />
          </motion.div>

          <div className="absolute left-1/2 bottom-[0px] z-20 w-full max-w-[1150px] -translate-x-1/2 px-4 sm:px-6 md:bottom-[10px]">
            <div className="max-w-[760px]">
              <motion.h1
                className="text-[24px] sm:text-[32px] md:text-[44px] lg:text-[54px] font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Nos valeurs : RECIPE, la recette du succès
              </motion.h1>

              <motion.p
                className="mt-4 sm:mt-6 max-w-[520px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Si la recherche de l'excellence est inscrite dans notre ADN, elle est aussi fondée sur un socle de valeurs fortes, qui guident nos prises de décisions et nos actions.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1150px] px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="mt-8 sm:mt-12 md:mt-16 space-y-16 sm:space-y-20 md:space-y-24">
          {values.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={`${item.letter}-${index}`}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                {index % 2 === 0 ? (
                  <div className="grid items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-[160px_minmax(0,1fr)_160px] lg:grid-cols-[200px_minmax(0,1fr)_200px]">
                    <div className="flex justify-center md:order-1">
                      <ValueIcon src={valueIcons[index]} />
                    </div>

                    <div className="md:order-2 max-w-[620px] mx-auto md:mx-0">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.span
                          className="min-w-[24px] sm:min-w-[28px] text-[42px] sm:text-[50px] md:text-[58px] font-bold leading-[0.9] text-[#005DAA]"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {item.letter}
                        </motion.span>
                        <div className="pt-1 sm:pt-2">
                          <motion.h3
                            className="text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-tight"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <span className="text-[#005DAA]">{item.titleStart}</span>
                            <span className="text-[#005DAA]">{item.titleHighlight}</span>
                          </motion.h3>
                          <motion.div
                            className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.55]"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            {item.text.split("\n").map((paragraph, paragraphIndex) => {
                              if (paragraphIndex === 0) {
                                return (
                                  <p key={paragraphIndex} className="text-[#005DAA] opacity-70">
                                    {paragraph}
                                  </p>
                                );
                              }
                              return (
                                <p key={paragraphIndex} className="text-[#4A4A4A]">
                                  {paragraph}
                                </p>
                              );
                            })}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block md:order-3" />
                  </div>
                ) : (
                  <div className="grid items-center gap-6 sm:gap-8 md:gap-10 md:grid-cols-[160px_minmax(0,1fr)_160px] lg:grid-cols-[200px_minmax(0,1fr)_200px]">
                    <div className="hidden md:block md:order-1" />

                    <div className="md:order-2 max-w-[620px] mx-auto md:mx-0">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.span
                          className="min-w-[24px] sm:min-w-[28px] text-[42px] sm:text-[50px] md:text-[58px] font-bold leading-[0.9] text-[#005DAA]"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          {item.letter}
                        </motion.span>
                        <div className="pt-1 sm:pt-2">
                          <motion.h3
                            className="text-[18px] sm:text-[20px] md:text-[22px] font-bold leading-tight"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            <span className="text-[#005DAA]">{item.titleStart}</span>
                            <span className="text-[#005DAA]">{item.titleHighlight}</span>
                          </motion.h3>
                          <motion.div
                            className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.55]"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            {item.text.split("\n").map((paragraph, paragraphIndex) => {
                              if (paragraphIndex === 0) {
                                return (
                                  <p key={paragraphIndex} className="text-[#005DAA] opacity-70">
                                    {paragraph}
                                  </p>
                                );
                              }
                              return (
                                <p key={paragraphIndex} className="text-[#4A4A4A]">
                                  {paragraph}
                                </p>
                              );
                            })}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:order-3">
                      <ValueIcon src={valueIcons[index]} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <motion.button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex h-[48px] w-[48px] sm:h-[52px] sm:w-[52px] md:h-[58px] md:w-[58px] items-center justify-center rounded-[10px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] cursor-pointer"
        aria-label="Retour en haut"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="text-[#2E6E9E]" size={24} />
      </motion.button>
    </main>
  );
}