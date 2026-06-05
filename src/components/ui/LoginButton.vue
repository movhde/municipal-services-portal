<template>
  <div class="w-fit px-3 py-1 flex items-center gap-2 bg-[#d7e7ec] rounded-2xl">
    <i class="pi pi-user text-[#2a7e97]"> </i>
    <div class="flex items-center gap-1 text-gray-500">
      <RouterLink
        to="/login"
        class="text-xs md:text-sm hover:text-[#2a7e97] transition-colors duration-300"
        >ورود</RouterLink
      >
      <span>/</span>
      <RouterLink
        to="/register"
        class="text-xs md:text-sm whitespace-nowrap hover:text-[#2a7e97] transition-colors duration-300"
        >ثبت نام</RouterLink
      >
    </div>
  </div>
</template>
