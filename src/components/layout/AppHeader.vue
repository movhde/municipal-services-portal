<script setup>
import 'primeicons/primeicons.css'
import { ref } from 'vue'

const navLinks = [
  { name: 'نقشه', icon: 'map', link: '/' },
  { name: 'ثبت درخواست', icon: 'file-plus', link: '/' },
  { name: 'پرداخت عوارض', icon: 'credit-card', link: '/' },
  { name: 'تصدیق گواهی', icon: 'check-square', link: '/' },
  { name: 'خود اظهاری', icon: 'face-smile', link: '/' },
  { name: 'گزارش مردمی', icon: 'exclamation-triangle', link: '/' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)
</script>

<template>
  <nav class="bg-[#012467] w-full h-14 flex items-center justify-between px-6 lg:px-12">
    <ul class="hidden lg:flex gap-8 text-[#d0d0d0]">
      <li v-for="nav in navLinks" :key="nav.link">
        <router-link
          :to="nav.link"
          class="flex items-center gap-2 text-base p-2 rounded-md hover:bg-white/20 transition outline-none"
        >
          <i :class="`pi pi-${nav.icon}`"></i>
          {{ nav.name }}
        </router-link>
      </li>
    </ul>
    <button @click="toggleMenu" class="lg:hidden text-white text-2xl cursor-pointer outline-none">
      <i class="pi pi-bars" style="font-size: 1.2rem"></i>
    </button>
  </nav>

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
        v-for="nav in navLinks"
        :key="nav.link"
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
