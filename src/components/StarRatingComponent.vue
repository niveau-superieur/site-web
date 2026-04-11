<script setup lang="ts">
// PROPS
defineProps<{
  rating: number
}>()

// FUNCTIONS
const ratingToArray = (rating: number): string[] => {
  const stars = []

  for (let i = 0; i < 5; i++) {
    const diff = rating - i

    if (diff >= 1) stars.push('full')
    else if (diff >= 0.5) stars.push('half')
    else stars.push('empty')
  }
  return stars
}
</script>

<template>
  <div class="flex gap-1 text-yellow-400 text-xl">
    <span v-for="(star, index) in ratingToArray(rating)" :key="index">
      <span v-if="star === 'full'">★</span>
      <span v-else-if="star === 'half'">⯨</span>
      <span v-else class="text-gray-400">☆</span>
    </span>
  </div>
</template>
