// Shared layout for legal pages (privacy notice, terms)
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { siteConfig } from "@/constants";

export const LegalPage = (props: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <Header />
    <main className="bg-white py-16 md:py-24">
      <article className="container max-w-[760px] tracking-tight text-[#010D3E] [&_a]:font-medium [&_a]:text-black [&_a]:underline [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tighter [&_h2]:text-black [&_li]:mt-2 [&_p]:mt-4 [&_p]:leading-7 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="section-title text-left">{props.title}</h1>
        <p className="text-sm text-black/50">
          Última actualización: {siteConfig.legalUpdated}
        </p>
        {props.children}
      </article>
    </main>
    <Footer />
  </>
);
