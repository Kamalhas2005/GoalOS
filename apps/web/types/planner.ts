export type TaskPriority = "low" | "medium" | "high";

export interface PlannerTask {
  id: string;
  title: string;
  completed: boolean;
  priority: TaskPriority;
}