<template>
  <ul>
    <map-row></map-row>
    <map-row></map-row>
    <map-row></map-row>
    <map-row></map-row>
    <map-row></map-row>
  </ul>
</template>

<script>
  import MapRow from './map-row.vue';

  export default {
    components: {
      MapRow
    }
  }
</script>

<style>
  ul {
    padding: 0;
    list-style-type: none;
  }
</style>
