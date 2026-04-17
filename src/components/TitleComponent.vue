<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <h1 class="text-2xl md:text-4xl font-bold mb-4">
    {{ label }}
  </h1>
</template>
