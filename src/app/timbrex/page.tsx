import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { TimbrexPricing } from "@/sections/TimbrexPricing";
import { BrowserFrame } from "@/components/BrowserFrame";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import { siteConfig } from "@/constants";
import {
  dashboardImage,
  timbrexAppUrl,
  timbrexAudiences,
  timbrexBenefits,
  timbrexComparison,
  timbrexFaqs,
  timbrexFeatures,
  timbrexKeywords,
  timbrexSteps,
} from "@/constants/timbrex";

const title = "Timbrex: facturar nunca fue tan sencillo | Facturación CFDI 4.0";
const description =
  "Emite facturas CFDI 4.0 en segundos, sin mensualidades y con timbres que no caducan. Ideal para freelancers, programadores y pequeños negocios. Desde $99 MXN.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: timbrexKeywords,
  alternates: { canonical: "/timbrex" },
  openGraph: { title, description, url: "/timbrex" },
  // Without this, Twitter/X inherits the agency title from the root layout
  twitter: { card: "summary_large_image", title, description },
};

// Structured data describing Timbrex as a software product
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Timbrex",
  alternateName: "Timbrex Facturación Electrónica",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: `${siteConfig.url}/timbrex`,
  description,
  areaServed: { "@type": "Country", name: "México" },
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

// FAQ structured data (Google retired FAQ rich results in May 2026; kept for machine readability)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: timbrexFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

// Line icons (24x24, stroke-based), same style as the Services section
const icons: Record<string, React.ReactNode> = {
  bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  wallet: (
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  ),
  history: (
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8m0-5v5h5m4-1v5l4 2" />
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Zm-11-1 2 2 4-4" />
  ),
};

const Icon = (props: { name: string }) => (
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
      {icons[props.name]}
    </svg>
  </div>
);

const SectionHeading = (props: {
  tag?: string;
  title: string;
  description?: string;
}) => (
  <div className="section-heading">
    {props.tag && (
      <div className="flex justify-center">
        <div className="tag">{props.tag}</div>
      </div>
    )}
    <h2 className="section-title mt-5">{props.title}</h2>
    {props.description && (
      <p className="section-description mt-5">{props.description}</p>
    )}
  </div>
);

export default function TimbrexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-12">
          <div className="container">
            <div className="mx-auto max-w-[720px] text-center">
              <Image
                src="/brand/timbrex-horizontal.svg"
                alt="Timbrex"
                width={228}
                height={56}
                className="mx-auto h-14 w-auto"
                priority
              />
              <div className="tag mt-8">Facturación electrónica CFDI 4.0</div>
              <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                Facturación electrónica sin mensualidades
              </h1>
              <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
                Facturar nunca fue tan sencillo: emite tus CFDI 4.0 en segundos
                y paga solo los timbres que usas. No caducan.
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
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm tracking-tight text-[#010D3E]">
                {["3 timbres gratis", "Sin mensualidades", "Timbres que no caducan", "Desde $99 MXN"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <BrowserFrame
              src={dashboardImage}
              alt="Dashboard de Timbrex con timbres disponibles y facturas recientes"
              priority
              className="mx-auto mt-16 max-w-[1000px]"
            />
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-24">
          <div className="container">
            <SectionHeading
              tag="Beneficios"
              title="Facturar sin complicaciones"
              description="Todo lo que necesitas para emitir tus facturas, y nada que no."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timbrexBenefits.map(({ icon, title, description }) => (
                <div key={title} className="card max-w-none p-8">
                  <Icon name={icon} />
                  <h3 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-xl font-bold tracking-tighter text-transparent">
                    {title}
                  </h3>
                  <p className="mt-3 tracking-tight text-[#010D3E]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stamps never expire: the main differentiator */}
        <section className="bg-white pb-24">
          <div className="container">
            <div className="overflow-hidden rounded-3xl bg-black px-8 py-14 text-center text-white md:px-16 md:py-20">
              <div className="inline-flex rounded-lg border border-white/20 px-3 py-1 text-sm tracking-tight">
                Lo que nos hace diferentes
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tighter md:text-6xl">
                Tus timbres no caducan
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] text-lg tracking-tight text-white/70 md:text-xl">
                Compras un paquete y lo usas a tu ritmo. Si un mes no facturas,
                no pierdes nada: tus timbres siguen ahí y se suman a los que
                compres después.
              </p>
              <a
                href="#precios"
                className="btn mt-8 bg-white text-black"
              >
                Ver paquetes
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
          <div className="container">
            <SectionHeading
              tag="Cómo funciona"
              title="Tu factura en 3 pasos"
              description="Configuras una vez y después facturar te toma unos segundos."
            />
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
            <ul className="mt-20 flex flex-wrap justify-center gap-3">
              {timbrexFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm tracking-tight text-[#010D3E]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-[#D2DCFF] pb-24">
          <div className="container">
            <SectionHeading
              tag="¿Para quién es?"
              title="¿Solo facturas unas cuantas veces al mes?"
              description="Timbrex es para ti: pagas solo las facturas que emites, sin contratos ni complicaciones."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timbrexAudiences.map(({ title, example }) => (
                <div
                  key={title}
                  className="card max-w-none bg-white/70 p-8 backdrop-blur-md"
                >
                  <h3 className="text-xl font-bold tracking-tighter text-black">
                    {title}
                  </h3>
                  <p className="mt-3 tracking-tight text-[#010D3E]">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison with subscription services */}
        <section className="bg-gradient-to-b from-[#D2DCFF] to-white pb-24">
          <div className="container">
            <SectionHeading
              tag="Comparativa"
              title="Timbrex vs. sistemas con mensualidad"
            />
            <div className="mx-auto mt-12 max-w-[860px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_7px_14px_#EAEAEA]">
              <table className="w-full text-left text-sm tracking-tight md:text-base">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="p-4 md:p-6">
                      <span className="sr-only">Concepto</span>
                    </th>
                    <th className="bg-black p-4 font-bold text-white md:p-6">
                      Timbrex
                    </th>
                    <th className="p-4 font-bold text-black/50 md:p-6">
                      Con mensualidad
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {timbrexComparison.map(({ label, timbrex, others }) => (
                    <tr
                      key={label}
                      className="border-b border-black/5 last:border-0"
                    >
                      <th className="p-4 font-medium text-black md:p-6">
                        {label}
                      </th>
                      <td className="bg-black/[0.03] p-4 font-medium text-black md:p-6">
                        {timbrex}
                      </td>
                      <td className="p-4 text-black/50 md:p-6">{others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <TimbrexPricing />

        {/* FAQ */}
        <section className="bg-white pb-24">
          <div className="container">
            <SectionHeading title="Preguntas frecuentes" />
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
            <SectionHeading
              title="Tu primera factura, en segundos"
              description="Crea tu cuenta, compra solo los timbres que necesitas y factura cuando quieras."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-2">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
