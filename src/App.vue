<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import NavigationBarComponent from './components/NavigationBarComponent.vue'
</script>

<template>
  <div class="bg-main text-main min-h-screen">
    <NavigationBarComponent />
    <main class="m-4 md:m-12">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>
