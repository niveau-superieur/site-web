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
    class="fixed inset-0 flex items-center justify-center z-200 backdrop-blur-sm bg-blur p-4"
    @click="emit('close')"
  >
    <div class="card p-4 md:p-6 rounded-xl md:max-w-2xl max-h-full overflow-y-auto" @click.stop>
      <div class="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
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
      <h2 class="text-lg sm:text-xl font-bold mb-2">{{ activity.name }}</h2>
      <div class="flex flex-wrap gap-1 mb-2">
        <span
          v-for="tag in activity.tags"
          :key="tag.label"
          :class="['px-2 py-0.5 rounded text-xs md:text-sm', colorTags600[tag.color]]"
        >
          {{ tag.label }}
        </span>
      </div>

      <p v-if="activity.duration">
        <strong>Durée :</strong> {{ formatDuration(activity.duration) }}
      </p>

      <p v-if="activity.distance"><strong>Distance :</strong> {{ activity.distance }} km</p>

      <div class="separator mt-2 h-px mx-16"></div>

      <p class="text-sm md:text-base m-2 whitespace-pre-line">
        {{ activity.description }}
      </p>

      <div class="flex justify-end">
        <button @click="emit('close')" class="button px-4 py-2 rounded">Fermer</button>
      </div>
    </div>
  </div>
</template>
