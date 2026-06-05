<script setup>
import { navItems } from '@/data/nav-items'
import 'primeicons/primeicons.css'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
</script>

<template>
  <!-- Desktop Menu -->
  <nav
    class="sticky top-0 z-50 bg-[#012467] w-full h-14 flex items-center justify-between px-6 lg:px-12"
  >
    <ul class="hidden lg:flex gap-8 text-[#d0d0d0]">
      <li v-for="nav in navItems" :key="nav.id" class="relative group">
        <router-link
          :to="nav.link"
          class="flex items-center gap-2 text-base p-2 rounded-md hover:bg-white/20 transition outline-none"
        >
          <i :class="`pi pi-${nav.icon}`"></i>
          {{ nav.name }}
        </router-link>

        <!-- Desktop SubItems -->
        <div
          v-if="nav.subItems.length > 0"
          class="absolute z-40 top-12 max-w-[80vw] overflow-x-auto bg-white rounded-2xl shadow-2xl px-3 py-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
        >
          <div class="flex gap-1">
            <div
              v-for="sub in nav.subItems"
              :key="sub.id"
              class="flex flex-col gap-2 min-w-max w-full"
            >
              <div :class="`rounded-t-2xl px-5 py-1 flex items-center gap-2 ${sub.bgColor}`">
                <i :class="`pi pi-${sub.icon} text-white`" style="font-size: 0.4rem"></i
                ><span class="text-white">{{ sub.title }}</span>
              </div>
              <router-link
                v-for="item in sub.items"
                :key="item.id"
                :to="item.link"
                class="flex items-center gap-2 pr-4 pl-10 group/sub"
              >
                <i
                  :class="`pi pi-${item.icon} text-gray-400 group-hover/sub:text-gray-700 transition-all duration-300`"
                ></i>
                <span
                  class="text-gray-400 text-sm group-hover/sub:text-gray-700 transition-all duration-300"
                  >{{ item.title }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <button @click="toggleMenu" class="lg:hidden text-white text-2xl cursor-pointer outline-none">
      <i class="pi pi-bars" style="font-size: 1.2rem"></i>
    </button>
  </nav>

  <!-- Mobile Menu -->
  <div
    class="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
    :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
    @click="closeMenu"
  ></div>

  <aside
    class="lg:hidden fixed top-0 right-0 h-full w-60 bg-[#012467] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl p-4 flex flex-col gap-2"
    :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <button @click="closeMenu" class="self-end cursor-pointer outline-none text-white">
      <i class="pi pi-times"></i>
    </button>
    <ul class="flex flex-col gap-2 text-[#d0d0d0]">
      <li
        v-for="nav in navItems"
        :key="nav.id"
        class="hover:bg-white/20 rounded-md p-2 transition-all duration-200"
      >
        <router-link :to="nav.link" class="flex items-center gap-3 outline-none" @click="closeMenu">
          <i :class="`pi pi-${nav.icon}`"></i>
          {{ nav.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>
