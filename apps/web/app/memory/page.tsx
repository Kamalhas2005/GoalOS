import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

import {
  memories,
  getTotalMemories,
  getLatestMemory,
} from "@/lib/memory";

export default function MemoryPage() {
  const totalMemories = getTotalMemories();
  const latestMemory = getLatestMemory();

  return (
    <main className="p-10">
      <PageHeader
        title="Memory"
        description="Everything GoalOS remembers about your journey."
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <Card title="🧠 Total Memories">
          <p className="text-4xl font-bold text-cyan-300">
            {totalMemories}
          </p>
        </Card>

        <Card title="⭐ Latest Memory">
          {latestMemory && (
            <>
              <p className="text-lg font-semibold text-white">
                {latestMemory.title}
              </p>

              <p className="mt-2 text-slate-400">
                {latestMemory.description}
              </p>

              <p className="mt-4 text-sm text-cyan-300">
                {latestMemory.createdAt}
              </p>
            </>
          )}
        </Card>

      </div>

      <div className="mt-8">

        <Card title="📚 Memory Timeline">

          <div className="space-y-3">

            {memories.map((memory) => (

              <div
                key={memory.id}
                className="rounded-xl bg-slate-900 p-4"
              >
                <div className="flex items-center justify-between">

                  <div>

                    <p className="font-semibold text-white">
                      {memory.title}
                    </p>

                    <p className="text-sm text-slate-400">
                      {memory.description}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-cyan-300">
                      {memory.category}
                    </p>

                    <p className="text-xs text-slate-500">
                      {memory.createdAt}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </Card>

      </div>

    </main>
  );
}