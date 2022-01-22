<template>
  <div class="home">
    <v-bottom-navigation v-model="value">
    <v-btn value="recent">
      <span>Recent</span>

      <i class="fas fa-address-card"></i>
    </v-btn>

    <v-btn value="favorites">
      <span>Favorites</span>

      <v-icon>fa-address-card</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
