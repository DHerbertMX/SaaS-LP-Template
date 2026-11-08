// Shared layout for text pages (legal pages, Timbrex pages)
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { siteConfig } from "@/constants";

export const LegalPage = (props: {
  title: string;
  // Intro line under the title; legal pages show the update date instead
  lead?: string;
  children: React.ReactNode;
}) => (
  <>
    <Header />
    <main className="bg-white py-16 md:py-24">
      <article className="container max-w-[760px] tracking-tight text-[#010D3E] [&_a]:font-medium [&_a]:text-black [&_a]:underline [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tighter [&_h2]:text-black [&_li]:mt-2 [&_p]:mt-4 [&_p]:leading-7 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <h1 className="section-title text-left">{props.title}</h1>
        {props.lead ? (
          <p className="mt-4 text-lg leading-7 text-[#010D3E]/80">{props.lead}</p>
        ) : (
          <p className="text-sm text-black/50">
            Última actualización: {siteConfig.legalUpdated}
          </p>
        )}
        {props.children}
      </article>
    </main>
    <Footer />
  </>
);
