
<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto">
    <h1 class="font-semibold text-4xl mt-8 text-center">Dashboard</h1>
    <h2 class="text-2xl font-semibold mt-8 my-2">Next Up:</h2>
    <Card :deck="deck"/>
    <div class="flex flex-row text-md mt-16">
      <span class="flex-1 text-end mr-6">New</span>
      <span class="mr-7">In Progress</span>
      <span class="mr-1">Review</span>


    </div>
    <DeckCard :deck="deck" class="mt-2"/>
    <DeckCard :deck="deck" class="mt-2"/>
    <DeckCard :deck="deck" class="mt-2"/>
    <DeckCard :deck="deck" class="mt-2"/>

  </div>
</template>

<script setup lang="ts">
import Deck from '../types/Deck';
  const deck = <Deck>{
    id: 1,
    name: 'Deck Name',
    new: 15,
    inProgress: 0,
    review: 150,
  };
</script>

<script lang="ts">
  definePageMeta({
    layout: 'navbar-layout',
    middleware: ['auth'],
  })
</script>