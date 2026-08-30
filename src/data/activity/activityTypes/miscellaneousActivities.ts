import type { Activity } from '@/types/activity'
import { activityTags } from '../activityTags'

export const miscellaneousActivities: Activity[] = [
  {
    name: `Triathlon - Vélo elliptique - Sortie libre`,
    date: '2026-08-22',
    duration: 105,
    tags: [activityTags.sport, activityTags.other],
    programs: ['triathlonIronmanProgram'],
    description: `Même conditions que la veille (pluie, vent), je relance une session de vélo elliptique tranquille`,
  },
  {
    name: `Triathlon - Vélo elliptique - Sortie libre`,
    date: '2026-08-21',
    duration: 246,
    tags: [activityTags.sport, activityTags.other],
    programs: ['triathlonIronmanProgram'],
    description: `Le retour de la pluie !\nAvec la pluie et le vent, je remplace la sortie vélo par du vélo elliptique (je n'ai pas pris le home trainer).\nRésultat : c'est super dur ! Il m'a fallu presque une demi heure pour synchroniser les bras et les jambes, et après j'étais mort !`,
  },
  {
    name: `Séance d'initiation Kinball`,
    date: '2026-07-01',
    duration: 93,
    tags: [activityTags.sport, activityTags.other],
    programs: ['triathlonIronmanProgram'],
    description: `La séance devait être 20 minutes de cardio, transformée en 1h30 de Kinball en initiation.\nSport peu connu mais vraiment très sympa à pratiquer, découvert grâce à certains collègues qui pratiquent.`,
  },
]
