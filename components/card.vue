<template>
  <div class="md:w-96 w-full rounded-3xl shadow-xl p-4 border">
    <h1 class="text-xl font-semibold text-center">{{ deck?.name }}</h1>
    <div class="mt-6">
      <span class="text-lg font-semibold">New: </span><span class="text-green-500 font-semibold">{{ deck?.new }}</span>
    </div>
    <div>
      <span class="text-lg font-semibold">In Progress: </span><span class=" text-red-500 font-semibold">{{ deck?.inProgress }}</span>
    </div>
    <div>
      <span class="text-lg font-semibold">Review: </span><span class="text-blue-500 font-semibold">{{ deck?.review }}</span>
    </div>
    <div class="text-end">
      <NuxtLink :to="`/deck/${deck?.id}`" prefetch
        class="text-center text-xl p-2 px-6 rounded-xl mt-14 font-semibold shadow-md hover:shadow-lg delay-75 duration-300 transition-all bg-green-300 hover:bg-green-400"
      >
        Study
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
  import Deck from '../types/Deck';

  const props = defineProps({
    deck: Object as PropType<Deck>
  });



</script>
