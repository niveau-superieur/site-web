<script setup lang="ts">
import NavigationBarComponent from './components/NavigationBarComponent.vue'
</script>

<template>
  <div class="bg-gray-950 text-gray-50 min-h-screen">
    <NavigationBarComponent />
    <main>
      <RouterView />
    </main>
  </div>
</template>
