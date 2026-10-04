// Import necessary assets
import weekendmxImage from "@/assets/projects/weekendmx.png";
import escuelaParaPadresImage from "@/assets/projects/escuelaparapadres.png";
import petxImage from "@/assets/projects/petx.png";

// Testimonials
export const testimonials = [
  {
    text: "Trabajar con Herzago.dev fue una excelente experiencia. Desde el inicio entendió lo que buscábamos para WeekendMX y logró convertir la idea en una página moderna, funcional y profesional. Estamos muy contentos con el resultado y definitivamente recomendamos su trabajo.",
    name: "Pedro Muñoz",
    company: "WeekendMX",
  },
  {
    text: "El trabajo realizado por Herzago ha sido excelente; sabe plasmar de manera óptima las necesidades de sus clientes, además de tener mucha atención a los detalles, trato cordial, tiempos ideales de entrega, dar sugerencias de mejora, etc. Logra hacerlo de la forma más sencilla para los usuarios que no somos expertos en tecnologías, sin descuidar lo estético y eficiente de la plataforma. Además de la versatilidad de áreas para las que se necesite, en mi caso, un ámbito escolar.",
    name: "Marisela López",
    company: "Psicóloga Orientadora, Colegio de Bachilleres",
  },
];

// Services
export const services = [
  {
    icon: "rocket",
    title: "Landing pages",
    description:
      "Páginas de aterrizaje rápidas y atractivas, diseñadas para convertir visitantes en clientes.",
    features: [
      "Diseño a medida y responsive",
      "Optimizadas para SEO y velocidad",
      "Formularios y WhatsApp integrados",
      "Animaciones modernas",
    ],
  },
  {
    icon: "catalog",
    title: "Catálogos de productos",
    description:
      "Muestra tus productos de forma profesional, con búsqueda, filtros y categorías.",
    features: [
      "Administrador para tus productos",
      "Búsqueda y filtros por categoría",
      "Galería de imágenes por producto",
      "Pedidos por WhatsApp o formulario",
    ],
  },
  {
    icon: "cart",
    title: "Tiendas online",
    description:
      "E-commerce completo para vender 24/7, con pagos en línea y gestión de pedidos.",
    features: [
      "Carrito de compras y checkout",
      "Pasarelas de pago integradas",
      "Control de inventario y pedidos",
      "Cupones, envíos y reportes",
    ],
  },
  {
    icon: "building",
    title: "Sitios web corporativos",
    description:
      "Presencia digital sólida para tu empresa, con información clara y fácil de actualizar.",
    features: [
      "Secciones de servicios y equipo",
      "Blog y noticias",
      "Panel para editar contenidos",
      "Dominio, hosting y correos",
    ],
  },
  {
    icon: "code",
    title: "Aplicaciones web a medida",
    description:
      "Sistemas personalizados para automatizar los procesos de tu negocio.",
    features: [
      "Sistemas de reservas y citas",
      "CRM, inventarios y facturación",
      "Paneles administrativos",
      "Integración con APIs",
    ],
  },
  {
    icon: "social",
    title: "Impulso en redes sociales",
    description:
      "Hacemos crecer la presencia de tu marca en Facebook, Instagram y TikTok.",
    features: [
      "Crecimiento de seguidores y alcance",
      "Más interacción en tus publicaciones",
      "Facebook, Instagram y TikTok",
      "Reportes de resultados",
    ],
  },
];

// Projects

export const projects = [
  {
    title: "WeekendMX",
    category: "Sitio web y blog",
    description:
      "Portal de conciertos en México con eventos, venta de boletos, blog, galería y modo oscuro.",
    url: "https://www.weekendmx.com/",
    image: weekendmxImage,
  },
  {
    title: "Escuela para Padres",
    category: "Aplicación web",
    description:
      "Portal de registro donde los padres eligen plantel, consultan talleres y reservan su lugar, con acceso para maestros.",
    url: "https://escuelaparapadres.vercel.app/",
    image: escuelaParaPadresImage,
  },
  {
    title: "Pet X",
    category: "Sitio web y catálogo",
    description:
      "Sitio para clínica veterinaria con catálogo de productos y reservación de citas en línea.",
    url: "https://petx-ten.vercel.app/",
    image: petxImage,
  },
];

// Contact info (TODO: replace with the real Herzago contact details)
export const contactInfo = {
  whatsapp: "528334437517", // international format, digits only
  whatsappLabel: "+52 833 443 7517",
  email: "contacto@herzago.dev",
  location: "México · Trabajamos de forma remota",
};

// Site-wide info used for SEO and legal pages (TODO: confirm domain and legal details)
export const siteConfig = {
  name: "Herzago",
  url: "https://herzago.dev",
  title: "Herzago | Desarrollo de software, páginas web y tiendas online",
  description:
    "Creamos landing pages, catálogos de productos, tiendas online, sitios corporativos y aplicaciones web a medida para impulsar tu negocio en México.",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "páginas web",
    "landing page",
    "tienda online",
    "e-commerce",
    "catálogo de productos",
    "aplicaciones web a medida",
    "sitios web corporativos",
    "redes sociales",
    "agencia de desarrollo México",
  ],
  legalUpdated: "4 de octubre de 2026",
};

// Navigation links; "/#id" so they also work from the legal pages
export const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#contacto", label: "Contacto" },
];
