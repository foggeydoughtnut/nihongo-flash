
<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto">
    <h1 class="font-semibold text-4xl mt-8 text-center">Dashboard</h1>
    <h2 class="text-2xl font-semibold mt-8 my-2">Next Up:</h2>
    <Card :deck="nextUpDeck" />
    <div class="flex flex-row text-md mt-16">
      <span class="flex-1 text-end mr-6">New</span>
      <span class="mr-7">In Progress</span>
      <span class="mr-1">Review</span>
    </div>

    <div v-for="deck of decks">
      <DeckCard :deck="deck" class="mt-2" />
    </div>

  </div>
</template>

<script setup lang="ts">
import DeckInfo from 'types/DeckInfo';
import api from '../api';

const decks = ref<DeckInfo[]>();
const nextUpDeck = ref<DeckInfo>();

let encodedToken:string = '';
onMounted(() => {
  const { tokenEncoded } = useToken();
  if (tokenEncoded.value) {
    encodedToken = tokenEncoded.value;
    getDecks();
  }
})


const getDecks = async () => {
  const res = await api(encodedToken).deck.getDecks();
  if (res.error) {
    console.error(res.error);
    alert(res.error)
  }

  const deckInfos = await Promise.all(res.data.map(async (deck) => {
    const res = await api(encodedToken).deck.getDeckInfo(deck.id);
    if (res.error) {
      console.error(res.error);
    }
    let deckInfo = {
      'id': deck.id,
      'name': deck.name,
      'new': res.data.new,
      'review': res.data.review,
      'inProgress': res.data.inProgress,
    } as DeckInfo;
    return deckInfo;
  }));
  decks.value = deckInfos;

  nextUpDeck.value = deckInfos[0] // Todo set this up on backend to get the next up deck
}
</script>

<script lang="ts">
definePageMeta({
  layout: 'navbar-layout',
  middleware: ['auth'],
})
</script>