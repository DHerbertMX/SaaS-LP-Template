// Importing necessary assets and components
import Image from "next/image";
import logo from "@/assets/logosaas.png";
import { navLinks } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        {/* Logo section with gradient background */}
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <a href="/" aria-label="Ir al inicio" className="relative">
            <Image src={logo} height={60} alt="Herzago" />
          </a>
        </div>
        {/* Navigation links */}
        <nav
          aria-label="Pie de página"
          className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center"
        >
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        {/* Legal links */}
        <nav
          aria-label="Legal"
          className="mt-6 flex flex-col gap-3 text-xs md:flex-row md:justify-center md:gap-6"
        >
          <a href="/aviso-de-privacidad" className="hover:text-white">
            Aviso de privacidad
          </a>
          <a href="/terminos-y-condiciones" className="hover:text-white">
            Términos y condiciones
          </a>
        </nav>
        {/* Copyright information */}
        <p className="mt-6">
          &copy; {new Date().getFullYear()} Herzago. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
