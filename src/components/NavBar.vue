<template>
  <footer>
    <h1>{{ title }}</h1>
  </footer>
</template>

<script>
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
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
