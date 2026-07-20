interface ComingSoonCardProps {
  engine: string;
}

export default function ComingSoonCard({
  engine,
}: ComingSoonCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8">

      <h2 className="text-2xl font-semibold text-cyan-300">
        Coming Soon
      </h2>

      <p className="mt-3 text-slate-400">
        {engine} will power this page.
      </p>

    </div>
  );
}