import type { Activity } from '@/types/activity'
import { activityTags } from '../activityTags'

export const miscellaneousActivities: Activity[] = [
  {
    name: "Séance d'initiation Kinball",
    date: '2026-07-01',
    duration: 93,
    tags: [activityTags.sport, activityTags.other],
    programs: ['triathlonIronmanProgram'],
    description: `La séance devait être 20 minutes de cardio, transformée en 1h30 de Kinball en initiation.\nSport peu connu mais vraiment très sympa à pratiquer, découvert grâce à certains collègues qui pratiquent.`,
  },
]
