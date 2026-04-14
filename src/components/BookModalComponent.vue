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

// LOCK SCROLL
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30"
    @click="emit('close')"
  >
    <div
      class="bg-gray-900 p-6 rounded-xl w-150 max-h-200 overflow-auto border border-gray-800"
      @click.stop
    >
      <div class="flex flex-col items-center text-center mb-4">
        <img :src="book.cover" :alt="book.title" class="w-60 h-auto rounded-sm" />

        <h2 class="text-2xl font-bold m-4">
          {{ book.title }}
        </h2>
      </div>

      <p class="mb-2"><strong>Auteur :</strong> {{ book.author }}</p>

      <p class="mb-2"><strong>Pages :</strong> {{ book.pageCount }}</p>

      <p class="mb-2">
        <strong>Temps de lecture :</strong>
        {{ formatDuration(book.readingTime) }}
      </p>

      <div class="mb-2 flex items-center gap-2">
        <strong>Note :</strong>
        <StarRatingComponent :rating="book.rating" />
      </div>
      <div class="mt-4 h-px bg-gray-800"></div>

      <p class="mt-4 whitespace-pre-line">
        {{ book.summary }}
      </p>

      <div class="flex justify-end mt-6">
        <button @click="emit('close')" class="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>
