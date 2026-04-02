'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function NosMetiers() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const metiers = [
    {
      title: "Production",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      paragraphs: [
        "Le Groupe a acquis une réelle expertise dans la fabrication de produits d'hygiène et de soin 100&nbsp;% coton pour le compte de marques de distributeurs. Nous sommes le seul industriel capable de maîtriser le process de fabrication de A à Z&nbsp;: fabrication de boîtes, de sticks, carderie, assemblage des bâtonnets, découpe de nappes pour les disques et livraison de produits finis.",
        "Nos 8 sites industriels, en France et à l'international, assurent l'ensemble de la production, ce qui permet de sécuriser nos livraisons tout en garantissant un réel savoir-faire dans la fabrication de nos produits."
      ]
    },
    {
      title: "Qualité",
      image: "images/metiers/2.png",
      paragraphs: [
        "Très investis dans une démarche qualité, nous veillons à la Satisfaction Client en gardant la maîtrise de notre outil de production. Ainsi, nous effectuons de nombreux contrôles tout au long du processus de fabrication, afin de garantir un produit fini répondant en tout point aux procédures d'hygiène et aux obligations de sécurité.",
        "Du reste nos usines sont certifiées&nbsp;:"
      ],
      certifications: [
        "IFS HPC® et le BRC CP® qui attestent de la bonne conformité et de l'innocuité de nos produits",
        "Gots® pour la qualité de notre coton biologique*",
        "Nordic Swan® pour la conception durable de nos produits",
        "Flo-Cert® pour nos produits issus du commerce équitable",
      ]
    },
    {
      title: "Logistique",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      paragraphs: [
        "Livrer les marchandises dans les conditions requises par le client, avec une démarche environnementale responsable&nbsp;: telle est la mission que nous nous sommes fixés afin de satisfaire tous nos clients.",
        "Pour garantir des livraisons rapides et performantes, nous disposons de plusieurs plateformes de stockage en Europe et à l'International."
      ]
    },
    {
      title: "RH",
      subtitle: "Révéler les talents de nos collaborateurs",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      paragraphs: [
        "Fidèle à nos valeurs de proximité, de confiance et d'écoute, nous menons une politique RH responsable envers tous nos collaborateurs.",
        "Notre Groupe attache en effet une importance toute particulière au bien-être de chacun, en impulsant une véritable qualité de vie au travail. Nous misons également sur le développement des compétences au travers d'une politique de formation soutenue.",
        "Nos salariés ont ainsi la possibilité de se former tout au long de leur carrière et d'évoluer au sein du groupe, grâce à la promotion interne et à la mobilité."
      ]
    }
  ];

  return (
    <main className="w-full bg-white font-helvetica overflow-hidden">
      {/* ── HERO IMAGE ── */}
      <motion.section
        ref={heroRef}
        className="w-full h-[530px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="images/metiers/1.jpeg"
          alt="Matière coton"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          animate={isHeroInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.section>

      {/* ── CHAQUE MÉTIER ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-3xl font-semibold text-black mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Chaque métier
        </motion.h1>

        {/* Grid 2 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {metiers.map((metier, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, amount: 0.3 });

            return (
              <motion.div
                key={metier.title}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="w-full h-52 overflow-hidden mb-5"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <motion.img
                    src={metier.image}
                    alt={metier.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.h2
                  className="text-lg font-semibold text-black mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {metier.title}
                </motion.h2>
                {metier.subtitle && (
                  <motion.h3
                    className="text-base font-semibold text-black mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 }}
                  >
                    {metier.subtitle}
                  </motion.h3>
                )}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {metier.paragraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className={`text-sm text-black leading-relaxed ${idx < metier.paragraphs.length - 1 ? 'mb-3' : ''}`}
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
                  {metier.certifications && (
                    <>
                      <ul className="text-sm text-black leading-relaxed space-y-1.5 mt-2">
                        {metier.certifications.map((item) => (
                          <li key={item} className="flex gap-2 items-start">
                            <span className="mt-2 w-1 h-1 rounded-full bg-black shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-black mt-2 italic">
                        *coton issu de l'agriculture biologique
                      </p>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SÉPARATEUR + BASELINE ── */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.hr
          className="border-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.div
          className="py-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-black mb-1">
            Des métiers complémentaires, une même exigence
          </p>
          <p className="text-sm text-black">
            Production, qualité, logistique et RH avancent main dans la main vers
            un objectif commun.
          </p>
        </motion.div>
        <motion.hr
          className="border-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <div className="h-16" />
    </main>
  );
}