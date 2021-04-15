<template>
  <div class="main-container">
    <Header />
    <NowPlaying />
    <!-- <div>{{ songs }}</div> -->
    <NavBar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './components/Header.vue';
  import NavBar from './components/NavBar.vue';
  import NowPlaying from './components/NowPlaying.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      NavBar,
      NowPlaying,
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
  .main-container {
    max-width: 300px;
    margin: 30px auto;
    overflow: auto;
    min-height: 500px;
    border: 1px solid steelblue;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
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
