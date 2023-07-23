<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto">
    <Card :deck="deckInfo" class="self-center mt-8" />
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
import DeckInfo from 'types/DeckInfo';
import api from '../../api';

const { params } = useRoute();
let deckId: number = 0;
if (typeof params.id === 'string') {
  deckId = parseInt(params.id);
} else {
  console.error("Incorrect parameter")
}

const deckInfo = ref<DeckInfo>();

let encodedToken:string = '';
onMounted(() => {
  const { tokenEncoded } = useToken();
  if (tokenEncoded.value) {
    encodedToken = tokenEncoded.value;
    getDeckInfo();
  }
})

const getDeckInfo = async () => {
  const deckRes = await api(encodedToken).deck.getDeckSpecific(deckId);
  if (deckRes.error) {
    console.error(deckRes.error);
    return alert(deckRes.error);
  }

  const deckInfoRes = await api(encodedToken).deck.getDeckInfo(deckId);
  if (deckInfoRes.error) {
    console.error(deckInfoRes.error);
    alert(deckInfoRes);
  }
  
  deckInfo.value = {
    'id': deckRes.data.id,
    'name': deckRes.data.name,
    'new': deckInfoRes.data.new,
    'inProgress': deckInfoRes.data.inProgress,
    'review': deckInfoRes.data.review,
  }
}

</script>

<script lang="ts">
definePageMeta({
  layout: 'navbar-layout',
  middleware: ['auth'],
})
</script>



