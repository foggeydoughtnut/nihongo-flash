export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {

    const { token } = useToken();

    if (to.path !== '/login' && !token.value) {
      return navigateTo('/login');
    }
  }
})