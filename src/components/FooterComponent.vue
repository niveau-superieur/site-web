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

  <footer class="px-12 py-6 flex items-center justify-between">
    <span class="text-md">Suivez-moi sur les plateformes !</span>

    <div class="flex items-center gap-6">
      <a
        v-for="socialMedia in socialMedias"
        :key="socialMedia.name"
        :href="socialMedia.href"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-colors"
      >
        <img :src="socialMedia.icon" :alt="socialMedia.name" class="h-6 w-auto rounded-sm" />
        {{ socialMedia.name }}
      </a>
    </div>

    <div class="flex flex-row items-center">
      <span class="text-md pr-4">Mail de contact : niveausuperieurns@gmail.com</span>
      <img
        src="@/assets/images/niveauSuperieurLogo.png"
        alt="Logo"
        class="h-10 w-auto opacity-80 hover:opacity-100 transition"
      />
    </div>
  </footer>
</template>
