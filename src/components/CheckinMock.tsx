// HTML mock of Checkin's "Hoy" screen inside a browser window (no screenshot yet)
const pill = {
  ok: "bg-[#0D9488]/15 text-[#0F766E]",
  late: "bg-amber-500/15 text-amber-700",
  miss: "bg-red-500/15 text-red-700",
  vac: "bg-violet-500/15 text-violet-700",
};

const rows: [string, string, keyof typeof pill, string][] = [
  ["Ana López", "Entró 08:57 · Centro", "ok", "Presente"],
  ["Luis Martínez", "Entró 09:14 · 14 min tarde", "late", "Retardo"],
  ["María García", "Vacaciones aprobadas", "vac", "Vacaciones"],
  ["José Hernández", "Sin checada", "miss", "Falta"],
  ["Lucía Pérez", "Entró 08:51 · Norte", "ok", "Presente"],
];

const menu = ["Hoy", "Asistencia", "Incidencias", "Empleados", "Turnos", "Sucursales", "Periodos", "Reportes"];

export const CheckinMock = (props: { className?: string }) => (
  <div
    role="img"
    aria-label="Pantalla Hoy de Checkin: empleados presentes, retardos, faltas y vacaciones en vivo"
    className={`overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_-12px_rgba(0,30,128,0.25)] ${props.className ?? ""}`}
  >
    <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F5F7FF] px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
      <span className="mx-auto hidden rounded-md bg-white px-3 py-0.5 text-xs text-black/40 md:block">checkin.herzago.com</span>
    </div>
    <div className="flex min-h-[360px] text-left text-sm text-black">
      <aside className="hidden w-44 shrink-0 border-r border-black/5 bg-[#FAFAFA] p-4 md:block">
        <div className="mb-5 font-bold text-[#0D9488]">Checkin</div>
        <ul className="space-y-1">
          {menu.map((item, i) => (
            <li key={item} className={`rounded-lg px-3 py-1.5 ${i === 0 ? "bg-[#0D9488]/10 font-medium text-[#0F766E]" : "text-black/50"}`}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1 p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Hoy</span>
          <span className="text-xs text-black/40">en vivo</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
          {[["18", "Presentes", "text-[#0F766E]"], ["2", "Llegaron tarde", "text-amber-600"], ["1", "Faltan", "text-red-600"], ["3", "Descanso", "text-black"]].map(([n, l, c]) => (
            <div key={l} className="rounded-xl border border-black/10 p-3">
              <div className="text-xs text-black/50">{l}</div>
              <div className={`text-2xl font-semibold ${c}`}>{n}</div>
            </div>
          ))}
        </div>
        <ul className="divide-y divide-black/5 rounded-xl border border-black/10">
          {rows.map(([name, detail, kind, label]) => (
            <li key={name} className="flex items-center justify-between px-4 py-2.5">
              <span>
                {name}
                <span className="block text-xs text-black/40">{detail}</span>
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs ${pill[kind]}`}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
