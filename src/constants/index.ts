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
  location: "Tampico, Tamaulipas · Madero · Altamira",
};

// Site-wide info used for SEO and legal pages (TODO: confirm domain and legal details)
export const siteConfig = {
  name: "Herzago",
  url: "https://herzago.dev",
  title: "Herzago | Desarrollo web",
  description:
    "Creamos tu página web en Tampico, Madero y Altamira: landing pages, tiendas online, catálogos de productos y sistemas a medida. Cotiza gratis por WhatsApp.",
  keywords: [
    "página web Tampico",
    "páginas web en Tampico",
    "crea tu página web Tampico",
    "diseño web Tampico",
    "desarrollo web Tampico",
    "tienda online Tampico",
    "páginas web Madero",
    "páginas web Altamira",
    "desarrollo de software Tamaulipas",
    "landing page",
    "catálogo de productos",
    "aplicaciones web a medida",
  ],
  city: "Tampico",
  region: "Tamaulipas",
  areaServed: ["Tampico", "Ciudad Madero", "Altamira", "Tamaulipas"],
  legalUpdated: "4 de octubre de 2026",
};

// Navigation links; "/#id" so they also work from the legal pages
export const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#contacto", label: "Contacto" },
];

// Frequently asked questions (also published as FAQPage structured data)
export const faqs = [
  {
    question: "¿Hacen páginas web en Tampico?",
    answer:
      "Sí. Somos de Tampico, Tamaulipas, y creamos páginas web para negocios de Tampico, Ciudad Madero y Altamira. También trabajamos con clientes de todo México en línea.",
  },
  {
    question: "¿Cuánto cuesta una página web en Tampico?",
    answer:
      "Depende de lo que necesites: una landing page es la opción más accesible, y una tienda online o un sistema a medida requieren más trabajo. Te damos una cotización gratis y sin compromiso por WhatsApp.",
  },
  {
    question: "¿Cuánto tiempo tardan en crear mi página web?",
    answer:
      "Una landing page puede estar lista en pocos días. Los catálogos, tiendas online y sistemas a medida toman más tiempo según su alcance. En la cotización te decimos el tiempo exacto.",
  },
  {
    question: "¿Mi página web aparecerá en Google?",
    answer:
      "Sí. Todas nuestras páginas se entregan optimizadas para SEO: rápidas, adaptadas a celular y con la configuración necesaria para que Google las encuentre.",
  },
  {
    question: "¿Pueden hacer una tienda online para mi negocio?",
    answer:
      "Sí. Creamos tiendas online con carrito de compras, pagos en línea, control de inventario y envíos, o catálogos con pedidos por WhatsApp si prefieres algo más sencillo.",
  },
];
