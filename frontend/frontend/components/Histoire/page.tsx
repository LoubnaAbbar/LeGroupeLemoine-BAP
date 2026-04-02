'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const imgFormeOrga1 = "/images/histoire/forme-orga-1.png";
const imgFormeOrga2 = "/images/histoire/forme-orga-2.png";
const imgFormeOrga3 = "/images/histoire/forme-orga-3.png";
const imgEllipse = "/images/histoire/ellipse.png";

const img1990to2010 = "/images/histoire/h1.png";
const img2010to2013 = "/images/histoire/h2.png";
const img2017to2023 = "/images/histoire/h3.png";

const img2020_1 = "/images/histoire/1.png";
const img2020_2 = "/images/histoire/2.png";
const img2020_3 = "/images/histoire/3.png";

function TimelineImage({
  src,
  alt = "",
  size = "large",
}: {
  src: string;
  alt?: string;
  size?: "large" | "small";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const dim = size === "large" ? 336 : 248;

  return (
    <motion.div
      ref={ref}
      className="relative rounded-[7px] overflow-hidden shrink-0"
      style={{ width: dim, height: dim }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
}

function TimelineSmallCard({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="shrink-0 overflow-hidden flex items-center justify-center"
      style={{
        width: 230,
        height: 390,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </motion.div>
  );
}

function YearBubble({ year }: { year: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0"
      style={{ width: 266, height: 166, overflow: "visible" }}
      initial={{ opacity: 0, scale: 0.5, x: -50 }}
      animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <img
        src={imgEllipse}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 100,
          width: 266,
          height: 166,
        }}
      />

      <span
        style={{
          position: "absolute",
          top: "50%",
          left: 250,
          transform: "translateY(-50%)",
          fontWeight: "bold",
          fontSize: 36,
          color: "white",
          zIndex: 10,
        }}
      >
        {year}
      </span>
    </motion.div>
  );
}

const descriptionStyle = {
  fontSize: 17,
  lineHeight: "30px",
  fontWeight: 100,
  marginTop: 8,
  fontFamily: "Helvetica, sans-serif",
  letterSpacing: "0.01em",
};

const yearStyle = {
  fontSize: 24,
  lineHeight: "30px",
};

function TimelineEntry({
  year,
  side,
  description,
  imageSrc,
  imageAlt,
  imageOnOppositeSide = false,
  bubbleYear,
  textColor = "text-black",
  yearColor = "#000000",
  className = "",
  textBlockClassName = "",
  imageBlockClassName = "",
}: {
  year: string;
  side: "left" | "right";
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageOnOppositeSide?: boolean;
  bubbleYear?: string;
  textColor?: string;
  yearColor?: string;
  className?: string;
  textBlockClassName?: string;
  imageBlockClassName?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const isLeft = side === "left";

  const textVariants = {
    hidden: { opacity: 0, x: isLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start w-full ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-1 flex justify-start pr-50">
        {isLeft ? (
          <div className="flex flex-col gap-4 items-end max-w-[1040px] w-full">
            <motion.div
              className={`max-w-[512px] w-full ${textBlockClassName}`}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.p
                className={`font-bold ${textColor}`}
                style={{ ...yearStyle, color: yearColor }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {year}
              </motion.p>

              <motion.p
                className={textColor}
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </motion.div>

            {imageSrc && !imageOnOppositeSide && (
              <div className={`max-w-[512px] w-full ${imageBlockClassName}`}>
                <TimelineImage src={imageSrc} alt={imageAlt || ""} size="large" />
              </div>
            )}
          </div>
        ) : imageSrc && imageOnOppositeSide ? (
          <div className={`flex justify-end w-full ${imageBlockClassName}`}>
            <TimelineImage src={imageSrc} alt={imageAlt || ""} size="large" />
          </div>
        ) : null}
      </div>

      <div
        className="flex flex-col items-center"
        style={{ width: 166, overflow: "visible" }}
      >
        {bubbleYear ? (
          <YearBubble year={bubbleYear} />
        ) : (
          <div style={{ width: 12, height: 12, marginTop: 6 }} />
        )}
      </div>

      <div className="flex-1 flex justify-start pr-8">
        {!isLeft && (
          <motion.div
            className={`flex flex-col gap-4 max-w-[512px] ${textBlockClassName}`}
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-[512px] w-full pl-0">
              <motion.p
                className={`font-bold ${textColor}`}
                style={{ ...yearStyle, color: yearColor }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {year}
              </motion.p>

              <motion.p
                className={textColor}
                style={descriptionStyle}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {description}
              </motion.p>
            </div>

            {imageSrc && !imageOnOppositeSide && (
              <div className={`max-w-[512px] w-full ${imageBlockClassName}`}>
                <TimelineImage src={imageSrc} alt={imageAlt || ""} size="large" />
              </div>
            )}
          </motion.div>
        )}

        {isLeft && imageSrc && imageOnOppositeSide && (
          <div className={`flex justify-start w-full ${imageBlockClassName}`}>
            <TimelineImage src={imageSrc} alt={imageAlt || ""} size="large" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function NotreHistoirePage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <main className="relative bg-white overflow-hidden min-h-screen">
      <motion.img
        src={imgFormeOrga1}
        alt=""
        className="absolute pointer-events-none select-none left-0"
        style={{ top: -70, width: "100%", objectFit: "cover" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      <motion.img
        src={imgFormeOrga2}
        alt=""
        className="absolute pointer-events-none select-none left-0"
        style={{ top: 1900, width: "100%", objectFit: "cover" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      <motion.img
        src={imgFormeOrga3}
        alt=""
        className="absolute pointer-events-none select-none left-0"
        style={{ top: 5200, width: "100%", objectFit: "cover" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />

      <div
        className="relative mx-auto"
        style={{ maxWidth: 1440, padding: "0 200px" }}
      >
        <div ref={heroRef} style={{ paddingTop: 300 }}>
          <motion.h1
            className="font-bold text-white"
            style={{ fontSize: 36, lineHeight: "40px", maxWidth: 780 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Plus de 45 ans de savoir-faire à la française
          </motion.h1>
        </div>

        <div className="relative mt-24">
          <div className="flex flex-col gap-40">
            <TimelineEntry
              year="1978"
              side="left"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="Lemoine Industrial foundation in heart of Normandy, France"
              bubbleYear="1978"
            />

            <TimelineEntry
              year="1985"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Start of the cotton buds assembling in La Martinique, Normandy"
              bubbleYear="1985"
            />

            <TimelineEntry
              year="1998"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Acquisition of pads production plant in Emst, The Netherlands"
              bubbleYear="1998"
            />

            <TimelineEntry
              year="1990-2010"
              side="right"
              textColor="text-black"
              yearColor="#005DAA"
              description="International sales development"
              imageSrc={img1990to2010}
              imageAlt="International sales development"
              imageOnOppositeSide
            />

            <TimelineEntry
              year="95-98"
              side="right"
              textColor="text-black"
              yearColor="#005DAA"
              description="Integration of stick extrusion, plastic box injection and coil and pleats productions in various facilities in Normandy area"
              imageAlt="Integration of production facilities"
              imageOnOppositeSide
              className="-mt-100"
            />

            <TimelineEntry
              year="2010"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="After the destructive fire of La Martinique plant, relocation of buds assembly plant at La Blanchadiere, Flers, Normandy"
              imageAlt="Relocation of buds assembly plant"
              bubbleYear="2010"
            />

            <TimelineEntry
              year="2010-2013"
              side="right"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="Construction of a new brand factory for the buds assembling activity in Caligny, Normandy"
              imageSrc={img2010to2013}
              imageAlt="New factory in Caligny"
              imageOnOppositeSide
              className="mt-16"
              textBlockClassName="pt-20"
              imageBlockClassName="-ml-20"
            />

            <TimelineEntry
              year="2014"
              side="left"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="Acquisition of Lemoine Germany, entity producing pads, pleats, balls and buds in Oederan, Germany"
              bubbleYear="2014"
            />

            <TimelineEntry
              year="2015"
              side="left"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="Creation of Lemoine Estonia a pad production in Loo, Estonia"
              bubbleYear="2015"
            />

            <TimelineEntry
              year="2016"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Acquisition of Albasa, entity producing pads, pleats and balls in Saint Vicenc de Castellet, Spain"
              bubbleYear="2016"
            />

            <TimelineEntry
              year="2017"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Creation of Lemoine Philippines a ball production site in Binan, Philippines"
              bubbleYear="2017"
            />

            <TimelineEntry
              year="2018"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Creation of Lemoine Degasa Cotton Industry, a cotton buds production unit in Cuernavaca, Mexico"
              bubbleYear="2018"
            />

            <TimelineEntry
              year="2019"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="Creation of Lemoine Texticol Cotton Industry, a web and pads production unit in Cocentaina, Spain"
              bubbleYear="2019"
            />

            <TimelineEntry
              year="2020"
              side="left"
              textColor="text-black"
              yearColor="#005DAA"
              description="During the Covid Pandemic, our French and Dutch factories worked to manufacture essential medical devices. France produced rhino-pharyngeal swabs and surgical masks and The Netherlands surgical masks"
              bubbleYear="2020"
            />

            <div className="w-full flex justify-center -mt-40 mb-20">
              <div className="flex items-center justify-center gap-10">
                <TimelineSmallCard src={img2020_1} alt="Lemoine Degasa" />
                <TimelineSmallCard src={img2020_2} alt="Medical masks" />
                <TimelineSmallCard src={img2020_3} alt="Lemoine Spain" />
              </div>
            </div>

            <TimelineEntry
              year="2022"
              side="left"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="The Lemoine family, heavily invested in French industry for nearly 50 years, bought the Peaudouce brand in 2020. In 2022, the group relaunched this iconic French brand of babies products, all made in France."
              bubbleYear="2022"
            />

            <TimelineEntry
              year="2023"
              side="left"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="The 45th anniversary of Groupe Lemoine marks longevity of the company supplying products of high quality."
              bubbleYear="2023"
            />

            <TimelineEntry
              year="2017-2023"
              side="right"
              textColor="text-white"
              yearColor="#FFFFFF"
              description="For many years Groupe Lemoine teams are involved in sustainability at all levels, on product with our stick 100% carton box and paper stick, in green energy, and through actions to save water and reduce waste."
              imageSrc={img2017to2023}
              imageOnOppositeSide
              imageAlt="Sustainability actions"
            />
          </div>
        </div>

        <div className="mt-32 mb-12 flex items-center justify-between" />
      </div>
    </main>
  );
}