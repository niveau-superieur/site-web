<script setup lang="ts">
import type { Video } from '@/types/video'

defineProps<{ video: Video; reverse?: boolean }>()
</script>

<template>
  <div
    :class="[
      'flex flex-col md:gap-6 gap-4 rounded-xl p-4 md:p-6',
      reverse ? 'lg:flex-row-reverse card-reverse' : 'lg:flex-row card',
    ]"
  >
    <div class="flex-1 aspect-video">
      <iframe
        class="h-full w-full rounded-md"
        :src="`https://www.youtube.com/embed/${video.youtubeId}`"
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>

    <div class="flex-1 flex flex-col gap-4 md:gap-6">
      <h2 class="text-lg md:text-2xl font-bold">{{ video.title }}</h2>
      <p class="text-sm md:text-base whitespace-pre-line">{{ video.description }}</p>

      <div v-if="video.costs" class="space-y-1">
        <h3 class="font-semibold">{{ video.costs.label }}</h3>
        <ul class="list-disc list-inside text-sm md:text-base">
          <li v-for="item in video.costs.items" :key="item.label">
            <a :href="item.url" target="_blank" class="link hover:underline">{{ item.label }}</a>
          </li>
        </ul>
      </div>

      <div v-if="video.links" class="space-y-1">
        <h3 class="font-semibold">{{ video.links.label }}</h3>
        <ul class="list-disc list-inside text-sm md:text-base">
          <li v-for="item in video.links.items" :key="item.label">
            <a :href="item.url" target="_blank" class="link hover:underline">{{ item.label }}</a>
          </li>
        </ul>
      </div>

      <div v-if="video.misc?.length" class="space-y-1">
        <h3 class="font-semibold">Divers</h3>
        <ul class="list-disc list-inside text-sm md:text-base">
          <li v-for="item in video.misc" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
