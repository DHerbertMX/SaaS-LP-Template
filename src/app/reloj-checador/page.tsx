import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { CheckinMock } from "@/components/CheckinMock";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import { siteConfig } from "@/constants";
import {
  checkinAppUrl,
  checkinBenefits,
  checkinComparison,
  checkinFaqs,
  checkinFeatures,
  checkinGuidePath,
  checkinKeywords,
  checkinPath,
  checkinPlans,
  checkinSteps,
} from "@/constants/checkin";

const title = "Reloj Checador Digital y Control de Asistencia en México | Checkin";
const description =
  "Reloj checador en línea: tu personal checa desde el celular o una tablet, con retardos, faltas, vacaciones y registro electrónico de jornada listos para la nómina. 14 días gratis.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: checkinKeywords,
  alternates: { canonical: checkinPath },
  openGraph: { title, description, url: checkinPath, type: "website", locale: "es_MX" },
  twitter: { card: "summary_large_image", title, description },
};

// Structured data: product, offers and FAQ
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Checkin",
  alternateName: ["Checkin reloj checador", "Checkin control de asistencia"],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Control de asistencia y reloj checador",
  operatingSystem: "Web, Android, iOS",
  url: `${siteConfig.url}${checkinPath}`,
  description,
  areaServed: { "@type": "Country", name: "México" },
  inLanguage: "es-MX",
  featureList: checkinFeatures.join(", "),
  offers: checkinPlans.map((p) => ({
    "@type": "Offer",
    name: `Plan ${p.name}`,
    price: p.price,
    priceCurrency: "MXN",
    priceSpecification: { "@type": "UnitPriceSpecification", price: p.price, priceCurrency: "MXN", unitText: "MONTH" },
  })),
  creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: checkinFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Herzago", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Reloj checador", item: `${siteConfig.url}${checkinPath}` },
  ],
};

const SectionHeading = (props: { tag?: string; title: string; description?: string }) => (
  <div className="section-heading">
    {props.tag && (
      <div className="flex justify-center">
        <div className="tag">{props.tag}</div>
      </div>
    )}
    <h2 className="section-title mt-5">{props.title}</h2>
    {props.description && <p className="section-description mt-5">{props.description}</p>}
  </div>
);

