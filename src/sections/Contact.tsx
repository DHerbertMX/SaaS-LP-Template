"use client";

// Importing necessary assets and components
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contactInfo, services } from "@/constants";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import cylinderImage from "@/assets/cylinder.png";

const inputClass =
  "w-full rounded-xl border border-[#222222]/10 bg-white px-4 py-3 tracking-tight text-black outline-none transition placeholder:text-black/40 focus:border-black";

export const Contact = () => {
  const sectionRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Builds a WhatsApp message from the form and opens the chat
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Hola Herzago, soy ${data.get("name")}.`,
      `Me interesa: ${data.get("service")}.`,
      `${data.get("message")}`,
      `Mi correo: ${data.get("email")}`,
    ].join("\n");
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="relative mx-auto max-w-[960px]">
          {/* Decorative props */}
          <motion.img
            src={starImage.src}
            alt=""
            aria-hidden
            width={300}
            className="pointer-events-none absolute -left-96 -top-28 hidden lg:block"
            style={{ translateY }}
          />
          <motion.img
            src={cylinderImage.src}
            alt=""
            aria-hidden
            width={200}
            className="pointer-events-none absolute -bottom-10 -right-60 hidden lg:block"
            style={{ translateY }}
          />
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            {/* Heading and direct channels */}
            <div>
              <div className="tag">Contacto</div>
              <h2 className="section-title mt-5 text-left">
                Hablemos de tu proyecto
              </h2>
              <p className="mt-5 text-xl tracking-tight text-[#010D3E]">
                Cuéntanos tu idea y te respondemos en menos de 24 horas con una
                propuesta sin compromiso.
              </p>
              <ul className="mt-10 flex flex-col gap-6 tracking-tight">
                <li>
                  <div className="text-sm text-black/50">WhatsApp</div>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black hover:underline"
                  >
                    {contactInfo.whatsappLabel}
                  </a>
                </li>
                <li>
                  <div className="text-sm text-black/50">Correo</div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-bold text-black hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <div className="text-sm text-black/50">Ubicación</div>
                  <div className="font-bold text-black">
                    {contactInfo.location}
                  </div>
                </li>
              </ul>
            </div>
            {/* Contact form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-[#222222]/10 bg-white/70 p-8 shadow-[0_20px_50px_-12px_rgba(0,30,128,0.25)] backdrop-blur-md md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <input
                name="name"
                required
                placeholder="Nombre"
                autoComplete="name"
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Correo electrónico"
                autoComplete="email"
                className={inputClass}
              />
              <select
                name="service"
                required
                defaultValue=""
                className={inputClass}
              >
                <option value="" disabled>
                  ¿Qué necesitas?
                </option>
                {services.map(({ title }) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
                <option value="Otro">Otro</option>
              </select>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto"
                className={`${inputClass} resize-none`}
              />
              <button type="submit" className="btn btn-primary mt-2 gap-1 py-3">
                Enviar por WhatsApp
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-center text-xs tracking-tight text-black/40">
                Se abrirá WhatsApp con tu mensaje listo para enviar. Consulta
                nuestro{" "}
                <a href="/aviso-de-privacidad" className="underline">
                  aviso de privacidad
                </a>
                .
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
