// Screenshot wrapped in a minimal browser window
import Image, { type StaticImageData } from "next/image";

export const BrowserFrame = (props: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
}) => (
  <div
    className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_-12px_rgba(0,30,128,0.25)] ${props.className ?? ""}`}
  >
    <div className="flex gap-1.5 border-b border-black/5 bg-[#F5F7FF] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
    </div>
    <Image
      src={props.src}
      alt={props.alt}
      priority={props.priority}
      className="w-full"
      sizes="(min-width: 1024px) 1000px, 100vw"
    />
  </div>
);
