<template>
  <div class="navbar">
    <router-link class="nav-link" to="/">Now Playing</router-link>
    <router-link class="nav-link" to="/search">Request</router-link>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NavBar',
    props: {
      title: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 200px;
    position: fixed;
    bottom: 0px;
  }
  .nav-link {
    color: #4b93eb;
    text-decoration: none;
  }
</style>
