<script setup lang="ts">
defineProps<{
  label: string
  progress: number
}>()
</script>

<template>
  <div class="card rounded-md p-4 m-2 w-full">
    <span class="text-2xl text-center block mb-3">{{ label }}</span>
    <div class="progress-bar-bg w-full h-4 rounded-full">
      <div class="progress-bar-content h-4 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>
