<template>
  <div id="background-container">
        <img
          :src="require('../assets/background.jpg')"
          id="background-img"
        />
        <slot id="page-content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Background'
  }
</script>

<style scoped>
#background-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
}

#background-img {
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
}

#background-img::after {
    content: "";
    background-color: black;
    position:absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: .4;
}
</style>
