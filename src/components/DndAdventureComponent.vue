<script setup lang="ts">
import type { DndAdventure } from '@/types/dndAdventure'

defineProps<{ dndAdventure: DndAdventure; reverse?: boolean }>()
</script>

<template>
  <a
    :href="dndAdventure.notionUrl"
    target="_blank"
    :class="[
      'flex gap-6 rounded-xl p-6 transition hover:scale-105',
      reverse ? 'flex-row-reverse border-2 border-gray-900' : 'flex-row bg-gray-900',
    ]"
  >
    <div class="w-1/2 h-full">
      <img
        class="h-full w-full rounded-md object-cover"
        :src="dndAdventure.image"
        :alt="dndAdventure.title"
      />
    </div>

    <div class="flex-1 flex-col">
      <h2 class="text-2xl mb-2 font-bold">{{ dndAdventure.title }}</h2>
      <p class="whitespace-pre-line">{{ dndAdventure.description }}</p>
    </div>
  </a>
</template>
