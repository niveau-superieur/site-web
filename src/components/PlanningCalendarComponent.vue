<script setup lang="ts">
import type { ActivityTag } from '@/data/activity/activityTags'
import { activities, programs, type ProgramId } from '@/data/activity/programs'
import { colorTags600, colorTags800 } from '@/theme/colorTags'
import type { Program } from '@/types/activity'
import { formatDuration } from '@/utils/formatUtils'
import type { EventClickArg, EventContentArg, EventInput, EventMountArg } from '@fullcalendar/core'
import frLocale from '@fullcalendar/core/locales/fr'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/vue3'
import { computed, onMounted, ref } from 'vue'

// EMIT
const emit = defineEmits(['activity-click'])

// PLAIN VARS
const programsMap = Object.fromEntries(programs.map((p: Program) => [p.id, p]))

// REACTIVE VARS
const calendarRef = ref<InstanceType<typeof FullCalendar> | null>(null)
const isMobile = ref(false)
const currentView = ref('dayGridMonth')

// COMPUTED
const events = computed<EventInput[]>(() =>
  activities.map((activity) => ({
    title: activity.name,
    start: activity.date,

    extendedProps: {
      activity,
    },
  })),
)

const calendarOptions = computed(() => ({
  plugins: [dayGridPlugin, listPlugin], // Gestion de la vue mois/semaine en grille
  initialView: 'dayGridMonth', // Affiche la vue mensuelle en grille
  locales: [frLocale], // Champs en français
  firstDay: 1, // Premier jour : lundi
  aspectRatio: isMobile.value ? 1 : 2.5, // Ratio largeur/hauteur
  headerToolbar: isMobile.value
    ? {
        left: 'title',
        right: 'prev,next',
      }
    : {
        left: 'title', // Ce qui s'affiche sur la gauche du header
        right: 'prev today next', // Ce qui s'affiche sur la droite du header
      },
  eventColor: '#1f2937', // Gestion de la couleur d'un évènement
  eventBorderColor: '#374151', // Gestion de la culeur de la border d'un évènement
  showNonCurrentDates: false, // Masque les jours du mois précédent et du mois suivant
  events: events.value, // Ensemble des évènements à placer dans le calendrier
  displayEventTime: false, // Masque l'affichage de "Toute la journée" en vue listMonth
  listDaySideFormat: false as const, // Masque l'affichage du jour de la semaine en vue listMonth

  // Gestion de l'affichage des évènements dans le calendrier
  eventContent(arg: EventContentArg) {
    const tags = arg.event.extendedProps.activity.tags ?? []
    const programs =
      arg.event.extendedProps.activity.programs?.map((id: ProgramId) => programsMap[id]) ?? []

    const tagsProgram = programs
      .map(
        (program: Program) =>
          `<span class="px-1 mr-1 rounded-md ${colorTags800[program.tagColor]}">
            ${program.name}
          </span>`,
      )
      .join('')

    const tagsHtml = tags
      .map(
        (tag: ActivityTag) =>
          `<span class="px-1 rounded-md mr-1 text-xs ${colorTags600[tag.color]}">
            ${tag.label}
          </span>`,
      )
      .join('')

    if (isMobile.value) {
      return {
        html: `
        <div class="m-1 text-xs">
          <div class="font-bold">
            ${arg.event.title}
          </div>
        </div>
      `,
      }
    } else {
      return {
        html: `
        <div class="m-1 whitespace-normal">
          <div class="flex">
            ${tagsProgram}
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
    }
  },

  // Gestion de l'évènement après insertion dans le DOM
  eventDidMount(info: EventMountArg) {
    const duration = info.event.extendedProps.activity.duration
    const distance = info.event.extendedProps.activity.distance
    const description = info.event.extendedProps.activity.description

    const tooltip = [
      duration ? `Durée : ${formatDuration(duration)}` : '',
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
    emit('activity-click', info.event.extendedProps.activity)
  },
}))

// LIFECYCLE
onMounted(() => {
  const mobileWidth = window.matchMedia('(max-width: 1024px)')
  isMobile.value = mobileWidth.matches

  currentView.value = isMobile.value ? 'listMonth' : 'dayGridMonth'

  const api = calendarRef.value?.getApi()
  if (api) api.changeView(currentView.value)

  mobileWidth.addEventListener('change', (e) => {
    isMobile.value = e.matches
    setView(e.matches ? 'listMonth' : 'dayGridMonth')
  })
})

// FUNCTIONS
function setView(view: string) {
  const api = calendarRef.value?.getApi()
  if (!api) return

  currentView.value = view
  api.changeView(view)
}
</script>

<template>
  <FullCalendar ref="calendarRef" :options="calendarOptions" />
</template>
