<script setup lang="ts">
import VideoComponent from '@/components/VideoComponent.vue'
import { videosDefis } from '@/data/videosDefis'
import { videosDivers } from '@/data/videosDivers'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const videos = computed(() => {
  return route.params.type === 'divers' ? videosDivers : videosDefis
})
</script>

<template>
  <VideoComponent
    v-for="(video, index) in videos"
    :key="video.youtubeId"
    :reverse="index % 2 === 1"
    :video="video"
    class="mt-4"
  />
</template>
