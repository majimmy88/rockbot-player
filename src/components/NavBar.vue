<template>
  <div class="navbar">
    <a href="#">Now Playing</a>
    <a href="#">Request</a>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NavBar',
    props: {
      title: {
        type: String,
        default: 'Hello World',
      },
    },
  };
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 30px;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    /* align-content: center; */
    margin-top: 200px;
    position: fixed;
    bottom: 0px;
  }
  a {
    color: #4b93eb;
    text-decoration: none;
  }
</style>
