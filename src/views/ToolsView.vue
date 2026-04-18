<script setup lang="ts">
import TableComponent, { type Column } from '@/components/TableComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { useTable } from '@/composables/useTable'
import { tools } from '@/data/tools'
import type { Tool } from '@/types/tool'
import { formatPrice, formatToolType, truncateText } from '@/utils/formatUtils'

// PLAIN VARS
const columns: Column<Tool>[] = [
  { label: 'Nom', field: 'name', sortable: false },
  { label: 'Prix', field: 'price', sortable: true, format: formatPrice },
  { label: 'Utilisation', field: 'usage', sortable: false },
  { label: 'Type', field: 'type', sortable: true, format: formatToolType },

  { label: 'Lien', field: 'url', sortable: false },
]

// COMPOSABLES
const { sortField, sortDirection, setSort, sortedData } = useTable<Tool>(tools)
</script>

<template>
  <div class="flex justify-between align-middle">
    <TitleComponent :label="`Matériel et logiciels utilisés`" />
  </div>

  <TableComponent
    :columns="columns"
    :data="sortedData"
    :sort-field="sortField"
    :sort-direction="sortDirection"
    @sort="setSort"
  >
    <template #url="{ value }">
      <a
        v-if="typeof value === 'string'"
        :href="value"
        target="_blank"
        rel="noopener noreferrer"
        class="link hover:underline"
        ><span class="md:hidden">Lien</span>
        <span class="hidden md:inline">
          {{ truncateText(value, 100) }}
        </span>
      </a>
    </template>
  </TableComponent>
</template>
