<script setup lang="ts">
const mobileMenu = ref();
const config = useAppConfig();

const toggleMobileMenu = () => {
  document.body.style.overflow = mobileMenu.value ? "auto" : "hidden";
  mobileMenu.value = !mobileMenu.value;
};
</script>

<template>
  <header class="sticky top-0 z-50">
    <UContainer class="mx-auto flex h-16 items-center justify-between px-4 transition-all">
      <div class="flex items-center gap-5">
        <NuxtLink to="/" class="flex items-center gap-2">
          <!-- <Logo class="h-8 w-auto" role="img" alt="Lemonrepo logo" /> -->
          <p class="font-bold text-xl tracking-tight">Techurve</p>
        </NuxtLink>
      </div>
      <div v-if="config.waitlist.showSignups" class="hidden items-center gap-2 sm:flex">
        <UButton to="/leaderboard" color="gray">See Signups</UButton>
      </div>
      <div class="sm:hidden flex items-center gap-2">
        <button aria-label="Toggle menu"
          class="menu-toggle relative flex h-8 w-8 items-center justify-center rounded-full border bg-white hover:bg-gray-100 flex-shrink-0"
          @click="toggleMobileMenu" :class="{ active: mobileMenu }">
          <div
            class="menu-bar absolute h-[1.5px] w-[15px] translate-y-[-3px] bg-gray-700 transition-all duration-200 ease-out"
            data-position="top"></div>
          <div
            class="menu-bar absolute h-[1.5px] w-[15px] translate-y-[3px] bg-gray-700 transition-all duration-200 ease-out"
            data-position="bottom"></div>
        </button>
      </div>
    </UContainer>
    <div class="block h-[calc(100vh-4rem)] w-full sm:hidden" v-show="mobileMenu">
      <div class="flex flex-col gap-4 p-4">
        <UButton to="/leaderboard" @click="toggleMobileMenu" color="gray">See Signups</UButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.menu-toggle.active .menu-bar[data-position="top"] {
  transform: translateY(0) rotate(45deg) scaleX(1.05);
}

.menu-toggle.active .menu-bar[data-position="bottom"] {
  transform: translateY(0) rotate(-45deg) scaleX(1.05);
}
</style>
