<script setup lang="ts">

const email = ref('');
const joiningWaitlist = ref(false);
const success = ref(false);
const errors = ref<{ code: string, message: string, path: string[], validation: string }[]>([]);


const joinWaitlist = async () => {
  joiningWaitlist.value = true;
  errors.value = [];

  try {
    await $fetch('api/join-waitlist', {
      method: 'POST', body: {
        email: email.value,
      }
    });

    email.value = '';
    success.value = true;

    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (e) {
    switch (e.response.status) {
      case 400: {
        errors.value = e.data.data.issues
        break;
      }
      case 429: {
        errors.value = [{ path: ['server'], message: 'You’ve made too many requests in a short period. Please wait a moment and try again.' }]
        break;
      }
    }
  } finally {
    joiningWaitlist.value = false
  }
}
</script>

<template>
  <div
    class="relative bg-white shadow-sm mx-auto max-w-lg mt-10 rounded-lg border border-gray-200 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 font-body">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">Budget Waitlist</h2>
      <p class="text-center text-zinc-400">Just a simple email is needed.
        <Icon name="tabler:check" />
      </p>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="joinWaitlist">
        <div>
          <div class="mt-2">
            <UInput v-model="email" placeholder="email address" />
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-all"><span>Sign
              Up</span>
          </button>

          <p class="mt-4 text-base/6 text-red-500 data-[disabled]:opacity-50 sm:text-sm/6" v-for="error in errors">
            {{ error.path.join(',') }}: {{ error.message }}
          </p>

          <Transition enter-from-class="opacity-0 translate-y-full"
            enter-active-class="transition ease-in-out duration-150" enter-to-class="opacity-100 translate-y-0"
            leave-from-class="opacity-100 translate-y-0"
            leave-active-class="transition -translate-y-full ease-out duration-150" leave-to-class="opacity-0">
            <div v-if="success"
              class="absolute border inset-0 border-[#D65320] bg-[#D65320] flex items-center justify-center">
              <p class="text-center text-white">
                🫡 We'll keep you posted!
              </p>
            </div>
          </Transition>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-400">
        Already signed up?
        <NuxtLink to="/leaderboard"
          class="cursor-pointer transition-color font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
          Check your spot on the waiting list.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>