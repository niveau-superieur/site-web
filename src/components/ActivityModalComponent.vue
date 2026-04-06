<script setup lang="ts">
import { colorTags600 } from '@/data/programs/colorTags'
import { onMounted, onUnmounted } from 'vue'
import type { CalendarActivity } from './PlanningCalendarComponent.vue'

// PROPS
defineProps<{
  activity: CalendarActivity
}>()

// EMIT
const emit = defineEmits(['close'])

// LIFECYCLE
onMounted(() => {
  document.body.style.overflow = 'hidden' // Bloque le scrolling du contenu derrière la modale
})

onUnmounted(() => {
  document.body.style.overflow = '' // Débloque le scrolling à la fermeture de la modale
})
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30"
    @click="emit('close')"
  >
    <div class="bg-gray-900 p-6 rounded-xl w-150 overflow-auto border border-gray-800" @click.stop>
      <div class="flex flex-wrap mb-4 justify-between">
        <span :class="['px-2 rounded-sm', activity.programTagColor]">
          {{ activity.programName }}
        </span>
        <p>{{ activity.start }}</p>
      </div>
      <h2 class="text-xl font-bold mb-2">{{ activity.title }}</h2>
      <div class="flex flex-wrap gap-1 mb-2">
        <span
          v-for="tag in activity.tags"
          :key="tag.label"
          :class="['px-1 rounded text-sm', colorTags600[tag.color]]"
        >
          {{ tag.label }}
        </span>
      </div>

      <p v-if="activity.duration"><strong>Durée :</strong> {{ activity.duration }}</p>

      <p v-if="activity.distance"><strong>Distance :</strong> {{ activity.distance }} km</p>

      <div class="mt-2 h-px bg-gray-800 mx-16"></div>

      <p class="m-2 whitespace-pre-line">
        {{ activity.description }}
      </p>

      <div class="flex justify-end">
        <button
          @click="emit('close')"
          class="mt-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 justify-end-safe"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>
