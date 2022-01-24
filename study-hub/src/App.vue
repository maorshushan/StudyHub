<template>
  <v-app class="app">
    <background>
    <v-main>
      <router-view/>
    </v-main>
    </background>
  </v-app>
</template>

<script>
import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
      Background,
    },

  data: () => ({
    //
  }),
  
};
</script>


<style scoped>
   .app {
    background-image: url("/assets/background.jpg");
  }
</style>
