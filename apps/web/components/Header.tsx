export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="border-b border-slate-800 bg-[#09090B] px-8 py-6">

      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Mission Control
      </p>

      <div className="mt-3 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Today's Mission
          </h1>

          <p className="mt-2 text-slate-400">
            {today}
          </p>

        </div>

        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">

          <span className="text-sm font-medium text-emerald-400">
            ● AI Ready
          </span>

        </div>

      </div>

    </header>
  );
}