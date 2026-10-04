"use client";

// Importing necessary assets and components
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/constants";
import CheckIcon from "@/assets/check.svg";
import pyramidImage from "@/assets/pyramid.png";
import noodleImage from "@/assets/noodle.png";

// Line icons (24x24, stroke-based) for each service
const icons: Record<string, React.ReactNode> = {
  rocket: (
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09ZM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Zm-3-3H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  ),
  catalog: (
    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
  ),
  cart: (
    <path d="M8 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 1.9-1.5L23 7H6" />
  ),
  building: (
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Zm-2-10H2v10h20V12h-2M10 6h4m-4 4h4m-4 4h4m-4 4h4" />
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6.5-10-5 12" />,
  social: (
    <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  ),
};

export const Services = () => {
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#D2DCFF] to-white py-24"
    >
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Servicios</div>
          </div>
          <h2 className="section-title mt-5">Soluciones web para tu negocio</h2>
          <p className="section-description mt-5">
            Desde una landing page hasta una tienda online completa: creamos el
            sitio que tu empresa necesita para crecer en internet.
          </p>
        </div>
        {/* Services grid with decorative props */}
        <div className="relative mt-10">
          <motion.img
            src={pyramidImage.src}
            alt="Imagen de pirámide"
            width={262}
            height={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src={noodleImage.src}
            alt="Imagen decorativa"
            width={220}
            className="absolute -left-40 bottom-10 hidden md:block"
            style={{ rotate: 30, translateY }}
          />
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon, title, description, features }, index) => (
              <motion.div
                key={title}
                className="card max-w-none bg-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_#D2DCFF]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                {/* Service icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icons[icon]}
                  </svg>
                </div>
                {/* Service title and description */}
                <h3 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-2xl font-bold tracking-tighter text-transparent">
                  {title}
                </h3>
                <p className="mt-3 tracking-tight text-[#010D3E]">
                  {description}
                </p>
                {/* Service features */}
                <ul className="mt-6 flex flex-col gap-3">
                  {features.map((feature) => (
                    <li
                      className="flex items-center gap-3 text-sm tracking-tight"
                      key={feature}
                    >
                      <CheckIcon className="h-5 w-5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
