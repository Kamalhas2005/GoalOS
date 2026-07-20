import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Card from "@/components/Card";

import {
  activeMission,
  getDaysRemaining,
  getMissionPhase,
  getMissionStatus,
} from "@/lib/mission";

import {
  todayPlan,
  getCompletedTasks,
  getPendingTasks,
  getCompletionPercentage,
} from "@/lib/planner";

export default function Home() {
  const daysRemaining = getDaysRemaining(activeMission.deadline);

  const missionPhase = getMissionPhase(activeMission.progress);

  const missionStatus = getMissionStatus(
    activeMission.progress,
    activeMission.deadline
  );

  const completedTasks = getCompletedTasks(todayPlan);

  const pendingTasks = getPendingTasks(todayPlan);

  const completionPercentage = getCompletionPercentage(todayPlan);

  return (
    <main className="flex-1">
        <div className="flex flex-col">
        <Header />

        <section className="mx-8 mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            ACTIVE MISSION
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {activeMission.title}
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            {activeMission.description}
          </p>

          <div className="mt-8">
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Mission Progress</span>
              <span>{activeMission.progress}%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                style={{ width: `${activeMission.progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase text-slate-500">
                Days Remaining
              </p>

              <p className="mt-2 text-2xl font-bold text-white">
                {daysRemaining}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase text-slate-500">
                Phase
              </p>

              <p className="mt-2 text-2xl font-bold text-cyan-300">
                {missionPhase}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase text-slate-500">
                Status
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-400">
                {missionStatus}
              </p>
            </div>
          </div>
        </section>

        <div className="grid flex-1 gap-6 p-8 md:grid-cols-2 xl:grid-cols-3">
          <Card title="Today's Plan">
            <ul className="space-y-3">
              {todayPlan.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between rounded-lg bg-slate-900 p-3"
                >
                  <div className="flex items-center gap-3">
                    <span>{task.completed ? "✅" : "⬜"}</span>

                    <span>{task.title}</span>
                  </div>

                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      task.priority === "high"
                        ? "bg-red-500/20 text-red-300"
                        : task.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {task.priority}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Today's Progress">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Completed</span>
                <span>{completedTasks}</span>
              </div>

              <div className="flex justify-between">
                <span>Pending</span>
                <span>{pendingTasks}</span>
              </div>

              <div className="flex justify-between font-semibold text-cyan-300">
                <span>Completion</span>
                <span>{completionPercentage}%</span>
              </div>
            </div>
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