import { Mission } from "@/types/mission";

export const activeMission: Mission = {
  id: "mission-001",

  title: "Become a World-Class Software Engineer",

  description:
    "Build GoalOS, master full-stack development, prepare for GATE, and become industry-ready through consistent execution.",

  progress: 18,

  status: "in_progress",

  deadline: "2027-12-31",

  priority: "high",
};
export function getDaysRemaining(deadline: string): number {
  const today = new Date();
  const endDate = new Date(deadline);

  const difference = endDate.getTime() - today.getTime();

  return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
}

export function getMissionPhase(progress: number): string {
  if (progress < 25) return "Foundation";
  if (progress < 50) return "Execution";
  if (progress < 75) return "Optimization";
  if (progress < 100) return "Final Sprint";

  return "Completed";
}

export function getMissionStatus(
  progress: number,
  deadline: string
): string {
  const daysRemaining = getDaysRemaining(deadline);

  if (progress >= 100) return "Completed";

  if (daysRemaining <= 30 && progress < 80)
    return "Behind Schedule";

  if (progress >= 50)
    return "Ahead of Schedule";

  return "On Track";
}