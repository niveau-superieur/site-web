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
  <div class="flex w-fit items-center h-9 rounded overflow-hidden switch">
    <button
      v-for="option in options"
      :key="option.value"
      class="px-4 py-2"
      :class="[modelValue === option.value ? 'switch-option-active' : 'switch-option']"
      @click="select(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>
