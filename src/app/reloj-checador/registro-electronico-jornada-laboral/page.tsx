import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/constants";
import { checkinAppUrl, checkinGuidePath, checkinPath } from "@/constants/checkin";

const title = "Registro Electrónico de Jornada Laboral en México | Reloj Checador";
const description =
  "Qué exige la reforma a la Ley Federal del Trabajo publicada en el DOF el 1 de mayo de 2026: registro electrónico de jornada, multas, calendario de 40 horas, horas extra y cómo cumplir con un reloj checador digital.";
const source = "https://www.diputados.gob.mx/LeyesBiblio/ref/lft/LFT_ref52_01may26.pdf";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "registro electrónico de jornada laboral",
    "registro electrónico de jornada laboral México",
    "reloj checador",
    "reloj checador digital",
    "reforma laboral 40 horas",
    "artículo 132 fracción XXXIV",
    "control de asistencia LFT",
    "jornada laboral 2027",
  ],
  alternates: { canonical: checkinGuidePath },
  openGraph: { type: "article", title, description, url: checkinGuidePath, locale: "es_MX" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  { q: "¿Desde cuándo es obligatorio el registro electrónico de jornada?", a: "El decreto entró en vigor el 1 de mayo de 2026 y agregó la obligación al artículo 132, fracción XXXIV. Las disposiciones de carácter general de la STPS, que definen a quién aplica y las excepciones, entran en vigor el 1 de enero de 2027." },
  { q: "¿Qué datos debe tener el registro?", a: "La ley pide registrar de manera electrónica la jornada de cada persona trabajadora, incluyendo el horario de inicio y de finalización, y entregarlo a la autoridad cuando lo requiera." },
  { q: "¿Cuál es la multa por no llevar el registro?", a: "De 250 a 5,000 Unidades de Medida y Actualización (UMA), según el artículo 994, fracción IV Bis." },
  { q: "¿Sirve un reloj checador digital?", a: "Sí, siempre que guarde electrónicamente el inicio y fin de la jornada de cada trabajador y permita entregar los registros. Checkin lo hace desde el celular o una tablet, sin poder borrar las checadas originales." },
  { q: "¿Cuántas horas extra se permiten?", a: "El artículo 66 fija un máximo que crece de forma gradual: 9 horas semanales en 2026 y 2027, 10 en 2028, 11 en 2029 y 12 en 2030, en hasta cuatro horas diarias y un máximo de cuatro días por semana." },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: "es-MX",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: `${siteConfig.url}${checkinGuidePath}`,
  citation: source,
  about: ["Registro electrónico de jornada laboral", "Reloj checador", "Ley Federal del Trabajo"],
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: { "@type": "Organization", name: siteConfig.name, logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` } },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Herzago", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Reloj checador", item: `${siteConfig.url}${checkinPath}` },
    { "@type": "ListItem", position: 3, name: "Registro electrónico de jornada laboral", item: `${siteConfig.url}${checkinGuidePath}` },
  ],
};

const Table = (props: { head: [string, string]; rows: [string, string][] }) => (
  <table className="mt-4 w-full max-w-sm border border-black/10 text-left text-sm">
    <thead className="bg-[#F5F7FF]"><tr>{props.head.map((h) => <th key={h} className="px-4 py-2">{h}</th>)}</tr></thead>
    <tbody>{props.rows.map(([a, b]) => <tr key={a} className="border-t border-black/5"><td className="px-4 py-2">{a}</td><td className="px-4 py-2">{b}</td></tr>)}</tbody>
  </table>
);

export default function RegistroJornadaPage() {
  return (
    <LegalPage
      title="Registro electrónico de jornada laboral en México"
      lead="Qué exige la reforma a la Ley Federal del Trabajo, desde cuándo, qué multas contempla y cómo cumplir con un reloj checador digital."
    >
      {[articleJsonLd, faqJsonLd, breadcrumbJsonLd].map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <p className="text-sm text-black/50">
        Fuente: decreto publicado en el Diario Oficial de la Federación el 1 de mayo de 2026 (<a href={source} rel="noopener" target="_blank">texto oficial, Cámara de Diputados</a>). Actualizado el 21 de noviembre de 2026. Este artículo es informativo y no sustituye asesoría legal.
      </p>

      <h2>Qué es el registro electrónico de jornada</h2>
      <p>
        La reforma en materia de reducción de la jornada laboral agregó la fracción XXXIV al artículo 132 de la Ley Federal del Trabajo. Obliga a la persona empleadora a registrar de manera electrónica la jornada laboral de cada persona trabajadora, incluyendo el horario de inicio y de finalización, y a proporcionarlo a la autoridad cuando se le requiera.
      </p>
      <p>
        La Secretaría del Trabajo y Previsión Social (STPS) expedirá disposiciones de carácter general que determinen el ámbito de aplicación y las excepciones. Además, el contenido del registro electrónico hará prueba plena si se acredita que fue acordado entre la persona trabajadora y la empleadora.
      </p>

      <h2>Fechas clave</h2>
      <ul>
        <li><strong>1 de mayo de 2026:</strong> entra en vigor el decreto.</li>
        <li><strong>1 de mayo al 31 de diciembre de 2026:</strong> periodo para que trabajadores y empleadores ajusten sus procesos.</li>
        <li><strong>1 de enero de 2027:</strong> entran en vigor las disposiciones de la STPS sobre el registro electrónico.</li>
      </ul>

      <h2>Multas por no llevar el registro</h2>
      <p>
        El artículo 994, fracción IV Bis, sanciona con <strong>de 250 a 5,000 UMA</strong> a la persona empleadora obligada que no cumpla con el registro electrónico de jornada.
      </p>

      <h2>Jornada de 40 horas: calendario de reducción</h2>
      <p>El artículo 59 fija la jornada ordinaria máxima en cuarenta horas semanales, que se alcanzan de forma gradual a partir del 1 de enero de cada año:</p>
      <Table head={["Año", "Horas por semana"]} rows={[["2026", "48"], ["2027", "46"], ["2028", "44"], ["2029", "42"], ["2030", "40"]]} />
      <p>La reducción no puede implicar la disminución de sueldos, salarios o prestaciones.</p>

      <h2>Horas extra con la reforma</h2>
      <p>
        El artículo 66 limita el tiempo extraordinario, pagado al doble, a un máximo semanal que también crece de forma gradual, distribuido en hasta cuatro horas diarias y en un máximo de cuatro días por semana. Lo que exceda ese límite no puede pasar de cuatro horas a la semana y se paga al triple (doscientos por ciento más). La suma de jornada ordinaria y extraordinaria nunca puede superar doce horas al día.
      </p>
      <Table head={["Año", "Horas extra por semana"]} rows={[["2026", "9"], ["2027", "9"], ["2028", "10"], ["2029", "11"], ["2030", "12"]]} />

      <h2>Del reloj checador tradicional al registro electrónico</h2>
      <p>
        Las listas en papel y las tarjetas no son un registro electrónico. Un reloj checador digital resuelve la obligación y, de paso, el trabajo de cada quincena: calcula retardos y faltas, separa las horas extra y deja todo listo para la nómina. Al elegir uno, revisa que:
      </p>
      <ul>
        <li>Guarde la hora exacta de entrada y salida de cada trabajador, por fecha.</li>
        <li>No permita borrar ni alterar las checadas originales; las correcciones deben quedar registradas con motivo y responsable.</li>
        <li>Permita exportar los registros de un periodo para entregarlos a la autoridad.</li>
        <li>Funcione donde trabaja tu equipo: celular, tablet en sucursal o trabajo remoto.</li>
        <li>Cuide los datos personales: la ubicación solo con consentimiento y nunca con rastreo continuo.</li>
      </ul>

      <h2>Cómo cumple Checkin</h2>
      <ul>
        <li>Cada checada se guarda con fecha, hora, origen (app, kiosco o manual) y dispositivo.</li>
        <li>Las checadas son inmutables: una corrección crea un registro nuevo con motivo, y la original se conserva en la bitácora.</li>
        <li>El empleado checa desde su celular, con geocerca opcional, o en un kiosco con número de empleado y PIN.</li>
        <li>Al cerrar cada periodo descargas Excel o CSV con días trabajados, faltas, retardos y horas extra.</li>
      </ul>
      <p>
        <a href={checkinPath}>Conoce Checkin, el reloj checador digital</a> o <a href={checkinAppUrl} target="_blank" rel="noopener">pruébalo gratis 14 días</a>.
      </p>

      <h2>Preguntas frecuentes</h2>
      {faqs.map(({ q, a }) => (
        <div key={q}>
          <h3 className="mt-6 text-lg font-bold tracking-tight text-black">{q}</h3>
          <p>{a}</p>
        </div>
      ))}
    </LegalPage>
  );
}
