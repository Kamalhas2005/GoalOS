export interface LifestyleBlock {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  category:
    | "sleep"
    | "college"
    | "study"
    | "work"
    | "gym"
    | "meal"
    | "personal"
    | "free";
}

export interface LifestyleProfile {
  wakeUpTime: string;
  sleepTime: string;

  blocks: LifestyleBlock[];
}

export interface AvailableSlot {
  startTime: string;
  endTime: string;
  durationMinutes: number;
}