<script setup lang="ts">
import BookCardComponent from '@/components/BookCardComponent.vue'
import BookModalComponent from '@/components/BookModalComponent.vue'
import SwitchComponent from '@/components/SwitchComponent.vue'
import TableComponent, { type Column } from '@/components/TableComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
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
  <div class="flex justify-between align-middle">
    <TitleComponent :label="`Toutes les lectures (${books.length})`" />

    <SwitchComponent v-model="displayMode" :options="displayOptions" />
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
  <div v-else class="grid grid-cols-8 gap-4">
    <BookCardComponent
      v-for="book in sortedData"
      :key="book.title"
      :book="book"
      @click="onRowClick"
    />
  </div>

  <BookModalComponent v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" />
</template>
