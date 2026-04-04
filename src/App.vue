<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import NavigationBarComponent from './components/NavigationBarComponent.vue'
</script>

<template>
  <div class="bg-gray-950 text-gray-50 min-h-screen">
    <NavigationBarComponent />
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
