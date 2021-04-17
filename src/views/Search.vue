<template>
  <div class="container">
    <h3><u>Top Artists</u></h3>
    <div class="artist-photo-container">
      <div
        class="artist"
        v-for="artist in artists"
        v-bind:item="artist"
        v-bind:key="artist.artist_id"
      >
        <img v-bind:src="artist.artwork_small" alt="artwork small" />
      </div>
    </div>
    <div class="search">
      <input type="text" v-model="query" placeholder="Search Artists" />
      <button v-on:click="searchArtists">Search</button>
    </div>
    <div
      class="song"
      v-for="song in searchResults"
      v-bind:item="song"
      v-bind:key="song.pick_id"
    >
      <div class="artist-info">
        <div class="artist">{{ song.artist }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ArtistService from '../services/ArtistService.js';

  export default {
    name: 'Search',
    data() {
      return {
        artists: [],
        query: '',
        searchResults: [],
      };
    },

    methods: {
      async getArtists() {
        //Gets to artists from artistservice
        try {
          const res = await ArtistService.getArtists();
          console.log(res);
          this.artists = res;
        } catch (err) {
          console.log(err);
        }
      },

      async searchArtists() {
        //Searchs artists based on search input
        // console.log(this.query);
        const data = {
          query: this.query,
        };
        try {
          const res = await ArtistService.searchArtists(data);
          this.searchResults = res;
        } catch (err) {
          console.log(err);
        }
      },
    },
    async created() {
      this.getArtists();
    },
    // async updated() {},
  };
</script>

<style scoped>
  .container {
    padding: 10px;
  }
  .artist-photo-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 5px;
  }
  .search input {
    width: 90%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }
  .artist-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 10px;
  }

  .artist {
    font-weight: 900;
    font-size: 14px;
  }
</style>
