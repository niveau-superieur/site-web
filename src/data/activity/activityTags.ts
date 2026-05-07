import type { ColorTag } from '../../theme/colorTags'

export type Tag = {
  label: string
  color: ColorTag
}

export const activityTags = {
  first: { label: 'Première séance', color: 'amber600' },
  last: { label: 'Dernière séance', color: 'amber600' },
  competition: { label: 'Compétition', color: 'red600' },
  stage: { label: 'Étape validée', color: 'blue600' },
  test: { label: 'Test', color: 'orange600' },
  sport: { label: 'Sport', color: 'violet600' },
  running: { label: 'Course à pied', color: 'yellow600' },
  calisthenics: { label: 'Callisthénie', color: 'lime600' },
  reading: { label: 'Lecture', color: 'fuchsia600' },
  geocaching: { label: 'Géocaching', color: 'green600' },
  creating: { label: 'Création', color: 'indigo600' },
  virtualCycling: { label: 'Cyclisme virtuel', color: 'rose600' },
  cycling: { label: 'Cyclisme', color: 'cyan600' },
  swimming: { label: 'Natation', color: 'sky600' },
  cardio: { label: 'Cardio', color: 'emerald600' },
} as const satisfies Record<string, Tag>

export type ActivityTag = (typeof activityTags)[keyof typeof activityTags]
