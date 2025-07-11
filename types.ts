
export interface ChildInfo {
  name: string;
  age: '6-12m' | '1-2y' | '2-3y' | '3-4y' | '4-5y';
  wakeUpTime: string;
  bedTime: string;
  napSchedule: 'one-long' | 'two-short' | 'no-nap';
  interests: string;
  dietaryNeeds: string;
}

export interface RoutineItem {
  timeRange: string;
  activity: string;
  description: string;
  activityType: 'meal' | 'play' | 'learn' | 'nap' | 'outdoor' | 'transition';
}

export type AppView = 'form' | 'routine';
