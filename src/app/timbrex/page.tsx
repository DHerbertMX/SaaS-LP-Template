import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { TimbrexPricing } from "@/sections/TimbrexPricing";
import { BrowserFrame } from "@/components/BrowserFrame";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import timbrexLogo from "@/assets/timbrexlogo.png";
import { siteConfig } from "@/constants";
import {
  dashboardImage,
  timbrexAppUrl,
  timbrexFaqs,
  timbrexFeatures,
  timbrexSteps,
} from "@/constants/timbrex";

const title = "Timbrex: facturación electrónica CFDI 4.0 rápida y fácil";
const description =
  "Factura en segundos con Timbrex: emite, timbra y envía facturas CFDI 4.0 ante el SAT sin complicaciones. Sin mensualidades, paquetes desde $99 MXN.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/timbrex" },
  openGraph: { title, description, url: "/timbrex" },
};

// Structured data describing Timbrex as a software product
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Timbrex",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: timbrexAppUrl,
  description,
  inLanguage: "es-MX",
  screenshot: `${siteConfig.url}${dashboardImage.src}`,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "MXN",
    lowPrice: 99,
    highPrice: 899,
  },
  creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
};

export default function TimbrexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-12">
          <div className="container">
            <div className="mx-auto max-w-[720px] text-center">
              <Image
                src={timbrexLogo}
                alt="Timbrex"
                className="mx-auto h-14 w-auto"
                priority
              />
              <div className="tag mt-8">Facturación electrónica CFDI 4.0</div>
              <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                Factura en segundos, sin complicaciones
              </h1>
              <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
                Emite, timbra y envía tus facturas ante el SAT desde cualquier
                dispositivo. Sin mensualidades: pagas solo los timbres que usas.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-1">
                <a
                  href={timbrexAppUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                >
                  Empieza a facturar
                </a>
                <a href="#precios" className="btn btn-text gap-1">
                  <span>Ver precios</span>
                  <ArrowIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
            <BrowserFrame
              src={dashboardImage}
              alt="Dashboard de Timbrex con timbres disponibles y facturas recientes"
              priority
              className="mx-auto mt-16 max-w-[1000px]"
            />
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
          <div className="container">
            <div className="section-heading">
              <div className="flex justify-center">
                <div className="tag">Cómo funciona</div>
              </div>
              <h2 className="section-title mt-5">Tu factura en 3 pasos</h2>
              <p className="section-description mt-5">
                Configuras una vez y después facturar te toma menos de un
                minuto.
              </p>
            </div>
            <div className="mt-16 flex flex-col gap-20">
              {timbrexSteps.map(({ title, description, image, alt }, index) => (
                <div
                  key={title}
                  className="grid items-center gap-10 md:grid-cols-2"
                >
                  <div className={index % 2 ? "md:order-2" : ""}>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-4 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-3xl font-bold tracking-tighter text-transparent">
                      {title}
                    </h3>
                    <p className="mt-3 text-lg tracking-tight text-[#010D3E]">
                      {description}
                    </p>
                  </div>
                  <BrowserFrame src={image} alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[#D2DCFF] pb-24">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Todo lo que necesitas para facturar</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {timbrexFeatures.map(({ title, description }) => (
                <div
                  key={title}
                  className="card max-w-none bg-white/70 p-8 backdrop-blur-md"
                >
                  <CheckIcon className="h-6 w-6" />
                  <h3 className="mt-4 text-xl font-bold tracking-tighter text-black">
                    {title}
                  </h3>
                  <p className="mt-2 tracking-tight text-[#010D3E]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TimbrexPricing />

        {/* FAQ */}
        <section className="bg-white pb-24">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Preguntas frecuentes</h2>
            </div>
            <div className="mx-auto mt-12 max-w-[760px] divide-y divide-black/10 border-y border-black/10">
              {timbrexFaqs.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold tracking-tight text-black">
                    {question}
                    <span
                      aria-hidden
                      className="text-2xl font-normal leading-none transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 tracking-tight text-[#010D3E]">{answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center tracking-tight text-[#010D3E]">
              ¿Nuevo en la facturación electrónica? Lee{" "}
              <a
                href="/timbrex/que-es-cfdi-4-0"
                className="font-medium text-black underline"
              >
                qué es el CFDI 4.0
              </a>
              .
            </p>
          </div>
        </section>

        {/* Final call to action */}
        <section className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Empieza a facturar hoy</h2>
              <p className="section-description mt-5">
                Crea tu cuenta en minutos y emite tu primera factura CFDI 4.0.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <a
                href={timbrexAppUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Crear mi cuenta
              </a>
              <a href="/#contacto" className="btn btn-text gap-1">
                <span>¿Necesitas un sistema a medida?</span>
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
