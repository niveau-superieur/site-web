<script setup lang="ts">
import babelioIcon from '@/assets/images/social-media/babelio.svg'
import geocachingIcon from '@/assets/images/social-media/geocaching.svg'
import stravaIcon from '@/assets/images/social-media/strava.svg'
import youtubeIcon from '@/assets/images/social-media/youtube.svg'

type SocialMedia = {
  name: string
  href: string
  icon: string
}

const socialMedias: SocialMedia[] = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@NiveauSup%C3%A9rieurNS',
    icon: youtubeIcon,
  },
  {
    name: 'Strava',
    href: 'https://www.strava.com/athletes/186685638',
    icon: stravaIcon,
  },
  {
    name: 'Babelio',
    href: 'https://www.babelio.com/monprofil.php?id_user=2457762',
    icon: babelioIcon,
  },
  {
    name: 'Geocaching',
    href: 'https://www.geocaching.com/p/?guid=58ce5911-5ad0-4e26-a698-23e4ce3bdf78',
    icon: geocachingIcon,
  },
]
</script>

<template>
  <div class="h-px bg-gray-800 mx-16"></div>

  <footer
    class="px-4 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
  >
    <span class="text-md text-center"> Suivez-moi sur les plateformes !</span>

    <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6">
      <a
        v-for="socialMedia in socialMedias"
        :key="socialMedia.name"
        :href="socialMedia.href"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 opacity-80 hover:opacity-100 transition"
      >
        <img :src="socialMedia.icon" :alt="socialMedia.name" class="h-6 w-auto rounded-sm" />
        {{ socialMedia.name }}
      </a>
    </div>

    <div class="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
      <span class="text-md"> Mail de contact : niveausuperieurns@gmail.com</span>
      <img
        src="@/assets/images/niveauSuperieurLogo.png"
        alt="Logo"
        class="h-10 w-auto opacity-80 hover:opacity-100 transition"
      />
    </div>
  </footer>
</template>
