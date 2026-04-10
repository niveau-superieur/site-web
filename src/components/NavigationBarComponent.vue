<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

// TYPES
type NavigationItem = {
  name: string
  href: string
  submenu?: NavigationItem[]
}

// PLAIN VARS
const route = useRoute()
const router = useRouter()
const navigation: NavigationItem[] = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Vidéos',
    href: '/videos',
    submenu: [
      {
        name: 'Vidéos de défis',
        href: '/videos/defis',
      },
      {
        name: 'Vidéos diverses',
        href: '/videos/divers',
      },
    ],
  },
  {
    name: 'Planning',
    href: '/planning',
  },
  {
    name: 'Ressources',
    href: '/resources',
    submenu: [
      {
        name: 'Donjons & Dragons',
        href: '/resources/d&d',
      },
    ],
  },
]

// REACTIVE VARS
const openMenu = ref<string | null>(null)
const menuRef = ref<HTMLElement | null>(null)

// LIFECYCLE
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

router.afterEach(() => {
  openMenu.value = null
})

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    openMenu.value = null
  }
}

// FUNCTIONS
const isActive = (href: string, submenu?: NavigationItem[]) => {
  if (route.path === href) return true

  if (submenu) {
    return submenu.some((sub) => route.path === sub.href)
  }

  return false
}
const toggleMenu = (menuName: string) => {
  openMenu.value = openMenu.value === menuName ? null : menuName
}
</script>

<template>
  <div class="sticky top-0 z-100">
    <nav class="text-gray-100 px-8 h-20 flex items-center bg-gray-950">
      <RouterLink to="/" class="flex items-center mr-15">
        <img
          src="@/assets/images/niveauSuperieurLogo.png"
          alt="Logo"
          class="h-12 w-auto rounded-4xl p-0.5 opacity-80 hover:opacity-100"
        />
      </RouterLink>

      <div ref="menuRef" class="flex space-x-4 relative">
        <div v-for="item in navigation" :key="item.name" class="relative">
          <RouterLink
            v-if="!item.submenu"
            :to="item.href"
            :class="[
              'px-4 py-2 rounded-md text-md font-bold border-2 border-gray-900 flex items-center',
              isActive(item.href) ? 'bg-gray-900' : 'hover:bg-gray-900',
            ]"
          >
            {{ item.name }}
          </RouterLink>

          <button
            v-else
            @click="toggleMenu(item.name)"
            :class="[
              'px-4 py-2 rounded-md text-md font-bold border-2 border-gray-900 flex items-center cursor-pointer',
              isActive(item.href, item.submenu) ? 'bg-gray-900' : 'hover:bg-gray-900',
            ]"
          >
            {{ item.name }}
          </button>

          <div
            v-if="openMenu === item.name"
            class="absolute mt-1 w-45 bg-gray-900 border border-gray-800 rounded-md flex flex-col"
          >
            <RouterLink
              v-for="sub in item.submenu"
              :key="sub.name"
              :to="sub.href"
              class="px-4 py-2 hover:bg-gray-800 rounded-md"
            >
              {{ sub.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
    <div class="h-px bg-gray-800 mx-16"></div>
  </div>
</template>
