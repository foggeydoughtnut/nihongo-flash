
<template>
  <div>
    <div class="font-sans flex flex-col items-center justify-center">
      <h1 class="font-semibold text-4xl mt-8 text-center">Register Account</h1>

      <div class="md:w-1/3 w-4/5 mt-16">
        <label class="block text-xl mb-1" for="username">
          Username
        </label>
        <input type="text"
          class="border w-full h-12 rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
          placeholder="Username" id="username" v-model="username" />
      </div>

      <div class="md:w-1/3 w-4/5 mt-4">
        <label class="block text-xl mb-1" for="password">
          Password
        </label>
        <input type="password"
          class="border w-full h-12 rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
          placeholder="Password" id="password" v-model="password" />
      </div>

      <div class="md:w-1/3 w-4/5 mt-4">
        <label class="block text-xl mb-1" for="conPass">
          Confirm Password
        </label>
        <input type="password"
          class="border w-full h-12 rounded-lg text-lg p-4 shadow-md hover:shadow-lg delay-75 transition-all duration-300"
          placeholder="Confirm Password" id="conPass" v-model="confirmPassword" />
      </div>


      <button class="
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
      " @click="register">
        Create Account
      </button>

      <div class="mt-4">
        <span>
          Already have an account?
          <NuxtLink to="/login"
            class="font-semibold text-blue-500 hover:text-blue-600 transition-all delay-75 duration-300">
            Log In
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from '../api';

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

let loginFunc = (token: string) => { };
onMounted(() => {
  const { login } = useToken();
  loginFunc = login.value;
})

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

const register = async () => {
  if (!username.value) {
    return alert("Missing username");
  }
  if (!password.value) {
    return alert("Missing password");
  }
  if (!confirmPassword.value) {
    return alert("Missing confirm password");
  }
  if (password.value !== confirmPassword.value) {
    return alert("Passwords do not match");
  }

  const res = await api('').user.addUser({
    'username': username.value,
    'password': password.value,
  });
  if (res.error) {
    console.error(res.error);
    return alert(res.error);
  }
  loginUser();
}


</script>