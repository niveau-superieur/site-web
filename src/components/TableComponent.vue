<script setup lang="ts" generic="T">
// TYPES
export type Column<T> = {
  label: string
  field: keyof T
  sortable?: boolean
  format?: (value: any, row: T) => string
}

// PROPS
defineProps<{
  columns: Column<T>[]
  data: T[]
  sortField: keyof T | null
  sortDirection: 'asc' | 'desc' | null
}>()

// EMIT
const emit = defineEmits<{
  (e: 'sort', field: keyof T): void
  (e: 'row-click', row: T): void
}>()

// FUNCTIONS
const toggleSort = (field: keyof T, sortable?: boolean) => {
  if (!sortable) return
  emit('sort', field)
}
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full min-w-150 border-collapse text-sm md:text-base">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="String(column.field)"
            class="py-2 md:py-3 px-2 md:px-3 cursor-pointer select-none border bg-gray-900 border-gray-700 whitespace-nowrap"
            @click="toggleSort(column.field, column.sortable)"
          >
            {{ column.label }}

            <span v-if="sortField === column.field">
              {{ sortDirection === 'asc' ? '▲' : '▼' }}
            </span>

            <span v-else-if="column.sortable" class="opacity-30">⇅</span>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="row in data"
          :key="JSON.stringify(row)"
          class="hover:bg-gray-900"
          @click="emit('row-click', row)"
        >
          <td
            v-for="column in columns"
            :key="String(column.field)"
            class="py-2 px-2 md:px-3 border border-gray-800 whitespace-nowrap"
          >
            <slot :name="String(column.field)" :value="row[column.field]" :row="row">
              {{ column.format ? column.format(row[column.field], row) : row[column.field] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
