export interface MemoryRecord {
  id: number;

  title: string;

  description: string;

  category:
    | "mission"
    | "planner"
    | "study"
    | "habit"
    | "note";

  createdAt: string;
}