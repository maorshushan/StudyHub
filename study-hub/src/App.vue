<template>
  <!-- <v-app class="app"> -->
    <background>
      <router-view/>
      <timer></timer>
      <widget startName="maor"></widget>
      <timer-widget></timer-widget>
    </background>
  <!-- </v-app> -->
</template>

<script>
import Background from './components/Background.vue'
import Timer from './components/Timer.vue'
import Widget from './components/widgets/Widget.vue'
import TimerWidget from './components/widgets/TimerWidget.vue'

export default {
  name: 'App',
  components: {
      Background,
      Timer,
      Widget,
      TimerWidget
    },

  data: () => ({
    //
  }),
  
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
}

</style>
