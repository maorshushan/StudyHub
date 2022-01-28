<template>
  <widget startName="timer" @update:editing="editing = $event">
    <vs-row justify="space-between">
      <vs-col w="9">
        <h1 id="clock">
          {{ minutesDisplay + ":" + secondsDisplay }}
        </h1>
      </vs-col>
      <vs-col w="3" id="button-wrapper">
        <vs-row>
          <vs-button v-if="counting" danger @click="stopCountdown"
            >Stop</vs-button
          >
          <vs-button v-else @click="countdown">Start</vs-button>
        </vs-row>
        <vs-row>
          <vs-button transparent>Reset</vs-button>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row> </vs-row>
  </widget>
</template>
<script>
import Widget from "./Widget.vue";

export default {
  name: "TimerWidget",
  components: {
    Widget,
  },

  data: () => ({
    minutes: 0,
    seconds: 10,
    editing: false,
    counting: false,
  }),
  computed: {
    minutesDisplay() {
      return this.minutes < 10 ? "0" + this.minutes : this.minutes;
    },
    secondsDisplay() {
      return this.seconds < 10 ? "0" + this.seconds : this.seconds;
    },
  },
  methods: {
    countdown() {
      this.counting = true;
      this.oneSecondLess();
      var loop = setInterval(() => {
        if ((this.minutes == 0 && this.seconds == 0) || !this.counting) {  
          this.counting = false;
          clearInterval(loop);        
        } else {
          this.oneSecondLess();
        }
      }, 1000);
    },
    stopCountdown() {
      this.counting = false; 
    },
    oneSecondLess() {
      if (this.seconds == 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    },
  }
};
</script>

<style scoped>
#clock {
  font-size: 5rem;
  margin: .5rem;
}
#button-wrapper {
  margin-top: 1.7rem;
}
</style>