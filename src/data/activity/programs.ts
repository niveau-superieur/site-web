import type { Activity, Program } from '@/types/activity'
import { activityTags } from './activityTags'
import { calisthenicsActivities } from './activityTypes/calisthenicsActivities'
import { cardioActivities } from './activityTypes/cardioActivities'
import { creatingActivities } from './activityTypes/creatingActivities'
import { cyclingActivities } from './activityTypes/cyclingActivities'
import { geocachingActivities } from './activityTypes/geocachingActivities'
import { readingActivities } from './activityTypes/readingActivities'
import { runningActivities } from './activityTypes/runningActivities'
import { swimmingActivities } from './activityTypes/swimmingActivities'

export const calisthenicsTMAEasyProgram: Program = {
  id: 'calisthenicsTMAEasyProgram',
  name: 'Callisthénie - The Movement Athlete - Facile',
  tagColor: 'violet',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
    {
      label: 'Etapes clés',
      type: 'tag-activities',
      tags: [activityTags.stage],
    },
  ],
}

export const readingNovelProgram: Program = {
  id: 'readingNovelProgram',
  name: 'Lecture - 5h/jour',
  tagColor: 'yellow',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
  ],
}

export const runningMarathonProgram: Program = {
  id: 'runningMarathonProgram',
  name: 'Course à pied - Marathon',
  tagColor: 'lime',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
    {
      label: 'Plus longue distance',
      type: 'longest-distance',
    },
    {
      label: 'Tests',
      type: 'tag-activities',
      tags: [activityTags.test],
    },
    {
      label: 'Compétitions',
      type: 'tag-activities',
      tags: [activityTags.competition],
    },
  ],
}

export const geocachingRennesProgram: Program = {
  id: 'geocachingRennesProgram',
  name: 'Géocaching - Rennes intra-rocade',
  tagColor: 'sky',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
    {
      label: 'Plus longue distance',
      type: 'longest-distance',
    },
  ],
}

export const zwiftPlatineProgram: Program = {
  id: 'zwiftPlatineProgram',
  name: 'Zwift - Platine',
  tagColor: 'orange',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
    {
      label: 'Plus longue distance',
      type: 'longest-distance',
    },
    {
      label: 'Tests',
      type: 'tag-activities',
      tags: [activityTags.test],
    },
  ],
}

export const triathlonIronmanProgram: Program = {
  id: 'triathlonIronmanProgram',
  name: 'Triathlon - Ironman',
  tagColor: 'cyan',
  highlights: [
    {
      label: 'Nombre de sessions de natation',
      type: 'count',
      tags: [activityTags.swimming],
    },
    {
      label: 'Plus longue activité de natation',
      type: 'longest-duration',
      tags: [activityTags.swimming],
    },
    {
      label: 'Plus longue distance en natation',
      type: 'longest-distance',
      tags: [activityTags.swimming],
    },
    {
      label: 'Nombre de sessions de vélo',
      type: 'count',
      tags: [activityTags.virtualCycling, activityTags.cycling],
    },
    {
      label: 'Plus longue activité vélo',
      type: 'longest-duration',
      tags: [activityTags.virtualCycling, activityTags.cycling],
    },
    {
      label: 'Plus longue distance à vélo',
      type: 'longest-distance',
      tags: [activityTags.virtualCycling, activityTags.cycling],
    },
    {
      label: 'Nombre de sessions de course à pied',
      type: 'count',
      tags: [activityTags.running],
    },
    {
      label: 'Plus longue activité course à pied',
      type: 'longest-duration',
      tags: [activityTags.running],
    },
    {
      label: 'Plus longue distance en course à pied',
      type: 'longest-distance',
      tags: [activityTags.running],
    },
    {
      label: 'Tests',
      type: 'tag-activities',
      tags: [activityTags.test],
    },
    {
      label: 'Compétitions',
      type: 'tag-activities',
      tags: [activityTags.competition],
    },
  ],
}

export const dndAdventuresProgram: Program = {
  id: 'dndAdventuresProgram',
  name: 'Aventures D&D',
  tagColor: 'lime',
  highlights: [
    {
      label: 'Plus longue activité',
      type: 'longest-duration',
    },
  ],
}

export type ProgramId =
  | 'calisthenicsTMAEasyProgram'
  | 'readingNovelProgram'
  | 'runningMarathonProgram'
  | 'geocachingRennesProgram'
  | 'zwiftPlatineProgram'
  | 'triathlonIronmanProgram'
  | 'dndAdventuresProgram'

export const programs: Program[] = [
  triathlonIronmanProgram,
  zwiftPlatineProgram,
  dndAdventuresProgram,
  geocachingRennesProgram,
  runningMarathonProgram,
  readingNovelProgram,
  calisthenicsTMAEasyProgram,
]

export const activities: Activity[] = [
  ...calisthenicsActivities,
  ...readingActivities,
  ...runningActivities,
  ...geocachingActivities,
  ...cyclingActivities,
  ...swimmingActivities,
  ...cardioActivities,
  ...creatingActivities,
]
