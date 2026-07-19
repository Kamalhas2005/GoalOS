type SidebarItem = {
  icon: string;
  label: string;
  active?: boolean;
};

const items: SidebarItem[] = [
  { icon: "🏠", label: "Mission Control", active: true },
  { icon: "🎯", label: "Missions" },
  { icon: "📅", label: "Planner" },
  { icon: "📚", label: "Tutor" },
  { icon: "🧠", label: "Memory" },
  { icon: "📈", label: "Analytics" },
  { icon: "⚙️", label: "Settings" },
];

export default function Sidebar() {
  return (
<aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-800/60 bg-[#09090B]">
      {/* Logo */}

      <div className="border-b border-slate-800/60 px-7 py-8">

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />

          <h1 className="text-3xl font-bold tracking-tight text-white">
            GOALOS
          </h1>

        </div>

        <p className="mt-3 text-sm text-slate-400">
          Mission Operating System
        </p>

        <p className="mt-6 text-xs leading-6 text-slate-500 italic">
          “Small progress.
          <br />
          Every single day.”
        </p>

      </div>

      {/* Navigation */}

<nav className="flex-1 overflow-y-auto px-4 py-6">
        {items.map((item) => (

          <button
            key={item.label}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200
            ${
              item.active
                ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                : "text-slate-400 hover:bg-slate-900 hover:text-white hover:translate-x-1"
            }`}
          >

            <span className="text-lg">{item.icon}</span>

            <span className="font-medium">{item.label}</span>

          </button>

        ))}

      </nav>

      {/* Footer */}

<div className="border-t border-slate-800/60 p-5">
        <div className="rounded-2xl bg-[#111827] p-5">

          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Founder Edition
          </p>

          <div className="mt-5 flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-emerald-400" />

            <div>

              <p className="text-sm font-semibold text-white">
                AI Ready
              </p>

              <p className="text-xs text-slate-500">
                Version 0.1
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}