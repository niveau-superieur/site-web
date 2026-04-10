<script setup lang="ts">
import { programs } from '@/data/activity/programs'
import { colorTags600, colorTags800 } from '@/theme/colorTags'
import type { Activity, Program } from '@/types/activity'
import { formatDateFR, formatDuration } from '@/utils/formatUtils'
import { computed, onMounted, onUnmounted } from 'vue'

// PROPS
const props = defineProps<{
  activity: Activity
}>()

// EMIT
const emit = defineEmits(['close'])

// PLAIN VARS
const programsMap = Object.fromEntries(programs.map((p: Program) => [p.id, p]))

// COMPUTED
const activityPrograms = computed(() =>
  props.activity.programs.map((id) => programsMap[id]).filter((p) => p !== undefined),
)

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
    <div
      class="bg-gray-900 p-6 rounded-xl w-150 max-h-200 overflow-auto border border-gray-800"
      @click.stop
    >
      <div class="flex flex-wrap mb-4 justify-between">
        <div class="flex flex-wrap gap-1">
          <span
            v-for="program in activityPrograms"
            :key="program.id"
            :class="['px-2 rounded-sm', colorTags800[program.tagColor]]"
          >
            {{ program.name }}
          </span>
        </div>
        <p>{{ formatDateFR(activity.date) }}</p>
      </div>
      <h2 class="text-xl font-bold mb-2">{{ activity.name }}</h2>
      <div class="flex flex-wrap gap-1 mb-2">
        <span
          v-for="tag in activity.tags"
          :key="tag.label"
          :class="['px-1 rounded text-sm', colorTags600[tag.color]]"
        >
          {{ tag.label }}
        </span>
      </div>

      <p v-if="activity.duration">
        <strong>Durée :</strong> {{ formatDuration(activity.duration) }}
      </p>

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
