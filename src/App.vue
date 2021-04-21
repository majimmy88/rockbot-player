<template>
  <div class="main-container">
    <Header />
    <router-view v-slot="{ Component }">
      <!-- Animation when navigating between pages -->
      <transition name="scale" mode="out-in">
        <!-- Utilizing keep-alive to boost performance by caching page and maintaining data from api request-->
        <keep-alive>
          <component :is="Component" :key="$route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
    <NavBar />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './components/Header.vue';
  import NavBar from './components/NavBar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
      NavBar,
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
    display: flex;
    justify-content: center;
  }
  .main-container {
    min-width: 320px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
    max-width: 700px;
    border: 1px solid black;
    border-bottom: 0;
    overflow-y: auto;
    margin-bottom: 15x;
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s ease;
  }
  .scale-enter-from,
  .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
