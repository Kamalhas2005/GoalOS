import { DailyBrief } from "@/types/kernel";

import { getMissionHealth } from "@/lib/mission";
import { getLifestyleHealth } from "@/lib/lifestyle";
import { getPlanningQuality } from "@/lib/planner";
import { getLatestMemory } from "@/lib/memory";

export function getDailyBrief(): DailyBrief {
  const latestMemory = getLatestMemory();

  return {
    missionHealth: getMissionHealth(),

    lifestyleHealth: getLifestyleHealth(),

    planningQuality: getPlanningQuality(),

    latestMemory: latestMemory
      ? latestMemory.title
      : null,
  };
}