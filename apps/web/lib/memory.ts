import { MemoryRecord } from "@/types/memory";

export const memories: MemoryRecord[] = [
  {
    id: 1,
    title: "Completed GoalOS Mission Engine",
    description: "Mission Engine V2 successfully completed.",
    category: "mission",
    createdAt: "2026-07-21",
  },

  {
    id: 2,
    title: "Planner Engine Integrated",
    description: "Planner now recommends available slots.",
    category: "planner",
    createdAt: "2026-07-21",
  },

  {
    id: 3,
    title: "Completed DBMS Revision",
    description: "Finished database revision session.",
    category: "study",
    createdAt: "2026-07-20",
  },

  {
    id: 4,
    title: "Morning Workout",
    description: "Completed gym session.",
    category: "habit",
    createdAt: "2026-07-20",
  },

  {
    id: 5,
    title: "Project Idea",
    description: "Create AI Operating System called GoalOS.",
    category: "note",
    createdAt: "2026-07-19",
  },
];

export function getTotalMemories() {
  return memories.length;
}

export function getMemoriesByCategory(category: string) {
  return memories.filter(
    (memory) => memory.category === category
  );
}

export function getLatestMemory() {
  return memories[0] ?? null;
}

export function searchMemories(keyword: string) {
  const query = keyword.toLowerCase();

  return memories.filter(
    (memory) =>
      memory.title.toLowerCase().includes(query) ||
      memory.description.toLowerCase().includes(query)
  );
}