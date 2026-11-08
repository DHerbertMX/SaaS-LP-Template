// Timbrex product content, shared by the /timbrex pages
import dashboardImage from "@/assets/timbrex/dashboard.png";
import perfilFiscalImage from "@/assets/timbrex/perfil-fiscal.png";
import clientesImage from "@/assets/timbrex/clientes.png";
import facturasImage from "@/assets/timbrex/facturas.png";

export const timbrexAppUrl = "https://timbrex.vercel.app/";

export { dashboardImage };

// Keep in sync with features/billing/constants/plans.ts in the Timbrex repo
export const timbrexPackages = [
  { name: "Starter", stamps: 20, price: 99, support: "Soporte por email" },
  { name: "Básico", stamps: 50, price: 199, support: "Soporte por email" },
  {
    name: "Pro",
    stamps: 150,
    price: 499,
    support: "Soporte por email",
    recommended: true,
  },
  { name: "Business", stamps: 300, price: 899, support: "Soporte dedicado" },
];

export const timbrexSteps = [
  {
    title: "Configura tu perfil fiscal",
    description:
      "Da de alta tu RFC y tu Certificado de Sello Digital una sola vez. Puedes facturar desde varios RFC.",
    image: perfilFiscalImage,
    alt: "Pantalla de perfiles fiscales en Timbrex",
  },
  {
    title: "Registra a tus clientes",
    description:
      "Guarda RFC, régimen fiscal y correo de cada cliente. La próxima vez solo lo eliges de la lista.",
    image: clientesImage,
    alt: "Catálogo de clientes en Timbrex",
  },
  {
    title: "Timbra y envía",
    description:
      "Agrega tus conceptos, timbra con un clic y tu cliente recibe el XML y el PDF por correo.",
    image: facturasImage,
    alt: "Lista de facturas timbradas en Timbrex",
  },
];

export const timbrexFeatures = [
  {
    title: "CFDI 4.0",
    description: "Facturas con el formato vigente del SAT.",
  },
  {
    title: "Timbrado al instante",
    description: "Cada factura se timbra con un PAC autorizado.",
  },
  {
    title: "XML y PDF",
    description: "Descarga ambos archivos cuando los necesites.",
  },
  {
    title: "Alta con tu CSF",
    description: "Sube tu constancia y tus datos fiscales se llenan solos.",
  },
  {
    title: "Envío por correo",
    description: "Manda la factura a tu cliente desde Timbrex.",
  },
  {
    title: "Cancelación de CFDI",
    description: "Cancela facturas timbradas sin salir del sistema.",
  },
];

export const timbrexFaqs = [
  {
    question: "¿Tengo que pagar una mensualidad?",
    answer:
      "No. Compras un paquete de timbres y lo usas cuando quieras. Tus timbres no vencen y se acumulan con los que compres después.",
  },
  {
    question: "¿Qué cuenta como un timbre?",
    answer:
      "Cada factura que se timbra con éxito ante el SAT. Los borradores no gastan timbres.",
  },
  {
    question: "¿Qué necesito para empezar a facturar?",
    answer:
      "Tu RFC, tu Constancia de Situación Fiscal y tu Certificado de Sello Digital (CSD), que tramitas en el SAT con tu e.firma.",
  },
  {
    question: "¿Cómo puedo pagar?",
    answer:
      "Con tarjeta, en efectivo en tiendas OXXO o por transferencia SPEI.",
  },
];
