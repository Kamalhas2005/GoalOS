import Card from "@/components/Card";
import {
  todayPlan,
  getCompletedTasks,
  getPendingTasks,
  getCompletionPercentage,
  getPlanningQuality,
  getRecommendedSlot,
} from "@/lib/planner";

export default function PlannerPage() {
  const completedTasks = getCompletedTasks(todayPlan);
  const pendingTasks = getPendingTasks(todayPlan);
  const completionPercentage =
    getCompletionPercentage(todayPlan);
  const planningQuality = getPlanningQuality();
  const recommendedSlot = getRecommendedSlot();  

  return (
    <main className="min-h-screen bg-[#09090B] p-10 text-white">

      <h1 className="text-4xl font-bold">
        Planner
      </h1>

      <p className="mt-2 text-slate-400">
        Manage today's tasks and monitor your progress.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <Card title="Today's Tasks">

          <ul className="space-y-3">

            {todayPlan.map((task) => (

              <li
                key={task.id}
                className="flex items-center justify-between rounded-lg bg-slate-900 p-3"
              >
                <div className="flex items-center gap-3">

                  <span>
                    {task.completed ? "✅" : "⬜"}
                  </span>

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

        <Card title="Planner Statistics">

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
           <div className="flex justify-between font-semibold">
            <span>Planning Quality</span>

            <span
             className={`${
               planningQuality === "Excellent"
                ? "text-emerald-400"
                : planningQuality === "Good"
                ? "text-yellow-300"
                : "text-red-400"
             }`}
           >
             {planningQuality}
        </span>
            </div>
       </div>

        </Card>
       
       <Card title="🧠 AI Recommendation">

  {recommendedSlot ? (

    <div className="space-y-3">

      <p className="text-slate-400">
        Best available slot for today's mission
      </p>

      <p className="text-3xl font-bold text-cyan-300">
        {recommendedSlot.startTime}
      </p>

      <p className="text-slate-500">
        until {recommendedSlot.endTime}
      </p>

      <p className="text-sm text-emerald-400">
        {recommendedSlot.durationMinutes} minutes available
      </p>

    </div>

  ) : (

    <p>No available time today.</p>

  )}

</Card>

      </div>

    </main>
  );
}