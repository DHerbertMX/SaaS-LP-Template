"use client";

// Importing necessary assets and components
import React from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import { projects } from "@/constants";
import ArrowRight from "@/assets/arrow-right.svg";
import pyramidImage from "@/assets/pyramid.png";
import springImage from "@/assets/spring.png";

const AUTOPLAY_MS = 6000;

export const Projects = () => {
  const sectionRef = React.useRef(null);
  const [[current, direction], setSlide] = React.useState([0, 0]);
  const [paused, setPaused] = React.useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const paginate = React.useCallback(
    (step: number) =>
      setSlide(([prev]) => [
        (prev + step + projects.length) % projects.length,
        step,
      ]),
    [],
  );

  // Autoplay, paused while the user hovers the carousel
  React.useEffect(() => {
    if (paused || projects.length < 2) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, paginate, current]);

  const { title, category, url, image } = projects[current];

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Proyectos</div>
          </div>
          <h2 className="section-title mt-5">Nuestro trabajo habla por sí solo</h2>
        </div>
        {/* Carousel */}
        <div
          className="relative mx-auto mt-12 max-w-[880px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Decorative props */}
          <motion.img
            src={pyramidImage.src}
            alt="Imagen de pirámide"
            width={220}
            height={220}
            className="pointer-events-none absolute -left-28 -top-16 z-10 hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Imagen de resorte"
            width={240}
            className="pointer-events-none absolute -right-32 bottom-20 z-10 hidden md:block"
            style={{ translateY }}
          />
          <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,30,128,0.25)]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.a
                key={current}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -80) paginate(1);
                  else if (offset.x > 80) paginate(-1);
                }}
                className="block"
              >
                <Image
                  src={image}
                  alt={`Captura del sitio ${title}`}
                  className="pointer-events-none w-full select-none"
                  draggable={false}
                />
              </motion.a>
            </AnimatePresence>
          </div>
          {/* Caption, arrows and dots */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-3 tracking-tight"
            >
              <span className="font-bold text-black">{title}</span>
              <span className="hidden text-sm text-black/50 sm:inline">
                {category}
              </span>
              <ArrowRight className="h-4 w-4 self-center transition-transform group-hover:translate-x-1" />
            </a>
            {projects.length > 1 && (
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {projects.map((project, index) => (
                    <button
                      key={project.title}
                      aria-label={`Ver ${project.title}`}
                      onClick={() =>
                        setSlide([index, index > current ? 1 : -1])
                      }
                      className={twMerge(
                        "h-1.5 w-1.5 rounded-full bg-black/20 transition-all",
                        index === current && "w-6 bg-black",
                      )}
                    />
                  ))}
                </div>
                <div className="flex gap-1">
                  <button
                    aria-label="Proyecto anterior"
                    onClick={() => paginate(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition hover:bg-black/5 hover:text-black"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    aria-label="Proyecto siguiente"
                    onClick={() => paginate(1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition hover:bg-black/5 hover:text-black"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
