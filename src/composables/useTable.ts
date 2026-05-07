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

  /**
   * Normalise les valeurs avant le tri
   * Les valeurs non définies sont placées à la fin
   * Les string sont passés en date si possible, sinon en lower case
   * @param value - la valeur à normaliser
   * @returns la valeur normalisée pour le tri
   */
  const normalize = (value: unknown): number | string => {
    if (value === null || value === undefined || value === '') {
      return Infinity
    }

    if (typeof value === 'number') return value

    if (typeof value === 'string') {
      const d = new Date(value)
      if (!isNaN(d.getTime())) {
        return d.getTime()
      }
      return value.toLowerCase()
    }

    return String(value)
  }

  const sortedData = computed(() => {
    if (!sortField.value || !sortDirection.value) {
      return data
    }

    return [...data].sort((a, b) => {
      const aValue = normalize(a[sortField.value!])
      const bValue = normalize(b[sortField.value!])

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
