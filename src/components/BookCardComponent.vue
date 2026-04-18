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
    class="card-hover rounded-xl p-2 md:p-3 cursor-pointer md:hover:scale-105 transition flex flex-col h-full"
    @click="emit('click', book)"
  >
    <div class="flex justify-center">
      <img :src="book.cover" :alt="book.title" class="w-full aspect-2/3 object-cover rounded-md" />
    </div>

    <div class="mt-2 md:mt-3 flex-1 flex items-center justify-center text-center">
      <h3 class="text-sm md:text-xl font-bold line-clamp-2">{{ book.title }}</h3>
    </div>
  </div>
</template>
