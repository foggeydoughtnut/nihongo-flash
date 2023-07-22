
<template>
  <div>
    <div class="font-sans flex flex-col items-center justify-center">
      <h1 class="font-semibold text-4xl mt-8 text-center">Login</h1>

      <div class="md:w-1/3 w-4/5 mt-16">
        <label class="block text-xl mb-1" for="username">
          Username
        </label>
        <input type="text"
          class="border w-full h-12 rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
          placeholder="Username"
          id="username" 
          v-model="username"
        />
      </div>

      <div class="md:w-1/3 w-4/5 mt-4">
        <label class="block text-xl mb-1" for="password">
          Password
        </label>
        <input type="password"
          class="border w-full h-12 rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
          placeholder="Password"
          id="password" 
          v-model="password"
        />
      </div>

      <button class="
        text-center
        text-2xl
        px-4
        py-2
        rounded-xl
        mt-8
        md:w-1/3
        w-4/5
        font-semibold
        shadow-md
        hover:shadow-lg
        delay-75
        duration-300
        transition-all
        bg-green-300
        hover:bg-green-400
      "
        @click="loginUser"
      >
        Login
      </button>

      <button class="text-md mt-4 font-semibold text-blue-500 hover:text-blue-600 transition-all duration-300 delay-75">
        Forgot Password?
      </button>

      <div class="mt-16">
        <span>
          Don't have an account?
          <NuxtLink to="/register" class="font-semibold text-blue-500 hover:text-blue-600 transition-all delay-75 duration-300">
            Sign Up
          </NuxtLink>
        </span>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import api from '../api';

  let loginFunc = (token: string) => {};
  onMounted(() => {
    const { login } = useToken();
    loginFunc = login.value;
  })
  const username = ref<string>('');
  const password = ref<string>('');

  const loginUser = async () => {
    const res = await api('').user.login({
      'username': username.value,
      'password': password.value
    });
    if (res.error || !res.data) {
      console.error("Invalid credentials");
      return
    } 
    loginFunc(res.data.token);
    return navigateTo('/');
  };

</script>