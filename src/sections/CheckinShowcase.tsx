"use client";

// Home section promoting Checkin, Herzago's time-clock product
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import { CheckinMock } from "@/components/CheckinMock";
import { checkinAppUrl, checkinPath } from "@/constants/checkin";

const points = [
  "Checa desde el celular o una tablet, sin reloj físico",
  "Retardos, faltas y horas extra calculados solos",
  "Registro electrónico de jornada de la reforma laboral",
  "Permisos, vacaciones y exportación a nómina",
];

export const CheckinShowcase = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section id="checkin" ref={ref} className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Nuevo producto · Checkin</div>
          </div>
          <h2 className="section-title mt-5">Reloj checador digital para tu negocio</h2>
          <p className="section-description mt-5">
            Controla la asistencia de tu personal desde el celular, con las incidencias listas para tu nómina.
          </p>
        </div>
        <div className="relative mt-12 grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <motion.img src="/checkin/3d-clock.webp" alt="" aria-hidden width={220} className="absolute -left-36 -top-24 hidden mix-blend-multiply lg:block" style={{ translateY }} />
          <motion.img src="/checkin/3d-calender.webp" alt="" aria-hidden width={180} className="absolute -right-32 bottom-0 hidden mix-blend-multiply lg:block" style={{ rotate: 12, translateY }} />
          <div>
            <ul className="flex flex-col gap-4">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-lg tracking-tight text-[#010D3E]">
                  <CheckIcon className="h-5 w-5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 tracking-tight text-[#010D3E]">Desde $299 MXN al mes, con 14 días de prueba gratis.</p>
            <div className="mt-8 flex flex-wrap items-center gap-1">
              <a href={checkinPath} className="btn btn-primary">Conoce Checkin</a>
              <a href={checkinAppUrl} target="_blank" rel="noopener" className="btn btn-text gap-1">
                <span>Prueba gratis</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <CheckinMock className="relative" />
        </div>
      </div>
    </section>
  );
};
