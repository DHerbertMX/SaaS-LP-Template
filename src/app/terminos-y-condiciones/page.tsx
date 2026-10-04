import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contactInfo, siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio y de los servicios de ${siteConfig.name}.`,
  alternates: { canonical: "/terminos-y-condiciones" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Términos y condiciones">
      <h2>1. Aceptación</h2>
      <p>
        Al usar el sitio {siteConfig.url.replace("https://", "")} aceptas estos
        términos. Si no estás de acuerdo con ellos, te pedimos no utilizar el
        sitio.
      </p>

      <h2>2. Nuestros servicios</h2>
      <p>
        {siteConfig.name} ofrece servicios de desarrollo de software, como
        landing pages, catálogos de productos, tiendas online, sitios web
        corporativos, aplicaciones web a medida e impulso en redes sociales. La
        información del sitio es de carácter informativo y no constituye una
        oferta vinculante.
      </p>

      <h2>3. Cotizaciones y contratación</h2>
      <p>
        Cada proyecto se cotiza de forma individual. El alcance, los
        entregables, los tiempos, los precios y las condiciones de pago se
        acuerdan por escrito en una propuesta o contrato específico, que
        prevalece sobre estos términos en caso de diferencia.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, diseños, logotipos y demás contenido de este sitio son
        propiedad de {siteConfig.name} o se usan con autorización. Los nombres y
        logotipos de clientes y proyectos mostrados pertenecen a sus respectivos
        titulares. La titularidad de los desarrollos realizados para un cliente
        se define en el contrato de cada proyecto.
      </p>

      <h2>5. Plataformas de terceros</h2>
      <p>
        Algunos servicios dependen de plataformas de terceros, como Facebook,
        Instagram, TikTok, WhatsApp, proveedores de hosting o pasarelas de pago.
        No controlamos esas plataformas ni sus cambios, políticas o
        interrupciones. Los resultados en redes sociales, como seguidores,
        alcance o interacción, dependen de factores externos, por lo que no se
        garantizan cifras específicas.
      </p>

      <h2>6. Enlaces externos</h2>
      <p>
        El sitio puede contener enlaces a sitios de terceros, incluidos
        proyectos de nuestros clientes. No somos responsables de su contenido ni
        de sus prácticas de privacidad.
      </p>

      <h2>7. Responsabilidad</h2>
      <p>
        Procuramos que la información del sitio sea correcta y esté actualizada,
        pero no garantizamos que esté libre de errores. En la medida que lo
        permita la ley, {siteConfig.name} no será responsable de daños derivados
        del uso del sitio.
      </p>

      <h2>8. Privacidad</h2>
      <p>
        El tratamiento de tus datos personales se rige por nuestro{" "}
        <a href="/aviso-de-privacidad">aviso de privacidad</a>.
      </p>

      <h2>9. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.
        Cualquier controversia se someterá a los tribunales competentes de
        México.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Para dudas sobre estos términos escríbenos a{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
      </p>
    </LegalPage>
  );
}
