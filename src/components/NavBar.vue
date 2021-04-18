<template>
  <div class="navbar">
    <a href="/">Now Playing</a>
    <a href="/search">Request</a>
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
  a {
    color: #4b93eb;
    text-decoration: none;
  }
</style>
