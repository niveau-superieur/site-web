<script setup lang="ts">
import type { Book } from '@/types/book'
import { formatDuration } from '@/utils/formatUtils'
import { onMounted, onUnmounted } from 'vue'
import StarRatingComponent from './StarRatingComponent.vue'

// PROPS
defineProps<{
  book: Book
}>()

// EMIT
const emit = defineEmits<{
  (e: 'close'): void
}>()

// LIFECYCLE
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-200 backdrop-blur-sm bg-blur p-4"
    @click="emit('close')"
  >
    <div class="card p-4 md:p-6 rounded-xl md:max-w-2xl max-h-full overflow-y-auto" @click.stop>
      <div class="flex flex-col items-center text-center mb-4">
        <img :src="book.cover" :alt="book.title" class="w-32 md:w-60 h-auto rounded-sm" />

        <h2 class="text-lg md:text-2xl font-bold mt-4">
          {{ book.title }}
        </h2>
      </div>

      <p class="mb-2 text-sm md:text-base"><strong>Auteur :</strong> {{ book.author }}</p>

      <p class="mb-2 text-sm md:text-base"><strong>Pages :</strong> {{ book.pageCount }}</p>

      <p class="mb-2 text-sm md:text-base">
        <strong>Temps de lecture :</strong>
        {{ formatDuration(book.readingTime) }}
      </p>

      <div class="mb-2 flex items-center gap-2 text-sm md:text-base">
        <strong>Note :</strong>
        <StarRatingComponent :rating="book.rating" />
      </div>
      <div class="mt-4 h-px separator"></div>

      <p class="mt-4 whitespace-pre-line text-sm md:text-base">
        {{ book.summary }}
      </p>

      <div class="flex justify-end mt-6">
        <button @click="emit('close')" class="button px-4 py-2 rounded">Fermer</button>
      </div>
    </div>
  </div>
</template>
