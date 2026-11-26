"use client";

// Home section promoting Mimika, Herzago's TTS bot for streamers (Twitch, Kick, TikTok)
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import { mimikaAppUrl, mimikaPoints, mimikaPrice, mimikaTrialDays } from "@/constants/mimika";

// Real screenshot inside a browser window frame (dark, to match Mimika's look)
const Frame = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d10] shadow-[0_30px_80px_-20px_rgba(109,40,217,0.5)] ${className}`}>
    <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#171a20] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
      <span className="mx-auto hidden rounded-md bg-black/30 px-3 py-0.5 text-xs text-white/40 md:block">mimika.herzago.com</span>
    </div>
    <img src={src} alt={alt} className="block w-full" />
  </div>
);

export const MimikaShowcase = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section id="mimika" ref={ref} className="overflow-x-clip bg-gradient-to-b from-[#0b0d10] to-[#1a0b2e] py-24 text-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag border-white/20 text-white">Nuevo producto · Mimika</div>
          </div>
          <h2 className="section-title mt-5 bg-gradient-to-r from-[#ff2fa0] via-[#b3108f] to-[#8a1fe0] bg-clip-text text-transparent">
            Dale voz a tu chat en vivo
          </h2>
          <p className="section-description mt-5 text-white/70">
            El bot de voces con IA para streamers: tu comunidad escribe en el chat y Mimika lo lee con la voz de sus personajes favoritos.
          </p>
        </div>

        <div className="relative mt-12 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.div style={{ translateY }} className="relative">
            <Frame src="/mimika/voces-publica.jpg" alt="Página pública de voces de Mimika: constructor de mensajes y catálogo de voces de IA" />
            <Frame
              src="/mimika/suscripcion-referido.jpg"
              alt="Suscripción de Mimika con código de referido y descuento"
              className="absolute -bottom-10 -right-6 hidden w-56 md:block"
            />
          </motion.div>

          <div>
            <ul className="flex flex-col gap-4">
              {mimikaPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-lg tracking-tight text-white/90">
                  <CheckIcon className="h-5 w-5 shrink-0 text-[#ff2fa0]" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 tracking-tight text-white/70">
              ${mimikaPrice} USD al mes, con {mimikaTrialDays} días de prueba gratis. Invita amigos y gana descuento.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-1">
              <a href={mimikaAppUrl} target="_blank" rel="noopener" className="btn btn-primary bg-gradient-to-r from-[#d60f86] to-[#6d28d9]">
                Probar Mimika gratis
              </a>
              <a href={mimikaAppUrl} target="_blank" rel="noopener" className="btn btn-text gap-1 text-white">
                <span>Ver la plataforma</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
