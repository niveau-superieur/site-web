import type { Activity, Program } from '@/types/activity'
import { calisthenicsActivities } from './activityTypes/calisthenicsActivities'
import { cardioActivities } from './activityTypes/cardioActivities'
import { cyclingActivities } from './activityTypes/cyclingActivities'
import { geocachingActivities } from './activityTypes/geocachingActivities'
import { readingActivities } from './activityTypes/readingActivities'
import { runningActivities } from './activityTypes/runningActivities'
import { swimmingActivities } from './activityTypes/swimmingActivities'

export const calisthenicsTMAEasyProgram: Program = {
  id: 'calisthenicsTMAEasyProgram',
  name: 'Callisthénie - The Movement Athlete - Facile',
  tagColor: 'violet',
}

export const readingNovelProgram: Program = {
  id: 'readingNovelProgram',
  name: 'Lecture - 5h/jour',
  tagColor: 'yellow',
}

export const runningMarathonProgram: Program = {
  id: 'runningMarathonProgram',
  name: 'Course à pied - Marathon',
  tagColor: 'lime',
}

export const geocachingRennesProgram: Program = {
  id: 'geocachingRennesProgram',
  name: 'Géocaching - Rennes intra-rocade',
  tagColor: 'sky',
}

export const zwiftPlatineProgram: Program = {
  id: 'zwiftPlatineProgram',
  name: 'Zwift - Platine',
  tagColor: 'orange',
}

export const triathlonIronmanProgram: Program = {
  id: 'triathlonIronmanProgram',
  name: 'Triathlon - Ironman',
  tagColor: 'cyan',
}

export type ProgramId =
  | 'calisthenicsTMAEasyProgram'
  | 'readingNovelProgram'
  | 'runningMarathonProgram'
  | 'geocachingRennesProgram'
  | 'zwiftPlatineProgram'
  | 'triathlonIronmanProgram'

export const programs: Program[] = [
  calisthenicsTMAEasyProgram,
  readingNovelProgram,
  runningMarathonProgram,
  geocachingRennesProgram,
  zwiftPlatineProgram,
  triathlonIronmanProgram,
]

export const activities: Activity[] = [
  ...calisthenicsActivities,
  ...readingActivities,
  ...runningActivities,
  ...geocachingActivities,
  ...cyclingActivities,
  ...swimmingActivities,
  ...cardioActivities,
]
