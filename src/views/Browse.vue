<template>
  <div class="container">
    <div class="scroll-bar">
      <div class="letter" v-for="letter in alpha" v-bind:key="letter">
        <button @click="browseArtists(letter)">
          <u>{{ letter }}</u>
        </button>
      </div>
    </div>
    <div class="artists-container">
      <div
        class="artist-info"
        v-for="artist in artistsList"
        v-bind:key="artist.pick_id"
      >
        <button v-on:click="addToQueue(artist.artist_id)">
          <img v-bind:src="artist.artwork_small" alt="artwork small" />
          <div class="artist-name">{{ artist.artist }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import ArtistService from '../services/ArtistService.js';
  export default {
    name: 'Browse',
    data() {
      return {
        artistsList: [],
        alpha: [],
        searchResults: [],
      };
    },
    methods: {
      //Searches and returns artists based on first letter
      async browseArtists(letter) {
        try {
          if (letter) {
            const data = {
              letter: letter,
            };
            const res = await ArtistService.browseArtists(data);
            this.artistsList = res;
            console.log(this.artistsList.length);
          } else {
            const res = await ArtistService.browseArtists();
            this.artistsList = res;
            console.log(this.artistsList.length);
          }
        } catch (err) {
          console.log(err);
        }
      },
      //Adds song to queye on Now Playing page
      async addToQueue(id) {
        try {
          await ArtistService.addToQueue(id);
        } catch (err) {
          console.log(err);
        }
      },
    },

    async created() {
      this.alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
      this.browseArtists();
    },
  };
</script>

<style scoped>
  .container {
    padding: 0 10px;
    margin-top: 60px;
    min-height: calc(100vh - 60px - 39px);
  }
  .scroll-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    overflow-x: auto;
    background-color: #ffffff;
  }
  .letter button {
    font-size: 20px;
    cursor: pointer;
    margin: 3px;
    border: none;
    color: #4b93eb;
    background-color: #ffffff;
  }
  .artists-container {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    width: 100%;
    padding-bottom: 50px;
    overflow-y: auto;
  }
  .artist-info {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 33%;
    margin-bottom: 10px;
  }
  .artist-info button {
    background-color: #fff;
    border: none;
  }

  .artist-name {
    font-weight: 900;
    font-size: 14px;
  }
  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 5px;
  }
</style>