export default function RelojChecadorPage() {
  return (
    <>
      {[jsonLd, faqJsonLd, breadcrumbJsonLd].map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Header />
      <main>
        {/* Hero */}
        <section className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-12">
          <div className="container">
            <div className="mx-auto max-w-[760px] text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/checkin-horizontal.svg" alt="Checkin" width={228} height={56} className="mx-auto h-14 w-auto" />
              <div className="tag mt-4">Checkin · Control de asistencia</div>
              <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                Reloj checador digital para tu empresa
              </h1>
              <p className="mt-6 text-xl tracking-tight text-[#010D3E]">
                Tu personal checa desde el celular o una tablet. Checkin calcula retardos, faltas y horas extra, gestiona permisos y vacaciones, y cumple con el registro electrónico de jornada.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-1">
                <a href={checkinAppUrl} target="_blank" rel="noopener" className="btn btn-primary">
                  Prueba gratis 14 días
                </a>
                <a href="#precios" className="btn btn-text gap-1">
                  <span>Ver precios</span>
                  <ArrowIcon className="h-5 w-5" />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm tracking-tight text-[#010D3E]">
                {["Sin reloj checador físico", "Sin tarjeta", "Desde $299 MXN al mes", "Listo para la reforma laboral"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <CheckinMock className="mx-auto mt-16 max-w-[1000px]" />
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-24">
          <div className="container">
            <SectionHeading
              tag="Beneficios"
              title="Un reloj checador en línea que hace el trabajo por ti"
              description="Control de asistencia de personal sin hojas de cálculo ni equipos que mantener."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {checkinBenefits.map(({ icon, title, description }) => (
                <div key={title} className="card max-w-none p-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" aria-hidden width={72} height={72} className="h-16 w-16" />
                  <h3 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-xl font-bold tracking-tighter text-transparent">{title}</h3>
                  <p className="mt-3 tracking-tight text-[#010D3E]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal hook: electronic workday record */}
        <section className="bg-white pb-24">
          <div className="container">
            <div className="overflow-hidden rounded-3xl bg-black px-8 py-14 text-center text-white md:px-16 md:py-20">
              <div className="inline-flex rounded-lg border border-white/20 px-3 py-1 text-sm tracking-tight">Reforma laboral 2026</div>
              <h2 className="mt-6 text-4xl font-bold tracking-tighter md:text-6xl">El registro electrónico de jornada ya es ley</h2>
              <p className="mx-auto mt-6 max-w-[620px] text-lg tracking-tight text-white/70 md:text-xl">
                El decreto publicado en el DOF el 1 de mayo de 2026 obliga a registrar de forma electrónica el inicio y fin de la jornada de cada trabajador, con multas de 250 a 5,000 UMA. Checkin guarda cada checada sin poder borrarla y la exporta cuando la autoridad la pida.
              </p>
              <a href={checkinGuidePath} className="btn mt-8 bg-white text-black">
                Lee la guía completa
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
          <div className="container">
            <SectionHeading tag="Cómo funciona" title="Del checador a la nómina en 4 pasos" description="Configuras una vez y cada periodo se cierra en minutos." />
            <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {checkinSteps.map(({ title, description }, index) => (
                <li key={title} className="card max-w-none bg-white/70 p-8 backdrop-blur-md">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">{index + 1}</span>
                  <h3 className="mt-4 text-xl font-bold tracking-tighter text-black">{title}</h3>
                  <p className="mt-3 tracking-tight text-[#010D3E]">{description}</p>
                </li>
              ))}
            </ol>
            <ul className="mt-16 flex flex-wrap justify-center gap-3">
              {checkinFeatures.map((feature) => (
                <li key={feature} className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm tracking-tight text-[#010D3E]">{feature}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-gradient-to-b from-[#D2DCFF] to-white pb-24">
          <div className="container">
            <SectionHeading tag="Comparativa" title="Checkin vs. reloj checador tradicional" />
            <div className="mx-auto mt-12 max-w-[860px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_7px_14px_#EAEAEA]">
              <table className="w-full text-left text-sm tracking-tight md:text-base">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="p-4 md:p-6"><span className="sr-only">Concepto</span></th>
                    <th className="bg-black p-4 font-bold text-white md:p-6">Checkin</th>
                    <th className="p-4 font-bold text-black/50 md:p-6">Reloj checador tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {checkinComparison.map(({ label, checkin, others }) => (
                    <tr key={label} className="border-b border-black/5 last:border-0">
                      <th className="p-4 font-medium text-black md:p-6">{label}</th>
                      <td className="bg-black/[0.03] p-4 font-medium text-black md:p-6">{checkin}</td>
                      <td className="p-4 text-black/50 md:p-6">{others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precios" className="bg-white py-24">
          <div className="container">
            <SectionHeading tag="Precios" title="Precio del reloj checador en línea" description="Mensualidad en pesos según el tamaño de tu equipo. 14 días gratis, sin tarjeta." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {checkinPlans.map(({ name, price, features, recommended }) => (
                <div key={name} className={`card max-w-none p-8 ${recommended ? "border-black bg-black text-white" : ""}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg font-bold ${recommended ? "text-white/70" : "text-[#6F6C90]"}`}>{name}</h3>
                    {recommended && <span className="rounded-xl border border-white/20 px-3 py-1 text-sm">Recomendado</span>}
                  </div>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tighter">${price}</span>
                    <span className={`text-sm ${recommended ? "text-white/60" : "text-black/50"}`}>MXN / mes</span>
                  </p>
                  <a href={checkinAppUrl} target="_blank" rel="noopener" className={`btn mt-8 w-full ${recommended ? "bg-white text-black" : "btn-primary"}`}>Empezar prueba</a>
                  <ul className="mt-8 flex flex-col gap-4 text-sm">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3"><CheckIcon className="h-5 w-5 shrink-0" /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-black/50">Pagos seguros con Stripe. Cancela cuando quieras.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white pb-24">
          <div className="container">
            <SectionHeading title="Preguntas frecuentes sobre el reloj checador" />
            <div className="mx-auto mt-12 max-w-[760px] divide-y divide-black/10 border-y border-black/10">
              {checkinFaqs.map(({ question, answer }) => (
                <details key={question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold tracking-tight text-black">
                    {question}
                    <span aria-hidden className="text-2xl font-normal leading-none transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 tracking-tight text-[#010D3E]">{answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-8 text-center tracking-tight text-[#010D3E]">
              ¿Qué exige la ley? Lee la guía del{" "}
              <a href={checkinGuidePath} className="font-medium text-black underline">registro electrónico de jornada laboral</a>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
          <div className="container">
            <SectionHeading title="Deja el reloj checador de papel" description="Crea tu cuenta, da de alta a tu equipo y empieza a registrar la asistencia hoy." />
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <a href={checkinAppUrl} target="_blank" rel="noopener" className="btn btn-primary">Prueba gratis 14 días</a>
              <a href="/#contacto" className="btn btn-text gap-1"><span>Pide una demo</span><ArrowIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
