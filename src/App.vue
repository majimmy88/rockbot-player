<template>
  <div class="container">
    <h1>Rockbot Player</h1>
    <div>{{ songs }}</div>
    <NavBar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import NavBar from './components/NavBar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      NavBar,
    },
    data() {
      return {
        songs: null,
      };
    },
    mounted() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response: any) => (this.songs = response.data.chartName))
        .catch((error) => console.log(error));
    },
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  .container {
    max-width: 300px;
    margin: 30px auto;
    overflow: auto;
    min-height: 500px;
    border: 1px solid steelblue;
    border-radius: 5px;
  }
  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }
</style>
