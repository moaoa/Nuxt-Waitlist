<script setup lang="ts">
const email = ref('');
const joiningWaitlist = ref(false);
const success = ref(false);
const errors = ref<{ code: string, message: string, path: string[], validation: string }[]>([]);

const config = useAppConfig();

const {data: count} = await useFetch('/api/count');


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

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="joinWaitlist">
        <div>
          <div class="mt-2">
            <UInput class="w-full" v-model="email" placeholder="Email address" />
          </div>
        </div>
        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-primary-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all"><span>Sign
              Up</span>
          </button>

          <p class="mt-4 text-base/6 text-red-500 data-[disabled]:opacity-50 sm:text-sm/6" v-for="error in errors">
            {{ error.path.join(',') }}: {{ error.message }}
          </p>

          <Transition enter-from-class="opacity-0" enter-active-class="transition ease-in-out duration-200"
            enter-to-class="opacity-100" leave-from-class="opacity-100"
            leave-active-class="transition ease-out duration-200" leave-to-class="opacity-0">
            <div v-if="success"
              class="absolute border inset-0 border-primary-600 bg-primary-500 rounded-lg flex items-center justify-center">
              <p class="text-center text-white font-semibold text-2xl">
                🫡 We'll keep you posted!
              </p>
            </div>
          </Transition>
        </div>
      </form>
      <div class="mt-4 flex gap-2 items-center justify-center">
        <UAvatarGroup>
            <UAvatar src="https://i.pravatar.cc/150?img=3" />
            <UAvatar src="https://i.pravatar.cc/150?img=5" />
            <UAvatar src="https://i.pravatar.cc/150?img=8" />
        </UAvatarGroup>
        <p class="font-medium text-gray-500 text-sm">Join {{count.count}}+ others</p>
      </div>
      <p class="mt-10 text-center text-sm text-gray-400" v-if="config.waitlist.showSignups">
        Already signed up?
        <NuxtLink to="/leaderboard"
          class="cursor-pointer transition-color font-semibold leading-6 text-primary-400 hover:text-primary-300">
          Check your spot on the waiting list.
        </NuxtLink>
      </p>
    </div>
</template>
