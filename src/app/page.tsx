// Importing sections
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { CheckinShowcase } from "@/sections/CheckinShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { Faq } from "@/sections/Faq";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { faqs } from "@/constants";

// FAQ structured data, eligible for rich results in Google
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Services />
      <Projects />
      <CheckinShowcase />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
