<script setup lang="ts">
import type { Game } from '@/types/game'
import { formatDateFR } from '@/utils/formatUtils'
import { computed, onMounted, onUnmounted } from 'vue'

// PROPS
const props = defineProps<{
  game: Game
}>()

// EMIT
const emit = defineEmits<{
  (e: 'close'): void
}>()

// COMPUTED
const sortedAchievements = computed(() => {
  return [...props.game.achievements].sort((a, b) => {
    if (a.unlockDate && !b.unlockDate) return -1
    if (!a.unlockDate && b.unlockDate) return 1

    if (a.unlockDate && b.unlockDate) {
      return b.unlockDate.localeCompare(a.unlockDate)
    }

    return 0
  })
})

// LIFECYCLE
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-200 backdrop-blur-sm bg-blur p-4"
    @click="emit('close')"
  >
    <div
      class="card p-4 md:p-6 rounded-xl md:max-w-2xl max-h-full overflow-y-auto space-y-4 w-full"
      @click.stop
    >
      <div class="flex flex-col md:flex-row items-center text-center gap-3">
        <img :src="game.image" class="w-16 h-16 object-contain rounded" />
        <h2 class="text-heading">
          {{ game.label }}
        </h2>
      </div>

      <div class="space-y-2">
        <div
          v-for="achievement in sortedAchievements"
          :key="achievement.label"
          class="flex gap-3 items-center border rounded-lg p-2 nav-item-active"
        >
          <img
            :src="achievement.image"
            class="w-14 h-14 object-contain rounded shrink-0"
            :class="!achievement.unlockDate && 'opacity-30'"
          />
          <div class="flex-1 text-sm md:text-base">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-3">
              <div class="font-semibold break-all overflow-hidden">
                {{ achievement.label }}
              </div>

              <div
                v-if="achievement.unlockDate"
                class="opacity-60 text-xs md:text-sm shrink-0 md:text-right"
              >
                Débloqué le {{ formatDateFR(achievement.unlockDate) }}
              </div>
            </div>

            <div class="opacity-70 break-all overflow-hidden">
              {{ achievement.description }}
            </div>

            <div v-if="achievement.unlockPercentage" class="opacity-60 mt-1 text-xs md:text-sm">
              {{ achievement.unlockPercentage }}% des joueurs ont débloqué ce succès
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button @click="emit('close')" class="button px-4 py-2 rounded">Fermer</button>
      </div>
    </div>
  </div>
</template>
