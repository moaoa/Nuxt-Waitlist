<template>
  <footer class="font-body">
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">{{ item.name }}</span>
          <Icon :name="item.icon" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">Made with ❤️ by <a href="">open source</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>

const navigation = [
  {
    name: 'Facebook',
    href: '',
    icon: '',
  },
  {
    name: 'Instagram',
    href: '',
    icon: '',
  },
  {
    name: 'X',
    href: '#',
    icon: 'tabler:brand-twitter',

  },
  {
    name: 'GitHub',
    href: '#',
    icon: 'tabler:brand-github',

  },
  {
    name: 'YouTube',
    href: '#',
    icon: 'tabler:brand-youtube',
  },
];


const usedSocials = computed(() => navigation.filter(e => e.href));
</script>