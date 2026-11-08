// Timbrex product content, shared by the /timbrex pages
import dashboardImage from "@/assets/timbrex/dashboard.png";
import perfilFiscalImage from "@/assets/timbrex/perfil-fiscal.png";
import clientesImage from "@/assets/timbrex/clientes.png";
import facturasImage from "@/assets/timbrex/facturas.png";

export const timbrexAppUrl = "https://timbrex.vercel.app/";

export { dashboardImage };

// Search terms the /timbrex pages target
export const timbrexKeywords = [
  "Timbrex",
  "Timbrex facturación",
  "facturación electrónica",
  "facturación electrónica CFDI 4.0",
  "sistema de facturación",
  "facturar en línea",
  "timbres CFDI",
  "factura electrónica sin mensualidad",
  "facturación para freelancers",
  "facturación para pequeños negocios",
];

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

// Main selling points, in the order they appear on /timbrex
export const timbrexBenefits = [
  {
    icon: "bolt",
    title: "Factura en segundos",
    description:
      "Eliges a tu cliente, agregas tus conceptos y timbras. Sin pasos de más.",
  },
  {
    icon: "wallet",
    title: "Paga solo lo que necesitas",
    description:
      "Sin mensualidades ni planes forzosos. Compras timbres cuando los ocupas.",
  },
  {
    icon: "history",
    title: "Tu historial siempre disponible",
    description:
      "Consulta y descarga el XML y el PDF de cualquier factura cuando quieras.",
  },
  {
    icon: "shield",
    title: "Pagos seguros con Stripe",
    description:
      "Paga con tarjeta, en efectivo en OXXO o por transferencia, con la seguridad de Stripe.",
  },
];

// Who Timbrex is for; scenarios, not testimonials
export const timbrexAudiences = [
  {
    title: "Freelancers",
    example: "Facturas a tus clientes al terminar cada proyecto.",
  },
  {
    title: "Programadores",
    example: "Cobras por horas o por iguala y solo emites unas cuantas facturas al mes.",
  },
  {
    title: "Cafeterías y restaurantes",
    example: "De vez en cuando un cliente te pide factura de su consumo.",
  },
  {
    title: "Pequeños comercios",
    example: "Vendes al público y solo algunos clientes necesitan factura.",
  },
];

// Timbrex vs a typical monthly-subscription invoicing service
export const timbrexComparison = [
  { label: "Pago mensual obligatorio", timbrex: "No", others: "Sí" },
  {
    label: "Timbres que no usas",
    timbrex: "Se quedan en tu cuenta",
    others: "Suelen perderse al cerrar el mes",
  },
  {
    label: "Meses en los que no facturas",
    timbrex: "No pagas nada",
    others: "Pagas igual",
  },
  {
    label: "Renovación automática",
    timbrex: "No hay nada que cancelar",
    others: "Hay que cancelarla",
  },
  { label: "Para empezar", timbrex: "Desde $99 MXN, una vez", others: "Un cobro cada mes" },
];

// Smaller capabilities listed under the steps
export const timbrexFeatures = [
  "CFDI 4.0",
  "Timbrado con PAC autorizado",
  "XML y PDF",
  "Alta con tu CSF",
  "Envío por correo",
  "Cancelación de CFDI",
  "Clientes ilimitados",
];

export const timbrexFaqs = [
  {
    question: "¿Los timbres caducan?",
    answer:
      "No. Tus timbres no caducan y se acumulan con los que compres después. Si un mes no facturas, no pierdes nada.",
  },
  {
    question: "¿Tengo que pagar una mensualidad?",
    answer:
      "No. Compras un paquete de timbres una sola vez y lo usas cuando quieras.",
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
      "Con tarjeta, en efectivo en tiendas OXXO o por transferencia bancaria. Los pagos se procesan de forma segura con Stripe.",
  },
];
