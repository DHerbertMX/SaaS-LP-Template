"use client";

// Importing necessary assets and components
import Image from "next/image";
import { motion } from "framer-motion";
import acmeLogo from "@/assets/logo-acme.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

const logos = [
  { src: acmeLogo, alt: "Logo Acme" },
  { src: celestialLogo, alt: "Logo Celestial" },
  { src: pulseLogo, alt: "Logo Pulse" },
  { src: apexLogo, alt: "Logo Apex" },
];

// Repeat the list so one pass is always wider than the container
const track = [...logos, ...logos, ...logos];

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        {/* Flex container for scrolling logos */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {/* Track rendered twice; shifting by -50% loops seamlessly */}
            {[...track, ...track].map(({ src, alt }, index) => (
              <Image
                key={index}
                src={src}
                alt={alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
