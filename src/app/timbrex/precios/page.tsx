import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { TimbrexPricing } from "@/sections/TimbrexPricing";
import { timbrexFaqs } from "@/constants/timbrex";

const title = "Precios de Timbrex: paquetes de timbres CFDI";
const description =
  "Compra paquetes de timbres para facturar CFDI 4.0 con Timbrex desde $99 MXN. Sin mensualidades: tus timbres no vencen y se acumulan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/timbrex/precios" },
  openGraph: { title, description, url: "/timbrex/precios" },
};

export default function TimbrexPricingPage() {
  return (
    <>
      <Header />
      <main>
        <TimbrexPricing headingLevel="h1" />
        <section className="bg-white pb-24">
          <div className="container max-w-[760px] tracking-tight text-[#010D3E]">
            <h2 className="text-2xl font-bold tracking-tighter text-black">
              ¿Por qué paquetes y no una suscripción?
            </h2>
            <ul className="mt-4 list-disc pl-6 leading-7 [&>li]:mt-2">
              <li>
                <strong>Sin compromiso:</strong> compras cuando lo necesitas.
              </li>
              <li>
                <strong>Timbres que no vencen:</strong> si un mes facturas
                poco, no pierdes nada.
              </li>
              <li>
                <strong>Nada que cancelar:</strong> no hay renovaciones
                automáticas.
              </li>
            </ul>
            {timbrexFaqs.map(({ question, answer }) => (
              <div key={question}>
                <h2 className="mt-12 text-2xl font-bold tracking-tighter text-black">
                  {question}
                </h2>
                <p className="mt-4 leading-7">{answer}</p>
              </div>
            ))}
            <p className="mt-12 leading-7">
              Conoce todas las{" "}
              <a href="/timbrex" className="font-medium text-black underline">
                funciones de Timbrex
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
