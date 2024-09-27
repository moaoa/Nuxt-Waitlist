<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ''
  }
})

useSeoMeta({
  title: 'Validate your idea - setup your landing page in minutes | NuxtHubLanding',
  applicationName: 'NuxtHubLanding',
  description: 'Validate your idea quickly with the NuxtHub Boilerplate – a landing page template that lets you capture interest and sign up users in minutes. Launch your product in no time and start gathering feedback from real customers.',
  ogType: 'website',
  ogTitle: 'Validate your idea - setup your landing page in minutes | NuxtHubLanding',
  ogDescription: 'Validate your idea quickly with the NuxtHub Boilerplate – a landing page template that lets you capture interest and sign up users in minutes. Launch your product in no time and start gathering feedback from real customers.',
  twitterCard: 'summary_large_image',
  twitterCreator: '@lowbits_',
});

</script>

<template>
  <div class="px-8 lg:px-0 flex flex-col justify-between min-h-screen bg-grid relative">
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-gray-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]">
    </div>
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
