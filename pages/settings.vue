<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto h-[80vh]">
    <h1 class="font-semibold text-4xl mt-8 text-center flex-1">Settings</h1>
    <NuxtLink
      to="/login"
      class="self-center text-center text-xl p-4 px-8 rounded-xl mt-14 font-semibold shadow-md hover:shadow-lg delay-75 duration-300 transition-all bg-red-300 hover:bg-red-400"
    >
      Logout
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { NuxtLink } from '.nuxt/components';

  definePageMeta({
    layout: 'navbar-layout',
  })
</script>