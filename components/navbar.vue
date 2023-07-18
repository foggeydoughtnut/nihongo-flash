<template>
  <div class="flex flex-row border-b shadow-md py-4">
    <div class="flex-1 ml-4">
      <NuxtLink to="/"
        class=" rounded-xl p-2 px-6 hover:shadow-lg transition-all delay-75 duration-300 text-lg">
        <i class="fa-solid fa-house text-3xl"></i>
      </NuxtLink>
    </div>
    <div class="mr-8">
      <NuxtLink to="/settings"
        class=" rounded-xl p-2 px-6  hover:shadow-lg transition-all delay-75 duration-300 text-lg"
      >
      <i class="fa-solid fa-gear text-3xl"></i>
      </NuxtLink>
    </div>
  </div>
</template>
