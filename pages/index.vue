<template>
  <section class="home h-screen flex flex-col items-center justify-center">
    <div class="text-center mb-12">
      <h1 class="text-5xl">
        Themes
      </h1>
      <h2 class="font-medium">
        List of Themes with latest technologies
      </h2>
    </div>
    <div>
      <nuxt-link
        to="/adbera"
        class="no-underline tracking-wide text-xl text-white bg-green px-4 py-2 rounded-full shadow hover:shadow-md font-medium">
        Adbera
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans');

section {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
}
</style>
