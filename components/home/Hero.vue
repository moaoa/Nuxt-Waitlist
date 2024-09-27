import Waitlist from '../Waitlist.vue';
<template>
  <div class="h-full max-w-4xl mx-auto text-center">
    <span
      class="inline-flex gap-2 font-body mb-6 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
      <Icon name="tabler:sailboat-2" />
      Bootstaped Product
    </span>
    <h1 class="font-display font-bold text-5xl max-w-lg mx-auto">Take control of your expenses with <span
        class="underline decoration-emerald-400">budget</span>
    </h1>
    <p class="font-body mt-8 text-lg text-gray-500 max-w-3xl mx-auto leading-7">
      Join the waiting list for <span class="underline decoration-emerald-400 decoration-2">Budget</span>, the simple
      and intuitive
      app designed to help you track your
      expenses and take
      control of your finances.
    </p>
    <!-- <p class="font-body mt-8 text-lg text-gray-500 max-w-3xl mx-auto leading-7"> Whether you're managing daily expenses
      or
      planning for the future, Budget offers
      <b>easy-to-use</b> tools to categorize spending, monitor cash flow, and set financial goals—all in one place. Stay
      organized, gain insights into your spending habits, and start building better money management habits today.
      <b>Sign
        up now to be the first to experience Budget when it launches! 👇</b>
    </p> -->
    <HomeVideo />
    <MyWaitlist />
  </div>
</template>