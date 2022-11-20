<script lang="ts">

import {getTiles} from '@/service'
import Map from '@/components/Map.vue'

export default {
  mounted() {
    
  },
  components: {
    Map,
  },
  methods: {
    async getTiles() {
      console.log((await getTiles()).data)
    },
  },
}
</script>

<template>
  <!--<header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>-->
  <div class="container">
    <button @click="getTiles"></button>
    <Map class="map"></Map>
  </div>
</template>

<style scoped>

.container {
  max-height: 100%;
  max-width: 100%;
}
.map {
  max-height: 100%;
  max-width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
