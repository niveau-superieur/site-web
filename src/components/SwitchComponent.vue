<script setup lang="ts" generic="T extends string">
// PROPS
defineProps<{
  modelValue: T
  options: {
    label: string
    value: T
  }[]
}>()

// EMIT
const emit = defineEmits<{
  (e: 'update:modelValue', value: T): void
}>()

// FUNCTIONS
const select = (value: T) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="flex items-center h-9 rounded overflow-hidden">
    <button
      v-for="option in options"
      :key="option.value"
      class="px-4 py-2"
      :class="[
        modelValue === option.value
          ? 'bg-gray-800'
          : 'bg-gray-900 text-gray-600 hover:bg-gray-700 hover:text-gray-100',
      ]"
      @click="select(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
