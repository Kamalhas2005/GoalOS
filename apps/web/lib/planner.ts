import { getStudyMemories } from "@/lib/memory";
import { PlannerTask } from "@/types/planner";
import { getAvailableSlots } from "@/lib/lifestyle";

export const todayPlan: PlannerTask[] = [
  {
    id: "task-001",
    title: "Complete Mission Engine",
    completed: true,
    priority: "high",
  },
  {
    id: "task-002",
    title: "Build Planner Engine",
    completed: false,
    priority: "high",
  },
  {
    id: "task-003",
    title: "Study GATE for 1 hour",
    completed: false,
    priority: "medium",
  },
];
export function getCompletedTasks(tasks: PlannerTask[]): number {
  return tasks.filter((task) => task.completed).length;
}

export function getPendingTasks(tasks: PlannerTask[]): number {
  return tasks.filter((task) => !task.completed).length;
}

export function getCompletionPercentage(tasks: PlannerTask[]): number {
  if (tasks.length === 0) return 0;

  return Math.round(
    (getCompletedTasks(tasks) / tasks.length) * 100
  );
}
export function getRecommendedSlot() {
  const availableSlots = getAvailableSlots();

  if (availableSlots.length === 0) {
    return null;
  }

  return availableSlots[0];
}

export function getPlanningQuality():
  | "Excellent"
  | "Good"
  | "Needs Attention" {

  const completedTasks = getCompletedTasks(todayPlan);
  const studyCount = getStudyMemories().length;

  const score = completedTasks + studyCount;

  if (score >= 6) {
    return "Excellent";
  }

  if (score >= 3) {
    return "Good";
  }

  return "Needs Attention";
}