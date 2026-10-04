"use client";

// Importing necessary assets and components
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import { navLinks } from "@/constants";

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Main header container with background and text styling */}
      <div className="flex items-center justify-center gap-3 bg-black py-3 text-sm text-white">
        {/* Promotional message, hidden on smaller screens */}
        <p className="hidden text-white/60 md:block">
          Transformamos tus ideas en software de alto impacto
        </p>
        {/* Call to action with arrow icon */}
        <a href="/#contacto" className="inline-flex items-center gap-1">
          Agenda una consultoría gratis
          <ArrowRight className="inline-flex h-4 w-4 items-center justify-center" />
        </a>
      </div>
      <div className="py-5">
        <div className="container">
          {/* Flex container for logo and navigation */}
          <div className="flex items-center justify-between">
            {/* Logo image */}
            <a href="/" aria-label="Ir al inicio" onClick={closeMenu}>
              <Image
                src={Logo}
                alt="Herzago"
                height={200}
                width={120}
                priority
              />
            </a>
            {/* Menu button for mobile view */}
            <button
              className="md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
            {/* Navigation links, hidden on smaller screens */}
            <nav
              aria-label="Principal"
              className="hidden items-center gap-6 text-black/60 md:flex"
            >
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className="hover:text-black">
                  {label}
                </a>
              ))}
              {/* Button for getting started */}
              <a href="/#contacto" className="btn btn-primary">
                Cotiza tu proyecto
              </a>
            </nav>
          </div>
          {/* Mobile navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-menu"
                aria-label="Principal"
                className="flex flex-col gap-4 overflow-hidden pt-6 text-lg text-black/70 md:hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {navLinks.map(({ href, label }) => (
                  <a key={href} href={href} onClick={closeMenu}>
                    {label}
                  </a>
                ))}
                <a
                  href="/#contacto"
                  className="btn btn-primary mt-2"
                  onClick={closeMenu}
                >
                  Cotiza tu proyecto
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
