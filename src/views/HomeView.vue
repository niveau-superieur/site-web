<script setup lang="ts">
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
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
  <section class="w-full px-6 py-10 flex flex-row items-center gap-20">
    <img src="@/assets/images/homeImage.png" alt="Profil" class="w-1/3 max-w-xl" />

    <div class="w-full">
      <TitleComponent label="Présentation" />
      <p class="text-md mb-1">
        Le 04 novembre 2024, j'ai créé la chaîne YouTube 'Niveau Supérieur' avec pour 3 objectifs en
        tête :
      </p>
      <ul class="text-md mb-3">
        <li>1. Casser la routine en cherchant des défis difficiles à réaliser</li>
        <li>
          2. Prouver qu'un mec ordinaire peut aussi faire des choses extraordinaires avec de la
          discipline
        </li>
        <li>
          3. Montrer que si un mec ordinaire peut le faire, alors n'importe qui en est capable
        </li>
      </ul>
      <p class="text-md mb-3">
        L'objectif, c'est de tout montrer : comment réaliser chaque défi, les coûts que cela peut
        avoir, les résultats obtenus, les succès et les échecs, en y ajoutant une touche de culture
        générale et d'humour pour que ça soit plus divertissant.
      </p>
      <p class="text-md mb-1">
        Maintenant que la chaîne est lancée, je me rends compte qu'il y a pleins de choses que je
        voudrais partager et qui ne peuvent pas l'être avec une simple vidéo : les programmes que
        j'ai testé durant les défis, le planning pour suivre la progression des défis, les tableaux
        Excel en tout genre, la matériel que j'utilise pour réaliser les vidéos, les liens vers les
        différents réseaux sociaux.
      </p>
      <p class="text-md mb-3">Tout ça et bien plus encore, vous pourrez le retrouver ici !</p>
    </div>
  </section>

  <section>
    <TitleComponent label="Avancement de la prochaine vidéo" />

    <div class="grid grid-cols-4 gap-6">
      <ProgressBarComponent
        v-for="item in nextVideoProgress"
        :key="item.label"
        :label="item.label"
        :progress="item.progress"
      />
    </div>
  </section>

  <section>
    <TitleComponent label="Dernière vidéo" />
    <VideoComponent :video="lastVideo" />
  </section>
</template>
