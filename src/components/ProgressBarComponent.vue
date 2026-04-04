<script setup lang="ts">
defineProps<{
  label: string
  progress: number
}>()
</script>

<template>
  <div class="border-2 border-gray-900 rounded-md p-4 m-2 w-full">
    <span class="text-2xl text-center block mb-3">{{ label }}</span>
    <div class="w-full h-4 bg-gray-200 rounded-full">
      <div class="h-4 bg-green-500 rounded-full" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>
