<script setup lang="ts">
const length = ref();
onMounted(() => {
  let path = document.querySelector('.path');
  length.value = path?.getTotalLength();
});

const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6',
  'https://picsum.photos/600/800?random=7',
  'https://picsum.photos/600/800?random=8',
  'https://picsum.photos/600/800?random=9',
  'https://picsum.photos/600/800?random=10',
];

const mockup = {
  phone: true,
};
</script>

<template>
  <div class="">
    <HomeHero class="" />
    <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[500px] z-10">
        <img src="/mockup.png">
    </div>
    <div class="mt-25">
        <UCarousel :auto-scroll="{speed: 1}" loop v-slot="{ item }" :items="items" :ui="{ item: 'basis-1/6' }">
            <img :src="item" class="rounded-lg h-40 w-40 object-cover" draggable="false">
        </UCarousel>
    </div>
    <HomeLine />
  </div>
</template>
