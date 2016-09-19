<template>
  <div>
    <h1>{{ heading }}</h1>
    <game-map></game-map>
  </div>
</template>

<script>
  import GameMap from './map.vue';

  export default {
    data() {
      return {
        heading: 'Vue Dungeon'
      };
    },
    components: {
      GameMap
    }
  }
</script>

<style>
  h1 {
    color: green;
  }
</style>
