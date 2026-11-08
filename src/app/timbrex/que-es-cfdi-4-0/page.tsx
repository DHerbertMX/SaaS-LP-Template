import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/constants";

const title = "¿Qué es el CFDI 4.0? Guía rápida de facturación electrónica";
const description =
  "Qué es el CFDI 4.0, qué es el timbrado, qué datos necesitas para facturar y cómo emitir una factura electrónica válida ante el SAT.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/timbrex/que-es-cfdi-4-0" },
  openGraph: {
    type: "article",
    title,
    description,
    url: "/timbrex/que-es-cfdi-4-0",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  inLanguage: "es-MX",
  datePublished: "2026-11-08",
  author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.png` },
  },
};

export default function CfdiGuidePage() {
  return (
    <LegalPage
      title="¿Qué es el CFDI 4.0?"
      lead="Guía rápida para entender la factura electrónica en México: qué es, qué datos pide y cómo se emite."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <h2>CFDI: la factura electrónica del SAT</h2>
      <p>
        CFDI significa Comprobante Fiscal Digital por Internet. Es el formato
        oficial de factura electrónica en México: un archivo XML con una
        estructura definida por el SAT. El PDF que recibes junto con él es solo
        una representación impresa; el documento con validez fiscal es el XML.
      </p>
      <p>
        La versión 4.0 es la versión vigente y la única aceptada desde abril de
        2023.
      </p>

      <h2>¿Qué cambió con el CFDI 4.0?</h2>
      <ul>
        <li>
          El nombre o razón social del receptor debe coincidir exactamente con
          su Constancia de Situación Fiscal.
        </li>
        <li>El código postal del domicilio fiscal del receptor es obligatorio.</li>
        <li>Se debe indicar el régimen fiscal del receptor.</li>
        <li>
          Se agregó el campo &ldquo;Exportación&rdquo; y el objeto de impuesto
          por concepto.
        </li>
      </ul>

      <h2>¿Qué datos necesito de mi cliente?</h2>
      <ul>
        <li>RFC.</li>
        <li>Nombre o razón social, tal como aparece en su constancia.</li>
        <li>Código postal de su domicilio fiscal.</li>
        <li>Régimen fiscal.</li>
        <li>Uso del CFDI (por ejemplo, gastos en general).</li>
      </ul>
      <p>
        La forma más segura de tener estos datos correctos es pedirle a tu
        cliente su Constancia de Situación Fiscal (CSF).
      </p>

      <h2>¿Qué es el timbrado?</h2>
      <p>
        Timbrar es certificar la factura. Un Proveedor Autorizado de
        Certificación (PAC) valida el XML, le agrega un folio fiscal (UUID) y el
        sello digital del SAT. Sin timbre, la factura no tiene validez.
      </p>

      <h2>¿Cómo emitir una factura CFDI 4.0?</h2>
      <ol className="mt-4 list-decimal pl-6 [&>li]:mt-2">
        <li>Tramita tu Certificado de Sello Digital (CSD) en el SAT con tu e.firma.</li>
        <li>Registra los datos fiscales de tu cliente.</li>
        <li>Agrega los conceptos, cantidades e impuestos.</li>
        <li>Timbra la factura con un PAC.</li>
        <li>Envía el XML y el PDF a tu cliente.</li>
      </ol>
      <p>
        Con <a href="/timbrex">Timbrex</a> haces todo esto en un solo lugar:
        subes tu constancia, guardas a tus clientes, emites y timbras la factura
        y la envías por correo. Revisa los{" "}
        <a href="/timbrex/precios">paquetes de timbres</a>.
      </p>
    </LegalPage>
  );
}
