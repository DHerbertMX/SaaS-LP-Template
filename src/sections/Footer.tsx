// Importing necessary assets and components
import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        {/* Logo section with gradient background */}
        <div className="relative inline-flex before:absolute before:bottom-0 before:top-2 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:content-['']">
          <a href="#" aria-label="Ir al inicio" className="relative">
            <Image src={logo} height={60} alt="Logo Herzago" />
          </a>
        </div>
        {/* Navigation links */}
        <nav className="mt-6 flex flex-col gap-6 md:flex-row md:justify-center">
          <a href="#">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#clientes">Clientes</a>
          <a href="#contacto">Contacto</a>
        </nav>
        {/* Social media icons */}
        <div className="mt-6 flex justify-center gap-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        {/* Copyright information */}
        <p className="mt-6">
          &copy; 2026 Herzago. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
