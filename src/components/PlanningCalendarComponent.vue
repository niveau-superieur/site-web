<script setup lang="ts">
import type { ActivityTag } from '@/data/programs/activityTags'
import { colorTags600, colorTags800 } from '@/data/programs/colorTags'
import { programs } from '@/data/programs/programs'
import { formatDateFR, formatDuration } from '@/utils/formatUtils'
import type { EventClickArg, EventContentArg, EventInput, EventMountArg } from '@fullcalendar/core'
import frLocale from '@fullcalendar/core/locales/fr'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/vue3'
import { computed } from 'vue'

// TYPES
export type CalendarActivity = {
  title: string
  start: string
  programName: string
  programTagColor: string
  description?: string
  duration?: string
  distance?: number
  tags?: ActivityTag[]
}

// EMIT
const emit = defineEmits(['activity-click'])

// COMPUTED
const events = computed<EventInput[]>(() =>
  programs.flatMap((program) =>
    program.activities.map((activity) => ({
      title: activity.name,
      start: activity.date,

      extendedProps: {
        programName: program.name,
        programTagColor: program.tagColor ? colorTags800[program.tagColor] : colorTags800.red,
        description: activity.description,
        duration: activity.duration,
        distance: activity.distance,
        tags: activity.tags,
      },
    })),
  ),
)

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin], // Gestion de la vue mois/semaine en grille
  initialView: 'dayGridMonth', // Affiche la vue mensuelle en grille
  locales: [frLocale], // Champs en français
  firstDay: 1, // Premier jour : lundi
  aspectRatio: 2.5, // Ratio largeur/hauteur
  headerToolbar: {
    left: 'title', // Ce qui s'affiche sur la gauche du header
    right: 'prev today next', // Ce qui s'affiche sur la droite du header
  },
  eventColor: '#1f2937', // Gestion de la couleur d'un évènement
  eventBorderColor: '#374151', // Gestion de la culeur de la border d'un évènement

  events: events.value, // Ensemble des évènements à placer dans le calendrier

  // Gestion de l'affichage des évènements dans le calendrier
  eventContent(arg: EventContentArg) {
    const tags = arg.event.extendedProps.tags ?? []
    const programTagColor = arg.event.extendedProps.programTagColor

    const tagProgram = `<span class=" px-1 rounded-md ${programTagColor}">
            ${arg.event.extendedProps.programName}
          </span>`

    const tagsHtml = tags
      .map(
        (tag: ActivityTag) =>
          `<span class="px-1 rounded-md mr-1 text-xs ${colorTags600[tag.color]}">
            ${tag.label}
          </span>`,
      )
      .join('')

    return {
      html: `
        <div class="m-1 whitespace-normal">
        <div class="flex">
          ${tagProgram}
        </div>
        <div class="font-bold">
          ${arg.event.title}
        </div>
        <div class="flex">
          ${tagsHtml}
        </div>
        </div>
      `,
    }
  },

  // Gestion de l'évènement après insertion dans le DOM
  eventDidMount(info: EventMountArg) {
    const { duration, distance, description } = info.event.extendedProps

    const tooltip = [
      duration ? `Durée : ${duration} min` : '',
      distance ? `Distance : ${distance} km` : '',
      description ? `\n${description}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    if (tooltip) {
      info.el.title = tooltip
    }
  },

  // Gestion du clic sur un évènement
  eventClick(info: EventClickArg) {
    const activity: CalendarActivity = {
      title: info.event.title,
      start: formatDateFR(info.event.start!),
      programName: info.event.extendedProps.programName,
      programTagColor: info.event.extendedProps.programTagColor,
      description: info.event.extendedProps.description,
      duration: formatDuration(info.event.extendedProps.duration),
      distance: info.event.extendedProps.distance,
      tags: info.event.extendedProps.tags,
    }
    emit('activity-click', activity)
  },
}))
</script>

<template>
  <FullCalendar :options="calendarOptions" />
</template>
