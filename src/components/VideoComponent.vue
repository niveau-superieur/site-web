<script setup lang="ts">
import type { Video } from '@/types/video'

defineProps<{ video: Video; reverse?: boolean }>()
</script>

<template>
  <div
    :class="[
      'flex gap-6 rounded-xl p-6',
      reverse ? 'flex-row-reverse border-2 border-gray-900' : 'flex-row bg-gray-900',
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

    <div class="flex-1 flex flex-col gap-6">
      <h2 class="text-2xl font-bold">{{ video.title }}</h2>
      <p class="whitespace-pre-line">{{ video.description }}</p>

      <div v-if="video.costs" class="space-y-1">
        <h3 class="font-semibold">{{ video.costs.label }}</h3>
        <ul class="list-disc list-inside">
          <li v-for="item in video.costs.items" :key="item.label">
            <a :href="item.url" target="_blank" class="text-blue-400 hover:underline">{{
              item.label
            }}</a>
          </li>
        </ul>
      </div>

      <div v-if="video.links" class="space-y-1">
        <h3 class="font-semibold">{{ video.links.label }}</h3>
        <ul class="list-disc list-inside">
          <li v-for="item in video.links.items" :key="item.label">
            <a :href="item.url" target="_blank" class="text-blue-400 hover:underline">{{
              item.label
            }}</a>
          </li>
        </ul>
      </div>

      <div v-if="video.misc?.length" class="space-y-1">
        <h3 class="font-semibold">Divers</h3>
        <ul class="list-disc list-inside">
          <li v-for="item in video.misc" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
