export type MissionStatus =
  | "not_started"
  | "in_progress"
  | "completed";

export interface Mission {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: MissionStatus;
  deadline: string;
  priority: "low" | "medium" | "high";
}