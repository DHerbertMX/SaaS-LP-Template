"use client";

// Importing necessary assets and components
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

const STEP_MS = 2500;

// Small looping illustrations, one per step
const IdeaVisual = () => (
  <div className="relative flex h-full items-center justify-center">
    {[0, 1, 2].map((ring) => (
      <motion.span
        key={ring}
        className="absolute h-16 w-16 rounded-full border-2 border-[#183EC2]/40"
        animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          delay: ring * 0.8,
          ease: "easeOut",
        }}
      />
    ))}
    <motion.svg
      viewBox="0 0 24 24"
      className="relative h-12 w-12 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.path
        d="M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"
        animate={{ fill: ["#FFFFFF00", "#FFE58A", "#FFFFFF00"] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </motion.svg>
  </div>
);

const QuoteVisual = () => (
  <div className="flex h-full items-center justify-center">
    <div className="relative w-28 rounded-xl bg-white p-3 shadow-[0_7px_14px_#D2DCFF]">
      {[0.9, 0.7, 0.8, 0.5].map((width, line) => (
        <motion.div
          key={line}
          className="mt-1.5 h-1.5 origin-left rounded-full bg-black/15 first:mt-0"
          style={{ width: `${width * 100}%` }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            times: [0, 0.25, 0.85, 1],
            delay: line * 0.15,
          }}
        />
      ))}
      <motion.div
        className="absolute -bottom-3 -right-3 rounded-lg bg-black px-2 py-1 text-xs font-bold text-white"
        animate={{ scale: [0, 1.15, 1, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0.35, 0.45, 0.5, 0.85, 1],
        }}
      >
        $ ✓
      </motion.div>
    </div>
  </div>
);

const CodeVisual = () => (
  <div className="flex h-full items-center justify-center">
    <div className="w-32 rounded-xl bg-black p-3 font-mono text-[10px] leading-4">
      {[
        { width: "70%", color: "#71C2EF", indent: 0 },
        { width: "55%", color: "#DD7DDF", indent: 8 },
        { width: "65%", color: "#BBCB92", indent: 8 },
        { width: "40%", color: "#E1CD86", indent: 0 },
      ].map(({ width, color, indent }, line) => (
        <motion.div
          key={line}
          className="mt-1.5 h-1.5 origin-left rounded-full first:mt-0"
          style={{ width, background: color, marginLeft: indent }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            times: [0, 0.2, 0.85, 1],
            delay: line * 0.35,
            ease: "linear",
          }}
        />
      ))}
      <motion.span
        className="mt-1.5 block h-2.5 w-1 bg-white"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  </div>
);

const LaunchVisual = () => (
  <div className="relative flex h-full items-center justify-center overflow-hidden">
    {[...Array(6)].map((_, star) => (
      <motion.span
        key={star}
        className="absolute h-1 w-1 rounded-full bg-[#183EC2]/50"
        style={{ left: `${12 + star * 15}%` }}
        animate={{ y: [-60, 80] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          delay: star * 0.3,
          ease: "linear",
        }}
      />
    ))}
    <motion.svg
      viewBox="0 0 24 24"
      className="relative h-12 w-12 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ y: [4, -6, 4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Zm-3-3H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      />
    </motion.svg>
  </div>
);

const steps = [
  {
    title: "Tu idea",
    description: "Nos cuentas qué quieres lograr y entendemos tu negocio.",
    Visual: IdeaVisual,
  },
  {
    title: "Cotización",
    description: "Te enviamos una propuesta clara, con tiempos y costos.",
    Visual: QuoteVisual,
  },
  {
    title: "Desarrollo",
    description: "Diseñamos y programamos tu solución, con avances constantes.",
    Visual: CodeVisual,
  },
  {
    title: "Tu sueño, en línea",
    description: "Lanzamos tu proyecto y te acompañamos después.",
    Visual: LaunchVisual,
  },
];

export const ProductShowcase = () => {
  const sectionRef = React.useRef(null);
  const stepsRef = React.useRef(null);
  const [active, setActive] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Progress line fills as the steps scroll into view
  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsRef,
    offset: ["start 85%", "center 45%"],
  });

  // Highlight each step in turn
  React.useEffect(() => {
    const timer = setInterval(
      () => setActive((step) => (step + 1) % steps.length),
      STEP_MS,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            {/* Tagline for the section */}
            <div className="tag">Tecnología a tu medida</div>
          </div>
          {/* Main title of the section */}
          <h2 className="section-title mt-5">
            De la idea al producto, sin complicaciones
          </h2>
          {/* Description paragraph */}
          <p className="section-description mt-5">
            Te acompañamos en todo el ciclo: análisis, diseño UX/UI, desarrollo,
            pruebas, despliegue en la nube y soporte continuo.
          </p>
        </div>
        {/* Animated process */}
        <div className="relative mt-16">
          <motion.img
            src={pyramidImage.src}
            alt=""
            aria-hidden
            height={262}
            width={262}
            className="pointer-events-none absolute -right-36 -top-40 z-10 hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src={tubeImage.src}
            alt=""
            aria-hidden
            height={248}
            width={248}
            className="pointer-events-none absolute -bottom-40 -left-48 z-10 hidden md:block"
            style={{ translateY }}
          />
          <div
            ref={stepsRef}
            className="relative rounded-3xl border border-[#222222]/10 bg-white/70 p-8 shadow-[0_20px_50px_-12px_rgba(0,30,128,0.25)] backdrop-blur-md md:p-12"
          >
            {/* Connecting line (desktop) */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[76px] hidden h-0.5 bg-black/10 lg:block">
              <motion.div
                className="h-full origin-left bg-black"
                style={{ scaleX: stepsProgress }}
              />
            </div>
            <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map(({ title, description, Visual }, index) => (
                <motion.li
                  key={title}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onMouseEnter={() => setActive(index)}
                >
                  {/* Step number */}
                  <div
                    className={twMerge(
                      "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#222222]/10 bg-white text-lg font-bold text-black transition-colors duration-500",
                      active === index && "border-black bg-black text-white",
                    )}
                  >
                    {index + 1}
                  </div>
                  {/* Step illustration */}
                  <div
                    className={twMerge(
                      "mt-6 h-32 w-full max-w-[220px] rounded-2xl bg-[#EAEEFE] transition-all duration-500",
                      active === index &&
                        "scale-105 bg-[#D2DCFF] shadow-[0_14px_28px_#D2DCFF]",
                    )}
                  >
                    <Visual />
                  </div>
                  <h3 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-xl font-bold tracking-tighter text-transparent">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-[240px] text-sm tracking-tight text-[#010D3E]">
                    {description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
