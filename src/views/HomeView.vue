<script setup lang="ts">
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
import VideoComponent from '@/components/VideoComponent.vue'
import { videosDefis } from '@/data/videosDefis'
import type { Video } from '@/types/video'

// PLAIN VARS
const nextVideoProgress = [
  { label: 'Défi', progress: 50 },
  { label: 'Script', progress: 10 },
  { label: 'Tournage', progress: 0 },
  { label: 'Montage', progress: 0 },
]
const lastVideo: Video = videosDefis[0]!
</script>

<template>
  <div class="space-y-4">
    <section
      class="w-full px-4 md:px-6 py-6 md:py-10 flex flex-col md:flex-row items-center gap-8 md:gap-20"
    >
      <img
        src="@/assets/images/homeImage.png"
        alt="Profil"
        class="w-2/3 md:w-1/3 max-w-sm md:max-w-xl"
      />

      <div class="w-full space-y-2">
        <h1 class="text-main-heading">Présentation</h1>
        <p>
          Le 04 novembre 2024, j'ai créé la chaîne YouTube 'Niveau Supérieur' avec pour 3 objectifs
          en tête :
        </p>
        <ul>
          <li>1. Casser la routine en cherchant des défis difficiles à réaliser</li>
          <li>
            2. Prouver qu'un mec ordinaire peut aussi faire des choses extraordinaires avec de la
            discipline
          </li>
          <li>
            3. Montrer que si un mec ordinaire peut le faire, alors n'importe qui en est capable
          </li>
        </ul>
        <p>
          L'objectif, c'est de tout montrer : comment réaliser chaque défi, les coûts que cela peut
          avoir, les résultats obtenus, les succès et les échecs, en y ajoutant une touche de
          culture générale et d'humour pour que ça soit plus divertissant.
        </p>
        <p>
          Maintenant que la chaîne est lancée, je me rends compte qu'il y a pleins de choses que je
          voudrais partager et qui ne peuvent pas l'être avec une simple vidéo : les programmes que
          j'ai testé durant les défis, le planning pour suivre la progression des défis, les
          tableaux Excel en tout genre, la matériel que j'utilise pour réaliser les vidéos, les
          liens vers les différents réseaux sociaux.
        </p>
        <p>Tout ça et bien plus encore, vous pourrez le retrouver ici !</p>
      </div>
    </section>

    <section class="px-4 md:px-0 space-y-4">
      <h1 class="text-main-heading">Avancement du prochain défi</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
        <ProgressBarComponent
          v-for="item in nextVideoProgress"
          :key="item.label"
          :label="item.label"
          :progress="item.progress"
        />
      </div>
    </section>

    <section class="px-4 md:px-0 space-y-4">
      <h1 class="text-main-heading">Dernier défi réalisé</h1>
      <VideoComponent :video="lastVideo" />
    </section>
  </div>
</template>
