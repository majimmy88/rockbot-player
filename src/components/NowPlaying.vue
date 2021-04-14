<template>
  <div class="container">
    <div class="current">Current Song</div>
    <h4><u>Coming Up</u></h4>
    <ul>
      <li>Song 1</li>
      <li>Song 2</li>
      <li>Song 3</li>
      <li>Song 4</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NowPlaying',
    props: {
      songs: {},
    },
  };
</script>

<style scoped>
  .container {
    padding: 10px;
  }
  .current {
    border: 1px solid black;
    border-radius: 5px;
    height: 50px;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    margin-left: 10px;
  }
</style>
