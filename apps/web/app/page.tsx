import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#09090B]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <section className="mx-8 mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-8">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            ACTIVE MISSION
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Become a World-Class Software Engineer
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            GoalOS exists for one reason: helping you execute your long-term goals,
            one focused session at a time.
          </p>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Mission Progress</span>
              <span>18%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[18%] rounded-full bg-cyan-400 transition-all duration-700"></div>
            </div>

          </div>

        </section>

        <div className="grid flex-1 gap-6 p-8 md:grid-cols-2 xl:grid-cols-3">

          <Card title="Today's Plan">
            <ul className="space-y-2">
              <li>✅ Finish Mission Control UI</li>
              <li>🧠 Build Mission Engine</li>
              <li>📚 Study GATE</li>
            </ul>
          </Card>

          <Card title="Progress">
            Foundation completed.<br />
            Mission Control in progress.
          </Card>

          <Card title="Quick Actions">
            <div className="flex flex-col gap-3">
              <button className="rounded-xl bg-cyan-500 px-4 py-3 font-medium text-black transition hover:bg-cyan-400">
                Start Focus Session
              </button>

              <button className="rounded-xl bg-slate-800 px-4 py-3 transition hover:bg-slate-700">
                Talk to GoalOS
              </button>
            </div>
          </Card>

        </div>

      </div>
    </main>
  );
}