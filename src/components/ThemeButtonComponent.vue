<script setup lang="ts">
import { applyTheme, getInitialTheme } from '@/utils/themeUtils'
import { onMounted, ref } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = getInitialTheme() === 'dark'
})

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative w-14 h-7 flex items-center theme-toggle rounded-full p-1 transition"
  >
    <!-- Forme du soleil -->
    <svg
      class="w-4 h-4 theme-toggle-icon ml-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>

    <div
      class="absolute w-5 h-5 theme-toggle-thumb opacity-50 rounded-full shadow-md transform transition"
      :class="isDark ? 'translate-x-7' : 'translate-x-0'"
    />

    <!-- Forme de la lune -->
    <svg
      class="ml-auto w-4 h-4 theme-toggle-icon mr-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>
