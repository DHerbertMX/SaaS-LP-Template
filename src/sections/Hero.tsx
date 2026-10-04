"use client";

// Importing necessary assets and components
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  const heroRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            {/* Version indicator */}
            <div className="tag">Desarrollo de software a medida</div>
            {/* Main heading */}
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Software que impulsa tu negocio
            </h1>
            {/* Description paragraph */}
            <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
              Diseñamos y desarrollamos aplicaciones web, móviles y sistemas a la
              medida de tu empresa: escalables, seguros y listos para crecer contigo.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              {/* Call to action buttons */}
              <a href="#contacto" className="btn btn-primary">Cotiza tu proyecto</a>
              <button className="btn btn-text gap-1">
                <span>Conoce más</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            {/* Images displayed in the hero section */}
            <motion.img
              src={cogImage.src}
              alt="Imagen de engranaje"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Imagen de cilindro"
              className="-left-32 -top-8 hidden md:absolute md:block"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Imagen decorativa"
              className="absolute left-[448px] top-[524px] hidden lg:block"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
