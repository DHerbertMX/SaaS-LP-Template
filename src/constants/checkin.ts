// Checkin product content, shared by the /reloj-checador pages and the home section
export const checkinAppUrl = "https://checkin.herzago.com/registro";
export const checkinPath = "/reloj-checador";
export const checkinGuidePath = "/reloj-checador/registro-electronico-jornada-laboral";

// Search terms the Checkin pages target (commercial first, then long-tail)
export const checkinKeywords = [
  "reloj checador",
  "reloj checador digital",
  "reloj checador en línea",
  "reloj checador para empresas",
  "reloj checador en la nube",
  "app para checar asistencia",
  "checador de asistencia",
  "control de asistencia de personal",
  "software de control de asistencia",
  "registro electrónico de jornada laboral",
  "registro de entrada y salida de empleados",
  "control de asistencia con geolocalización",
  "reloj checador México",
  "Checkin",
];

// Keep in sync with shared/config/plans.ts in the Checkin repo (prices in MXN per month)
export const checkinPlans = [
  { name: "Básico", price: 299, features: ["Hasta 15 empleados", "1 sucursal", "App del empleado y kiosco", "Aprobaciones"] },
  { name: "Profesional", price: 599, recommended: true, features: ["Hasta 60 empleados", "5 sucursales", "Geocerca", "Aprobaciones en 2 niveles"] },
  { name: "Empresa", price: 999, features: ["Hasta 200 empleados", "Sucursales ilimitadas", "Geocerca", "Aprobaciones en 2 niveles"] },
];

export const checkinBenefits = [
  { icon: "/checkin/3d-mobile.webp", title: "Checa desde el celular o una tablet", description: "Sin comprar relojes checadores: el empleado checa en su teléfono o en un kiosco con número y PIN." },
  { icon: "/checkin/3d-clock.webp", title: "Retardos y faltas automáticos", description: "Turnos con tolerancia, nocturnos y descansos. Cada día se calcula solo." },
  { icon: "/checkin/3d-calender.webp", title: "Permisos y vacaciones", description: "Solicitudes y aprobaciones en la app, con el saldo de vacaciones según la LFT." },
  { icon: "/checkin/3d-file-text.webp", title: "Listo para la nómina", description: "Cierra el periodo y descarga Excel o CSV para tu sistema de nómina." },
];

export const checkinSteps = [
  { title: "Da de alta a tu equipo", description: "Crea tus sucursales, importa a tu personal desde Excel y asígnale su turno." },
  { title: "Tu gente checa", description: "Desde su celular, con geocerca opcional, o en la tablet de la entrada con número y PIN." },
  { title: "Revisa y aprueba", description: "Ves en vivo quién llegó, quién va tarde y quién falta; apruebas incidencias en un clic." },
  { title: "Cierra y exporta", description: "Al cerrar el periodo se bloquean los cambios y descargas el archivo para tu nómina." },
];

export const checkinFeatures = [
  "Registro electrónico de jornada", "Kiosco con PIN y foto", "Geocerca con consentimiento", "Turnos nocturnos y rotaciones",
  "Vacaciones según la LFT", "Días festivos precargados", "Varias sucursales", "Bitácora de cambios", "Exportación a nómina",
]

export const checkinComparison = [
  { label: "Equipo necesario", checkin: "El celular o una tablet", others: "Un reloj por sucursal" },
  { label: "Registro electrónico de jornada", checkin: "Inicio y fin de cada jornada, listos para entregar", others: "Depende del equipo y del software" },
  { label: "Retardos y faltas", checkin: "Calculados automáticamente", others: "Revisión manual" },
  { label: "Permisos y vacaciones", checkin: "En la app, con aprobación", others: "Papel o WhatsApp" },
  { label: "Corte para nómina", checkin: "Un archivo al cerrar el periodo", others: "Captura manual" },
  { label: "Correcciones", checkin: "Con motivo y bitácora; la original no se borra", others: "Sin rastro" },
];

export const checkinFaqs = [
  { question: "¿Qué es un reloj checador digital?", answer: "Es un sistema que registra la hora de entrada y salida del personal desde un dispositivo conectado, como un celular o una tablet, y guarda los registros en la nube. Checkin además calcula retardos, faltas y horas extra, y gestiona permisos y vacaciones." },
  { question: "¿Sirve para el registro electrónico de jornada que pide la reforma laboral?", answer: "Sí. La reforma publicada en el DOF el 1 de mayo de 2026 obliga a registrar de manera electrónica la jornada de cada trabajador con su hora de inicio y fin. Checkin guarda cada checada con fecha, hora y origen, no permite borrarlas y exporta los registros. Las reglas de la STPS entran en vigor el 1 de enero de 2027." },
  { question: "¿Necesito comprar un reloj checador?", answer: "No. Tus empleados checan desde su celular, o activas cualquier tablet o computadora como kiosco en la sucursal con número de empleado y PIN." },
  { question: "¿Rastrean la ubicación de mis empleados?", answer: "No. Con la geocerca activada, la ubicación se toma solo en el momento de checar y con el consentimiento explícito del empleado. Nunca hay rastreo continuo." },
  { question: "¿Checkin calcula la nómina?", answer: "No es un sistema de nómina: te entrega días trabajados, faltas, retardos, horas extra, vacaciones, permisos e incapacidades listos para tu sistema de nómina." },
  { question: "¿Cuánto cuesta?", answer: "Desde $299 MXN al mes con 14 días de prueba gratis y sin tarjeta. Los planes van según el número de empleados y sucursales." },
];
