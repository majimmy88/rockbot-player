<template>
  <div class="container">
    <div class="now-playing">
      <img v-bind:src="nowPlaying.artwork_small" alt="artwork small" />
      <div class="artist-info">
        <div class="artist">{{ nowPlaying.artist }}</div>
        <div class="song-name">{{ nowPlaying.song }}</div>
      </div>
    </div>

    <div class="queue-container">
      <h3><u>Coming Up</u></h3>
      <div
        class="song"
        v-for="song in queue"
        v-bind:item="song"
        v-bind:key="song.pick_id"
      >
        <div class="artist-info">
          <div class="artist">{{ song.artist }}</div>
          <div class="song-name">{{ song.song }}</div>
        </div>
        <div class="voting-container">
          <button @click="vote(song.pick_id, 'up')" class="btn">
            <font-awesome-icon icon="thumbs-up" />
          </button>
          {{ song.likes }}
          <button @click="vote(song.pick_id, 'down')" class="btn">
            <font-awesome-icon icon="thumbs-down" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
        //Gets now playing and queue from rockbot api
        try {
          const res = await SongService.getSongs();
          this.nowPlaying = res.now_playing;
          this.queue = res.queue;
        } catch (err) {
          console.log(err);
        }
      },

      cancelAutoUpdate() {
        clearInterval(this.timer);
      },

      async vote(id, direction) {
        //Voting for both up and down
        //API only allows one vote for up or down
        const data = {
          direction: direction,
        };
        try {
          const res = await SongService.vote(id, data);
          this.nowPlaying = res.now_playing;
          this.queue = res.queue;
        } catch (err) {
          console.log(err);
        }
      },
    },

    async created() {
      await this.getSongs();
      setInterval(() => {
        //Gets song data every 30 seconds
        this.getSongs();
      }, 30000);
    },

    unmounted() {
      // Clears setInterval when component is unmounted
      this.cancelAutoUpdate();
    },
  };
</script>

<style scoped>
  .container {
    padding: 10px;
    margin-top: 50px;
  }
  .now-playing {
    display: flex;
    flex-direction: row;
    height: 100px;
    background-color: #fff;
    width: 100%;
    align-items: center;
    position: fixed;
  }
  img {
    border: 1px solid black;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: rotate 3s linear infinite;
    animation-play-state: paused;
  }
  .now-playing.play .img-container img {
    animation-play-state: running;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
  .queue-container {
    margin-top: 110px;
    overflow: scroll;
    margin-bottom: 40px;
  }
  .voting-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .btn {
    padding: 5px;
    background-color: #ffffff;
    border: none;
    color: #4b93eb;
  }
</style>
