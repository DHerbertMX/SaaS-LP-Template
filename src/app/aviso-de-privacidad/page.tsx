import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contactInfo, siteConfig } from "@/constants";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Conoce cómo ${siteConfig.name} recaba, usa y protege tus datos personales.`,
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Aviso de privacidad">
      <h2>1. Responsable de tus datos</h2>
      <p>
        {siteConfig.name} (en adelante, &ldquo;Herzago&rdquo;), con domicilio en
        Tampico, Tamaulipas, México, es responsable del tratamiento de los datos personales que nos
        proporcionas, conforme a la Ley Federal de Protección de Datos
        Personales en Posesión de los Particulares y su normativa aplicable.
      </p>
      <p>
        Para cualquier asunto relacionado con este aviso puedes escribirnos a{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> o por
        WhatsApp al {contactInfo.whatsappLabel}.
      </p>

      <h2>2. Datos que recabamos</h2>
      <p>
        Cuando usas nuestro formulario de contacto o nos escribes directamente,
        podemos recabar:
      </p>
      <ul>
        <li>Nombre.</li>
        <li>Correo electrónico.</li>
        <li>Número de teléfono o de WhatsApp.</li>
        <li>El servicio que te interesa y la información de tu proyecto.</li>
      </ul>
      <p>
        No solicitamos datos personales sensibles. Te pedimos no compartirlos en
        tus mensajes.
      </p>

      <h2>3. Para qué usamos tus datos</h2>
      <p>Finalidades necesarias para atender tu solicitud:</p>
      <ul>
        <li>Responder tus mensajes y dudas.</li>
        <li>Preparar cotizaciones y propuestas.</li>
        <li>Dar seguimiento y prestar los servicios que contrates.</li>
        <li>Facturación y cumplimiento de obligaciones legales.</li>
      </ul>
      <p>Finalidades adicionales (puedes negarte a ellas):</p>
      <ul>
        <li>Enviarte información sobre nuevos servicios o promociones.</li>
      </ul>
      <p>
        Si no deseas que usemos tus datos para las finalidades adicionales,
        escríbenos a {contactInfo.email}. Negarte no afectará la atención de tu
        solicitud.
      </p>

      <h2>4. WhatsApp y servicios de terceros</h2>
      <p>
        Nuestro formulario no guarda información en nuestros servidores: al
        enviarlo se abre WhatsApp con tu mensaje para que tú decidas enviarlo.
        La información que compartas por WhatsApp también es tratada por Meta
        Platforms conforme a su propia política de privacidad. Nuestro sitio se
        aloja con proveedores de infraestructura que pueden registrar datos
        técnicos de acceso (como dirección IP y navegador) por motivos de
        seguridad.
      </p>

      <h2>5. Transferencias</h2>
      <p>
        No vendemos ni compartimos tus datos personales con terceros, salvo
        cuando sea necesario para prestar el servicio que contrataste (por
        ejemplo, proveedores de hosting o pasarelas de pago) o cuando lo exija
        una autoridad competente.
      </p>

      <h2>6. Derechos ARCO</h2>
      <p>
        Tienes derecho a Acceder, Rectificar y Cancelar tus datos personales,
        así como a Oponerte a su uso (derechos ARCO), y a revocar tu
        consentimiento. Para ejercerlos, envía un correo a{" "}
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> con:
      </p>
      <ul>
        <li>Tu nombre y un medio para responderte.</li>
        <li>Una copia de tu identificación oficial.</li>
        <li>La descripción clara del derecho que quieres ejercer.</li>
      </ul>
      <p>
        Te responderemos en un plazo máximo de 20 días hábiles. Si consideras
        que tu derecho no fue atendido, puedes acudir a la autoridad competente
        en materia de protección de datos personales.
      </p>

      <h2>7. Cookies y estadísticas de visitas</h2>
      <p>
        Este sitio no utiliza cookies de rastreo ni de publicidad. Para conocer
        cuántas personas lo visitan y qué tan rápido carga usamos Vercel Web
        Analytics y Vercel Speed Insights, que no utilizan cookies y generan
        estadísticas agregadas y anónimas (páginas visitadas, tiempos de carga,
        país, tipo de dispositivo y navegador) sin identificarte personalmente.
        Si en el futuro incorporamos otras herramientas, actualizaremos este
        aviso.
      </p>

      <h2>8. Cambios a este aviso</h2>
      <p>
        Podemos actualizar este aviso de privacidad. Publicaremos cualquier
        cambio en esta misma página, indicando la fecha de la última
        actualización.
      </p>
    </LegalPage>
  );
}
