import { computed, ref } from 'vue'

export function useTable<T extends Record<string, unknown>>(data: T[]) {
  const sortField = ref<keyof T | null>(null)
  const sortDirection = ref<'asc' | 'desc' | null>(null)

  const setSort = (field: keyof T) => {
    if (sortField.value !== field) {
      sortField.value = field
      sortDirection.value = 'asc'
      return
    }

    if (sortDirection.value === 'asc') {
      sortDirection.value = 'desc'
      return
    }

    sortField.value = null
    sortDirection.value = null
  }

  const sortedData = computed(() => {
    if (!sortField.value || !sortDirection.value) {
      return data
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortField.value!] as string | number
      const bValue = b[sortField.value!] as string | number

      if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1

      return 0
    })
  })

  return {
    sortField,
    sortDirection,
    setSort,
    sortedData,
  }
}
