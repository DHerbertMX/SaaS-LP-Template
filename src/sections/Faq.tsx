"use client";

// Importing necessary assets and components
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { faqs } from "@/constants";

export const Faq = () => {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-white py-24">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Preguntas frecuentes</div>
          </div>
          <h2 className="section-title mt-5">
            Tu página web en Tampico, sin complicaciones
          </h2>
        </div>
        {/* Accordion */}
        <div className="mx-auto mt-12 max-w-[760px] divide-y divide-black/10 border-y border-black/10">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = open === index;
            return (
              <div key={question}>
                <h3>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-bold tracking-tight text-black"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    {question}
                    <span
                      aria-hidden
                      className={twMerge(
                        "text-2xl font-normal leading-none transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {/* Answers stay in the HTML (for SEO) and just collapse */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 tracking-tight text-[#010D3E]">{answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
