<script setup lang="ts">
import BookCardComponent from '@/components/BookCardComponent.vue'
import BookModalComponent from '@/components/BookModalComponent.vue'
import SwitchComponent from '@/components/SwitchComponent.vue'
import TableComponent, { type Column } from '@/components/TableComponent.vue'
import { useTable } from '@/composables/useTable'
import { books } from '@/data/books'
import type { Book } from '@/types/book'
import { formatDuration, formatRating } from '@/utils/formatUtils'
import { ref } from 'vue'

// PLAIN VARS
const columns: Column<Book>[] = [
  { label: 'Titre', field: 'title', sortable: true },
  { label: 'Auteur', field: 'author', sortable: true },
  { label: 'Pages', field: 'pageCount', sortable: true },
  { label: 'Temps', field: 'readingTime', sortable: true, format: formatDuration },
  { label: 'Note', field: 'rating', sortable: true, format: formatRating },
]

const displayOptions = [
  { label: 'Grille', value: 'grid' },
  { label: 'Tableau', value: 'table' },
]

// REACTIVE VARS
const selectedBook = ref<Book | null>(null)
const displayMode = ref<'table' | 'grid'>('grid')

// COMPOSABLES
const { sortField, sortDirection, setSort, sortedData } = useTable<Book>(books)

// FUNCTIONS
const onRowClick = (book: Book) => {
  selectedBook.value = book
}
</script>

<template>
  <div class="px-4 md:px-0 space-y-4">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <h1 class="text-main-heading">Toutes les lectures ({{ books.length }})</h1>
      <SwitchComponent v-model="displayMode" :options="displayOptions" class="mb-4 md:mb-0" />
    </div>

    <TableComponent
      v-if="displayMode === 'table'"
      :columns="columns"
      :data="sortedData"
      :sort-field="sortField"
      :sort-direction="sortDirection"
      @sort="setSort"
      @row-click="onRowClick"
    />
    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
    >
      <BookCardComponent
        v-for="book in sortedData"
        :key="book.title"
        :book="book"
        @click="onRowClick"
      />
    </div>

    <BookModalComponent v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" />
  </div>
</template>
