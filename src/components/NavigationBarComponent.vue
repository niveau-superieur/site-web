<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import ThemeButtonComponent from './ThemeButtonComponent.vue'

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
      {
        name: 'Lectures',
        href: '/resources/lectures',
      },
      {
        name: 'Outils et matériel',
        href: '/resources/tools',
      },
    ],
  },
]

// REACTIVE VARS
const openMenu = ref<string | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const mobileOpen = ref(false)

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
    <nav class="bg-main px-8 h-20 flex items-center justify-between">
      <div class="flex items-center">
        <button class="md:hidden mr-4" @click="mobileOpen = !mobileOpen">☰</button>

        <RouterLink to="/" class="flex items-center mr-15">
          <img
            src="@/assets/images/niveauSuperieurLogo.png"
            alt="Logo"
            class="h-10 md:h-12 w-auto rounded-4xl p-0.5 opacity-80 hover:opacity-100"
          />
        </RouterLink>

        <!-- MENU DESKTOP -->
        <div class="hidden md:flex space-x-4 relative">
          <div v-for="item in navigation" :key="item.name" class="relative">
            <RouterLink
              v-if="!item.submenu"
              :to="item.href"
              :class="[
                'px-4 py-2 rounded-md text-md font-bold nav-item flex items-center',
                isActive(item.href) ? 'nav-item-active' : '',
              ]"
            >
              {{ item.name }}
            </RouterLink>

            <button
              v-else
              @click="toggleMenu(item.name)"
              :class="[
                'px-4 py-2 rounded-md text-md font-bold nav-item flex items-center cursor-pointer',
                isActive(item.href, item.submenu) ? 'nav-item-active' : '',
              ]"
            >
              {{ item.name }}
            </button>

            <div
              v-if="openMenu === item.name"
              class="absolute mt-1 w-45 submenu rounded-md flex flex-col"
            >
              <RouterLink
                v-for="sub in item.submenu"
                :key="sub.name"
                :to="sub.href"
                class="px-4 py-2 submenu-item rounded-md"
              >
                {{ sub.name }}
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- MENU MOBILE -->
        <div
          v-if="mobileOpen"
          class="absolute top-16 left-0 w-3/4 bg-main flex flex-col p-4 space-y-2 md:hidden mobile-menu"
        >
          <div v-for="item in navigation" :key="item.name">
            <RouterLink
              v-if="!item.submenu"
              :to="item.href"
              class="px-4 py-2 rounded-md font-bold nav-item-mobile"
              @click="mobileOpen = false"
            >
              {{ item.name }}
            </RouterLink>

            <button
              v-else
              @click="toggleMenu(item.name)"
              :class="[
                'px-4 py-2 rounded-md font-bold nav-item-mobile',
                isActive(item.href, item.submenu) ? 'nav-item-active' : '',
              ]"
            >
              {{ item.name }}
            </button>

            <div v-if="openMenu === item.name" class="flex flex-col pl-4">
              <RouterLink
                v-for="sub in item.submenu"
                :key="sub.name"
                :to="sub.href"
                class="px-4 py-2 submenu-item"
                @click="mobileOpen = false"
              >
                {{ sub.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <ThemeButtonComponent />
      </div>
    </nav>
    <div class="h-px separator mx-16"></div>
  </div>
</template>
