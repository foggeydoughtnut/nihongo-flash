
<template>
  <div class="font-sans flex flex-col">
    <h1 class="font-semibold text-4xl mt-8 text-center">Dashboard</h1>
    <h2 class="text-2xl font-semibold">Next Up:</h2>
    <Card deckName="Deck Name" :deck="deck"/>
  </div>
</template>

<script setup lang="ts">
import Deck from '../types/Deck';

  const deck = <Deck>{
    new: 15,
    inProgress: 0,
    review: 150,
  };
  

</script>