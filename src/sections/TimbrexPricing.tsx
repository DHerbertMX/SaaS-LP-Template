// Timbrex stamp packages, used on /timbrex and /timbrex/precios
import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/check.svg";
import { timbrexAppUrl, timbrexPackages } from "@/constants/timbrex";

export const TimbrexPricing = (props: { headingLevel?: "h1" | "h2" }) => {
  const Heading = props.headingLevel ?? "h2";

  return (
    <section id="precios" className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Precios</div>
          </div>
          <Heading className="section-title mt-5">
            Paga solo lo que facturas
          </Heading>
          <p className="section-description mt-5">
            Sin mensualidades. Compras un paquete y tus timbres{" "}
            <strong>no vencen</strong>.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {timbrexPackages.map(
            ({ name, stamps, price, support, recommended }) => (
              <div
                key={name}
                className={twMerge(
                  "card max-w-none p-8",
                  recommended && "border-black bg-black text-white",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold",
                      recommended ? "text-white/70" : "text-[#6F6C90]",
                    )}
                  >
                    {name}
                  </h3>
                  {recommended && (
                    <span className="rounded-xl border border-white/20 px-3 py-1 text-sm">
                      Mejor precio
                    </span>
                  )}
                </div>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tighter">
                    ${price}
                  </span>
                  <span
                    className={twMerge(
                      "text-sm",
                      recommended ? "text-white/60" : "text-black/50",
                    )}
                  >
                    MXN
                  </span>
                </p>
                <p
                  className={twMerge(
                    "mt-1 text-sm",
                    recommended ? "text-white/60" : "text-black/50",
                  )}
                >
                  ${(price / stamps).toFixed(2)} por factura
                </p>
                <a
                  href={timbrexAppUrl}
                  target="_blank"
                  rel="noopener"
                  className={twMerge(
                    "btn mt-8 w-full",
                    recommended ? "bg-white text-black" : "btn-primary",
                  )}
                >
                  Comprar
                </a>
                <ul className="mt-8 flex flex-col gap-4 text-sm">
                  {[
                    `${stamps} timbres CFDI`,
                    "Clientes ilimitados",
                    "Descarga XML + PDF",
                    support,
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
        <p className="mt-8 text-center text-sm text-black/50">
          Pago con tarjeta, efectivo en OXXO o transferencia SPEI.
        </p>
      </div>
    </section>
  );
};
