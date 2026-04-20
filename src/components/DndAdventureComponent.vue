<script setup lang="ts">
import type { DndAdventure } from '@/types/dndAdventure'

defineProps<{ dndAdventure: DndAdventure; reverse?: boolean }>()
</script>

<template>
  <a
    :href="dndAdventure.notionUrl"
    target="_blank"
    :class="[
      'flex flex-col md:flex-row items-center gap-4 md:gap-6 rounded-xl p-4 md:p-6 transition md:hover:scale-105',
      reverse ? 'md:flex-row-reverse card-reverse' : 'card',
    ]"
  >
    <div class="w-full md:w-1/2">
      <div class="aspect-video max-h-64 w-full flex overflow-hidden">
        <img
          class="h-full w-full object-contain rounded-xl"
          :src="dndAdventure.image"
          :alt="dndAdventure.title"
        />
      </div>
    </div>

    <div class="flex-1 flex-col">
      <h2 class="text-xl md:text-2xl mb-2 font-bold">{{ dndAdventure.title }}</h2>
      <p class="text-sm md:text-base whitespace-pre-line">{{ dndAdventure.description }}</p>
    </div>
  </a>
</template>
