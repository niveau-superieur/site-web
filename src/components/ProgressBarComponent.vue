<script setup lang="ts">
defineProps<{
  label: string
  progress: number
}>()
</script>

<template>
  <div class="card rounded-md p-4 w-full">
    <span class="text-subheading text-center block mb-3">{{ label }}</span>

    <div class="relative w-full flex items-center">
      <div class="absolute -left-3 w-8 h-16 flex items-center justify-center">
        <div class="w-full h-full overflow-hidden rounded-md">
          <img
            v-if="progress === 100"
            src="@/assets/images/achievement100.png"
            class="w-full h-full object-contain dark:block"
          />
        </div>
      </div>

      <div class="progress-bar-bg w-full h-4 rounded-full">
        <div class="progress-bar-content h-4 rounded-full" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>
