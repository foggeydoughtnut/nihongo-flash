<template>
  <div class="font-sans flex flex-col md:w-3/4 w-11/12 mx-auto text-center">
    <div class="my-8 flex flex-col h-[60vh] border rounded-3xl p-4 shadow-xl">
      <h2 class="text-3xl">{{ cards?.at(0)?.term }}</h2>

      <div class="w-full h-full flex flex-col">
        <div class="flex justify-center py-4">
          <div class="w-5/6 border-t-2" />
        </div>
        <div class="flex flex-col gap-4 mt-8 flex-1" v-show="showDefinition">
          <p class="text-2xl">{{ cards?.at(0)?.definition }}</p>
          <p class="text-xl" v-show="cards?.at(0)?.exampleSentence">{{ cards?.at(0)?.exampleSentence }}</p>
        </div>
        <div class="mt-8 flex-1" v-show="!showDefinition" />

        <div class="w-full">
          <div class="flex items-center justify-center">
            <input placeholder="Input answer here"
              class="w-5/6 border rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
              type="text" v-model="answer" />
          </div>

          <!-- Again, Hard, Good, Easy button container --> 
          <div class="flex justify-center" v-show="showDefinition">
            <div class="rounded-lg w-1/2 flex flex-row gap-4 items-center justify-center">
              <!-- Buttons that show up when user is incorrect -->
              <button v-show="!correct" class="
                  text-center
                  text-lg
                  p-2
                  px-8
                  rounded-xl
                  md:mt-8
                  mt-4
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  delay-75
                  duration-300
                  transition-all
                  border
                ">
                Again
              </button>

              <button v-show="!correct" class="
                  text-center
                  text-lg
                  p-2
                  px-8
                  rounded-xl
                  md:mt-8
                  mt-4
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  delay-75
                  duration-300
                  transition-all
                  border
                ">
                Hard
              </button>
              <!--  -->

              <!-- Buttons that show up when user is correct -->
              <button v-show="correct" class="
                  text-center
                  text-lg
                  p-2
                  px-8
                  rounded-xl
                  md:mt-8
                  mt-4
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  delay-75
                  duration-300
                  transition-all
                  border
                ">
                Good
              </button>

              <button v-show="correct" class="
                  text-center
                  text-lg
                  p-2
                  px-8
                  rounded-xl
                  md:mt-8
                  mt-4
                  font-semibold
                  shadow-md
                  hover:shadow-lg
                  delay-75
                  duration-300
                  transition-all
                  border
                ">
                Easy
              </button>
            </div>
          </div>

          <!-- Placeholder to keep spacing consistent (only is active when definition is not shown) -->
          <!-- Did this in order to have more consistent UI -->
          <div class="flex justify-center" v-show="!showDefinition">
            <div class="rounded-lg w-1/2 flex flex-row gap-4 items-center justify-center">
              <button v-show="!showDefinition" class="
                  text-lg
                  p-2
                  px-8
                  md:mt-8
                  mt-4
                  font-semibold
                  border
                  invisible
                ">
                PLACEHOLDER
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <button class="p-6 border hover:bg-gray-100 w-1/2 self-center" @click="toggleDefinition()">Show Defition</button>
  </div>
</template>

<script setup lang="ts">
import DeckInfo from '../../types/DeckInfo';
import api from '../../api';
import Card from 'types/Card';

const answer = ref<string>('');
const deckInfo = ref<DeckInfo>();
const correct = ref<boolean>(true);
let cards = ref<Card[]>();
let showDefinition = ref(false);

const { params } = useRoute();
let deckId: number = 0;
if (typeof params.id === 'string') {
  deckId = parseInt(params.id);
} else {
  console.error("Incorrect parameter")
  navigateTo('/')
}


let encodedToken: string = '';
onMounted(() => {
  const { tokenEncoded } = useToken();
  if (tokenEncoded.value) {
    encodedToken = tokenEncoded.value;
    getDeckInfo();
    getCards();
  }
})

const getDeckInfo = async () => {
  const deckRes = await api(encodedToken).deck.getDeckSpecific(deckId);
  if (deckRes.error) {
    console.error(deckRes.error);
    return alert(deckRes.error);
  }
  if (!deckRes.data) {
    navigateTo('/')
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

const getCards = async () => {
  const cardsRes = await api(encodedToken).card.getAllCards(deckId);
  if (cardsRes.error) {
    console.error(cardsRes.error);
    alert(cardsRes.error);
  }
  cards.value = cardsRes.data;
}

const toggleDefinition = () => {
  showDefinition.value = !showDefinition.value;
}

</script>

<script lang="ts">
definePageMeta({
  layout: 'navbar-layout',
  middleware: ['auth'],
})
</script>