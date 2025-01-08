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
    <UApp>
        <div class="px-8 lg:px-0 justify-between h-screen relative overflow-hidden">
            <AppNavbar />
            <NuxtPage />
            <AppFooter />
        </div>
    </UApp>
</template>

<style>
body {
  background-size: 12px 12px;
  background-image: radial-gradient(hsla(0,0%,86%,0.3) 1px, transparent 0);
}
</style>
