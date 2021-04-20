<template>
  <div class="header-container">
    <h1>Mini Rockbot</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style scoped>
  .header-container {
    display: flex;
    justify-content: center;
    background-color: #33639e;
    color: #fff;
    max-width: 700px;
    width: 100vw;
    position: fixed;
    min-height: 60px;
  }
</style>
