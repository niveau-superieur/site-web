<script setup lang="ts">
import DndAdventureComponent from '@/components/DndAdventureComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { dndAdventures } from '@/data/dndAdventures'
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center mb-4 gap-4 md:gap-6">
    <p class="text-xl">Envie de créer vos propres aventures ? Récupérez le template ici :</p>

    <a
      href="https://nosy-seeder-540.notion.site/Nouvelle-aventure-33d48197325e8110a714fded86777eb6"
      target="_blank"
      class="button px-4 py-2 rounded w-fit"
    >
      Template
    </a>
  </div>
  <TitleComponent :label="`Toutes les aventures (${dndAdventures.length})`" />

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <DndAdventureComponent
      v-for="(adventure, index) in dndAdventures"
      :key="adventure.title"
      :reverse="Math.floor(index / 2) % 2 === 1"
      :dnd-adventure="adventure"
    />
  </div>
</template>
