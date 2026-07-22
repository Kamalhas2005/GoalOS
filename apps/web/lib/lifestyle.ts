import { getStudyMemories } from "@/lib/memory";
import {
  LifestyleProfile,
  AvailableSlot,
} from "@/types/lifestyle";

export const lifestyle: LifestyleProfile = {
  wakeUpTime: "06:00",
  sleepTime: "23:00",

  blocks: [
    {
      id: 1,
      title: "College",
      startTime: "09:00",
      endTime: "16:00",
      category: "college",
    },

    {
      id: 2,
      title: "Gym",
      startTime: "18:00",
      endTime: "19:00",
      category: "gym",
    },

    {
      id: 3,
      title: "Dinner",
      startTime: "20:00",
      endTime: "20:30",
      category: "meal",
    },
  ],
};

export function getTotalBlocks() {
  return lifestyle.blocks.length;
}

export function getWakeUpTime() {
  return lifestyle.wakeUpTime;
}

export function getSleepTime() {
  return lifestyle.sleepTime;
}

export function getBlocksByCategory(category: string) {
  return lifestyle.blocks.filter(
    (block) => block.category === category
  );
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export function getAvailableSlots(): AvailableSlot[] {
  const slots: AvailableSlot[] = [];

  const sortedBlocks = [...lifestyle.blocks].sort(
    (a, b) =>
      timeToMinutes(a.startTime) -
      timeToMinutes(b.startTime)
  );

  let currentTime = timeToMinutes(
    lifestyle.wakeUpTime
  );

  for (const block of sortedBlocks) {
    const blockStart = timeToMinutes(
      block.startTime
    );

    if (blockStart > currentTime) {
      slots.push({
        startTime: minutesToTime(currentTime),
        endTime: minutesToTime(blockStart),
        durationMinutes:
          blockStart - currentTime,
      });
    }

    currentTime = timeToMinutes(
      block.endTime
    );
  }

  const sleepTime = timeToMinutes(
    lifestyle.sleepTime
  );

  if (currentTime < sleepTime) {
    slots.push({
      startTime: minutesToTime(currentTime),
      endTime: minutesToTime(sleepTime),
      durationMinutes:
        sleepTime - currentTime,
    });
  }

  return slots;
}

export function getLifestyleHealth():
  | "Excellent"
  | "Good"
  | "Needs Attention" {

  const studyCount = getStudyMemories().length;

  if (studyCount >= 4) {
    return "Excellent";
  }

  if (studyCount >= 2) {
    return "Good";
  }

  return "Needs Attention";
}