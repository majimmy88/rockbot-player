<template>
  <div class="container">
    <div class="now-playing">
      <img v-bind:src="nowPlaying.artwork_small" alt="artwork small" />
      <div class="artist-info">
        <div class="artist">{{ nowPlaying.artist }}</div>
        <div class="song-name">{{ nowPlaying.song }}</div>
      </div>
    </div>
    <h4><u>Coming Up</u></h4>
    <div class="queue-container">
      <div
        class="song"
        v-for="song in queue"
        v-bind:item="song"
        v-bind:key="song.song_id"
      >
        <div class="artist-info">
          <div class="artist">{{ song.artist }}</div>
          <div class="song-name">{{ song.song }}</div>
        </div>
        <div class="voting-container">
          <button>Up</button>
          {{ song.likes }}
          <button>Down</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios';
  import SongService from '../services/SongService.js';

  export default {
    name: 'NowPlaying',
    data() {
      return {
        nowPlaying: [],
        queue: [],
      };
    },

    methods: {
      async getSongs() {
        try {
          const res = await SongService.getSongs();
          this.nowPlaying = res.now_playing;
          console.log(this.nowPlaying.song);
          this.queue = res.queue;
          console.log(this.queue);
        } catch (err) {
          this.error = err.message;
        }
      },
      cancelAutoUpdate() {
        clearInterval(this.timer);
      },
    },
    async created() {
      await this.getSongs();

      setInterval(() => {
        this.getSongs();
      }, 30000);
    },
    unmounted() {
      this.cancelAutoUpdate();
    },
  };
</script>

<style scoped>
  .container {
    padding: 10px;
  }
  .now-playing {
    display: flex;
    flex-direction: row;
    height: auto;
    margin-bottom: 10px;
  }
  img {
    border: 1px solid black;
    border-radius: 10px;
    width: 70px;
    height: 70px;
  }
  .artist-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 10px;
  }

  .song {
    height: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px solid black; */
  }
  .artist {
    font-weight: 900;
    font-size: 14px;
  }
  .song-name {
    font-weight: 300;
    font-size: 17px;
  }
  .voting-container {
    display: flex;
    flex-direction: row;
  }
</style>
