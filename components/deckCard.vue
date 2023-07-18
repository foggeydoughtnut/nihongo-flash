<template>
  <div class="w-full rounded-xl shadow-md p-4 border flex flex-row hover:shadow-xl delay-75 duration-300 transition-all">
    <span class="text-xl font-semibold flex-1 text-start">{{ deckName }}</span>
    <span class="text-green-500 font-semibold text-xl text-end mr-16">{{ deck?.new }}</span>
    <span class=" text-red-500 font-semibold text-xl text-end mr-16">{{ deck?.inProgress }}</span>
    <span class="text-blue-500 font-semibold text-xl text-end">{{ deck?.review }}</span>
  </div>
</template>

<script setup lang="ts">
import Deck from '../types/Deck';

const props = defineProps({
  deckName: String,
  deck: Object as PropType<Deck>
});
console.log(props.deck)



</script>