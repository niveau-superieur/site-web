import type { ColorTag600 } from '../../theme/colorTags'

export type Tag = {
  label: string
  color: ColorTag600
}

export const activityTags = {
  first: { label: 'Première séance', color: 'amber' },
  last: { label: 'Dernière séance', color: 'amber' },
  competition: { label: 'Compétition', color: 'red' },
  stage: { label: 'Étape validée', color: 'blue' },
  test: { label: 'Test', color: 'orange' },
  sport: { label: 'Sport', color: 'violet' },
  running: { label: 'Course à pied', color: 'yellow' },
  calisthenics: { label: 'Callisthénie', color: 'lime' },
  reading: { label: 'Lecture', color: 'fuchsia' },
  geocaching: { label: 'Géocaching', color: 'green' },
  creating: { label: 'Création', color: 'indigo' },
  virtualCycling: { label: 'Cyclisme virtuel', color: 'rose' },
  cycling: { label: 'Cyclisme', color: 'cyan' },
  swimming: { label: 'Natation', color: 'sky' },
  cardio: { label: 'Cardio', color: 'emerald' },
} as const

export type ActivityTag = (typeof activityTags)[keyof typeof activityTags]
