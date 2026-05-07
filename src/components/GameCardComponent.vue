<script setup lang="ts">
import type { Game } from '@/types/game'
import { formatDateFR, formatDuration } from '@/utils/formatUtils'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import AchievementModalComponent from './AchievementModalComponent.vue'
import ProgressBarComponent from './ProgressBarComponent.vue'

// PROPS
const props = defineProps<{
  game: Game
  reverse?: boolean
}>()

// PLAIN VARS
let observer: ResizeObserver // Observer du achievementsContainer pour mesurer la largeur et ajuster le nombre d'icônes à afficher

const onClick = () => {
  selectedGame.value = props.game
}

// REACTIVE VARS
const selectedGame = ref<Game | null>(null)

const achievementsContainer = ref<HTMLElement | null>(null) // Récupère le bloc affichant les icônes des succès

const containerWidth = ref(0)

// COMPUTED
const unlockedAchievements = computed(() =>
  props.game.achievements
    .filter((a) => a.unlockDate)
    .sort((a, b) => (b.unlockDate || '').localeCompare(a.unlockDate || '')),
)

const progress = computed(() => {
  const total = props.game.achievements.length
  const unlocked = unlockedAchievements.value.length

  if (total === 0) return 0
  return Math.round((unlocked / total) * 100)
})

const totalAchievements = computed(() => props.game.achievements.length)

const displayedCount = computed(() => displayedAchievements.value.length)

const hiddenCount = computed(() => {
  return totalAchievements.value - displayedCount.value
})

const maxDisplayed = computed(() => {
  if (!containerWidth.value) return 0

  const itemWidth = 72 // correspond à la taille des images des achievements (w-18 = 72px)
  const gap = 16 // correspond au gap entre les images des achievements (gap-4 = 16px)

  return Math.floor((containerWidth.value + gap) / (itemWidth + gap))
})

const displayedAchievements = computed(() =>
  unlockedAchievements.value.slice(0, maxDisplayed.value),
)

// LIFECYCLE
onMounted(() => {
  observer = new ResizeObserver((entries) => {
    const entry = entries[0]
    if (!entry) return

    containerWidth.value = entry.contentRect.width
  })

  if (achievementsContainer.value) {
    observer.observe(achievementsContainer.value)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    :class="[
      'rounded-xl card-reverse transition hover:scale-105 p-4 h-full flex',
      reverse ? 'md:flex-row-reverse card-reverse' : 'card',
    ]"
  >
    <div class="flex flex-col lg:flex-row gap-4 items-stretch w-full">
      <div class="w-full lg:w-1/2 flex items-center">
        <div class="w-full overflow-hidden flex items-center">
          <img :src="game.image" alt="" class="w-full max-h-64 object-contain rounded-xl" />
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex flex-col justify-center h-full">
        <h2 class="text-heading md:mb-2">
          {{ game.label }}
        </h2>

        <div class="flex flex-col sm:flex-row gap-4">
          <div>
            <span class="font-semibold">TEMPS DE JEU TOTAL</span>
            <div class="opacity-70">
              {{ formatDuration(game.playtime) }}
            </div>
          </div>

          <div>
            <div class="font-semibold">PÉRIODE DE JEU</div>
            <div class="opacity-70">
              {{ formatDateFR(game.startDate) }} - {{ formatDateFR(game.endDate) }}
            </div>
          </div>
        </div>

        <div class="w-full space-y-2">
          <ProgressBarComponent
            :label="`SUCCÈS (${unlockedAchievements.length} / ${game.achievements.length})`"
            :progress="progress"
          />

          <div ref="achievementsContainer" class="flex items-center gap-4">
            <div
              v-for="a in displayedAchievements"
              :key="a.label"
              class="group relative w-18 aspect-square rounded border flex items-center justify-center transition-transform hover:scale-105"
            >
              <img :src="a.image" :class="['max-w-full max-h-full object-contain']" />
              <!-- Tooltip pour les données résumées du succès -->
              <div
                class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-md border bg-main p-3 opacity-0 duration-300 delay-500 group-hover:opacity-100"
              >
                <div class="font-semibold break-all">
                  {{ a.label }}
                </div>
                <div class="text-xs">Débloqué le {{ a.unlockDate }}</div>

                <div class="mt-1 text-xs break-all">
                  {{ a.description }}
                </div>
              </div>
            </div>

            <div
              v-if="hiddenCount > 0"
              @click="onClick"
              class="hover-secondary w-18 aspect-square flex items-center justify-center rounded-md border cursor-pointer transition"
            >
              <span class="font-semibold">+{{ hiddenCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AchievementModalComponent v-if="selectedGame" :game="game" @close="selectedGame = null" />
</template>
