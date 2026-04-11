<script setup lang="ts">
import type { Book } from '@/types/book'

// PROPS
defineProps<{
  book: Book
}>()

// EMIT
const emit = defineEmits<{
  (e: 'click', book: Book): void
}>()
</script>

<template>
  <div
    class="bg-gray-900 border border-gray-800 rounded-xl p-3 cursor-pointer hover:scale-105 hover:bg-gray-700 transition flex flex-col h-full"
    @click="emit('click', book)"
  >
    <div class="flex justify-center">
      <img :src="book.cover" :alt="book.title" class="w-auto h-70 object-cover rounded-md" />
    </div>

    <div class="mt-3 flex-1 flex items-center justify-center text-center">
      <h3 class="text-xl font-bold line-clamp-2">
        {{ book.title }}
      </h3>
    </div>
  </div>
</template>
