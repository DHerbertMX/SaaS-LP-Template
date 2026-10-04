"use client";

// Importing necessary assets and components
import { motion } from "framer-motion";
import { testimonials } from "@/constants";

export const Testimonials = () => {
  return (
    <section id="clientes" className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          {/* Section title and description */}
          <div className="flex justify-center">
            <div className="tag">Clientes</div>
          </div>
          <h2 className="section-title mt-5">Lo que dicen nuestros clientes</h2>
          <p className="section-description mt-5">
            Empresas que confiaron en nosotros para construir su presencia
            digital.
          </p>
        </div>
        {/* Testimonials */}
        <div className="mt-16 flex flex-col items-center gap-16">
          {testimonials.map(({ text, name, company }) => (
            <motion.figure
              key={name}
              className="max-w-[720px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-xl leading-8 tracking-tight text-[#010D3E] md:text-2xl md:leading-10">
                &ldquo;{text}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm tracking-tight">
                <span className="font-bold text-black">{name}</span>
                <span className="mx-2 text-black/30">·</span>
                <span className="text-black/50">{company}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
