import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

import {
  lifestyle,
  getTotalBlocks,
  getWakeUpTime,
  getSleepTime,
  getAvailableSlots,
} from "@/lib/lifestyle";

export default function LifestylePage() {
  const totalBlocks = getTotalBlocks();
  const wakeUpTime = getWakeUpTime();
  const sleepTime = getSleepTime();

  const availableSlots = getAvailableSlots();
  return (
    <main className="p-10">

      <PageHeader
        title="Lifestyle"
        description="Manage your daily routine and availability."
      />

      <div className="grid gap-6 lg:grid-cols-3">

        <Card title="🌅 Wake Up">
          <p className="text-3xl font-bold text-cyan-300">
            {wakeUpTime}
          </p>
        </Card>

        <Card title="🌙 Sleep">
          <p className="text-3xl font-bold text-cyan-300">
            {sleepTime}
          </p>
        </Card>

        <Card title="📅 Lifestyle Blocks">
          <p className="text-3xl font-bold text-cyan-300">
            {totalBlocks}
          </p>
        </Card>

      </div>

      <div className="mt-8">

        <Card title="Today's Routine">

          <div className="space-y-3">

            {lifestyle.blocks.map((block) => (

              <div
                key={block.id}
                className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
              >
                <div>

                  <p className="font-semibold text-white">
                    {block.title}
                  </p>

                  <p className="text-sm text-slate-400">
                    {block.category}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-cyan-300">
                    {block.startTime}
                  </p>

                  <p className="text-slate-500">
                    {block.endTime}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Card>

</div>

<div className="mt-8">

  <Card title="🟢 Available Time">

    <div className="space-y-3">

      {availableSlots.map((slot, index) => (

        <div
          key={index}
          className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
        >

          <div>

            <p className="font-semibold text-white">
              Available Slot {index + 1}
            </p>

            <p className="text-sm text-slate-400">
              {slot.durationMinutes} minutes
            </p>

          </div>

          <div className="text-right">

            <p className="text-cyan-300">
              {slot.startTime}
            </p>

            <p className="text-slate-500">
              {slot.endTime}
            </p>

          </div>

        </div>

      ))}

    </div>

  </Card>

</div>

</main>
  );
}