<template>
  <div class="container">
    <h3><u>Top Artists</u></h3>
    <div class="artist-photo-container">
      <div
        class="artist"
        v-for="topArtist in topArtists"
        v-bind:key="topArtist.artist_id"
      >
        <button v-on:click="addToQueue(topArtist.artist_id)">
          <img v-bind:src="topArtist.artwork_small" alt="artwork small" />
          <div class="artist-name">{{ topArtist.artist }}</div>
        </button>
      </div>
    </div>
    <div class="search">
      <input type="text" v-model="query" placeholder="Search Artists" />
      <button v-on:click="searchArtists()">Search</button>
    </div>
    <div class="artists-container">
      <div v-if="searchResults.length === 0">
        Search Artists to add to queue
      </div>
      <div
        class="artist-info"
        v-for="artist in searchResults"
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
    name: 'Search',
    data() {
      return {
        topArtists: [],
        query: '',
        searchResults: [],
      };
    },

    methods: {
      //Gets to top artists from server
      async getArtists() {
        try {
          const res = await ArtistService.getArtists();
          console.log(res);
          this.topArtists = res;
        } catch (err) {
          console.log(err);
        }
      },

      //Searchs artists based on search input and renders on client
      async searchArtists() {
        // console.log(this.query);
        const data = {
          query: this.query,
        };
        try {
          const res = await ArtistService.searchArtists(data);
          console.log(res);
          this.searchResults = res;
        } catch (err) {
          console.log(err);
        }
      },
      //Adds song to queye on Now Playing page
      async addToQueue(id) {
        //Adds artist to queue
        try {
          await ArtistService.addToQueue(id);
        } catch (err) {
          console.log(err);
        }
      },
    },
    async created() {
      //gets top artists when component is created
      this.getArtists();
    },
  };
</script>

<style scoped>
  .container {
    padding: 0 10px;
    margin-top: 60px;
    min-height: calc(100vh - 60px - 39px);
  }
  .artist-photo-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: auto;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-left: -10px;
    margin-right: -10px;
  }
  .artist button {
    background-color: #fff;
    border: none;
  }

  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 5px;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .search input {
    width: 70%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
  }

  .search button {
    width: 20%;
    height: 40px;
    border-color: #4b93eb;
    border-width: 1px;
    color: #4b93eb;
    background-color: #fff;
    border-radius: 2px;
    outline: none;
    text-align: center;
  }
  .artists-container {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
    width: 100%;
    padding-bottom: 50px;
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
</style>
