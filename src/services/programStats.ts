import { activityTags } from '@/data/activity/activityTags'
import { activities, programs } from '@/data/activity/programs'
import type { Activity, Highlight } from '@/types/activity'
import type { Stat, StatHighlight } from '@/types/stat'
import { formatDateFR, formatDuration } from '@/utils/formatUtils'

/**
 * Calcule les statistiques des programmes existants
 * @returns une liste de Stat contenant les statistiques de chaque programme
 */
export function computeProgramStats(): Stat[] {
  return programs.map((program) => {
    const programActivities = activities.filter((activity) =>
      activity.programs.includes(program.id),
    )

    const firstActivity = programActivities.find((a) => a.tags?.includes(activityTags.first))

    const lastActivity = programActivities.find((a) => a.tags?.includes(activityTags.last))

    const totalDuration = programActivities.reduce((sum, a) => sum + (a.duration ?? 0), 0)

    const totalDistance = programActivities
      .reduce((sum, a) => sum + (a.distance ?? 0), 0)
      .toFixed(2)

    const highlights =
      (program.highlights
        ?.map((highlight) => resolveHighlight(highlight, programActivities))
        .filter(Boolean) as StatHighlight[]) ?? []

    return {
      name: program.name,
      program: program.id,
      startDate: firstActivity?.date ? formatDateFR(firstActivity?.date) : 'Non précisé',
      endDate: lastActivity?.date ? formatDateFR(lastActivity?.date) : 'En cours',
      totalActivities: programActivities.length,
      totalDuration,
      totalDistance: Number(totalDistance),
      highlights,
    }
  })
}

/**
 * Récupère les données des highlights des programmes
 * @param highlight - le highlight dont on souhaite récupérer les stats
 * @param activities - la liste des activités du programme
 * @returns un StatHighlight qui permet la valeur et la/les activité(s) correspondante(s) au highlight
 */
export function resolveHighlight(
  highlight: Highlight,
  activities: Activity[],
): StatHighlight | null {
  const filteredActivities = highlight.tags?.length
    ? activities.filter((a) => a.tags?.some((tag) => highlight.tags?.includes(tag)))
    : activities

  if (!filteredActivities.length) return null

  switch (highlight.type) {
    // Renvoie la/les activité(s) avec la plus longue durée
    case 'longest-duration': {
      const activity = filteredActivities.reduce((max, a) =>
        (a.duration ?? 0) > (max?.duration ?? 0) ? a : max,
      )

      if (!activity?.duration) return null

      return {
        label: highlight.label,
        value: `${formatDuration(activity.duration)}`,
        activities: [activity],
      }
    }

    // Renvoie la/les activité(s) avec la plus grande distance
    case 'longest-distance': {
      const activity = filteredActivities.reduce((max, a) =>
        (a.distance ?? 0) > (max?.distance ?? 0) ? a : max,
      )

      if (!activity?.distance) return null

      return {
        label: highlight.label,
        value: `${activity.distance} km`,
        activities: [activity],
      }
    }

    // Renvoie la liste des activités correspondant au tag renseigné
    case 'tag-activities': {
      if (!highlight.tags?.length) return null

      const matchedActivities = filteredActivities
        .filter((a) => a.tags?.some((tag) => highlight.tags!.includes(tag)))
        .sort((a, b) => a.date.localeCompare(b.date))

      if (!matchedActivities.length) return null

      return {
        label: highlight.label,
        value: matchedActivities.length,
        activities: matchedActivities,
      }
    }

    // Renvoie le nombre d'activités correspondant au tag
    case 'count': {
      return {
        label: highlight.label,
        value: filteredActivities.length,
        activities: [],
      }
    }

    default:
      return null
  }
}
