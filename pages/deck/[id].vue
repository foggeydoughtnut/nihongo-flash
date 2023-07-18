<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto">
    <Card :deck="deck" class="self-center mt-8" />
    <div class="flex flex-row gap-8 self-center mt-8">
      <button
        class="text-center text-xl p-4 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg delay-75 duration-300 transition-all bg-green-300 hover:bg-green-400">
        Deck Settings
      </button>
      <button
        class="text-center text-xl p-4 px-4 rounded-xl font-semibold shadow-md hover:shadow-lg delay-75 duration-300 transition-all bg-green-300 hover:bg-green-400">
        Deck Statistics
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Deck from '../../types/Deck';
//@ts-ignore
const { params } = useRoute();
const deckId: number = params.id;

// TODO: Get the deck information from the server
const deck = {
  id: deckId,
  name: 'Deck Name',
  new: 15,
  inProgress: 0,
  review: 150,
} as Deck;






</script>


