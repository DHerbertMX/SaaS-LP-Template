import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Herzago | Desarrollo de Software",
  description: "Desarrollo de software a medida: aplicaciones web, móviles y soluciones en la nube.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="relative scroll-smooth">
      <body className={clsx(dmSans.className, "bg-[#EAEEFE] antialiased")}>
        {children}
      </body>
    </html>
  );
}
