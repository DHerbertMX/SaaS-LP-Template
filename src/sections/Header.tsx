// Importing necessary assets and components
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Main header container with background and text styling */}
      <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
        {/* Promotional message, hidden on smaller screens */}
        <p className="hidden text-white/60 md:block">
          Transformamos tus ideas en software de alto impacto
        </p>
        {/* Call to action with arrow icon */}
        <div className="inline-flex items-center gap-1">
          <a href="#contacto">Agenda una consultoría gratis</a>
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          {/* Flex container for logo and navigation */}
          <div className="flex items-center justify-between">
            {/* Logo image */}
            <a href="#" aria-label="Ir al inicio">
              <Image src={Logo} alt="Logo Herzago" height={200} width={120} />
            </a>
            {/* Menu icon for mobile view */}
            <MenuIcon className="h-5 w-5 md:hidden" />
            {/* Navigation links, hidden on smaller screens */}
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#">Nosotros</a>
              <a href="#servicios">Servicios</a>
              <a href="#clientes">Clientes</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#contacto">Contacto</a>
              {/* Button for getting started */}
              <a href="#contacto" className="btn btn-primary">Cotiza tu proyecto</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
