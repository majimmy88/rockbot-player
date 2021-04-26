<template>
  <div class="container">
    <div class="np-play-container" id="np-play-container">
      <div class="now-playing">
        <img v-bind:src="nowPlaying.artwork_small" alt="artwork small" />
        <div class="artist-info">
          <div class="artist">{{ nowPlaying.artist }}</div>
          <div class="song-name">{{ nowPlaying.song }}</div>
        </div>
      </div>
      <div class="play">
        <button v-if="paused" @click="playSong()">
          <font-awesome-icon icon="play" />
        </button>
        <button v-if="!paused" @click="playSong()">
          <font-awesome-icon icon="pause" />
        </button>
      </div>
    </div>
    <div class="queue-container">
      <h3><u>Coming Up</u></h3>
      <div class="song" v-for="song in queue" v-bind:key="song.pick_id">
        <div class="artist-info">
          <div class="artist">{{ song.artist }}</div>
          <div class="song-name">{{ song.song }}</div>
        </div>
        <div class="voting-container">
          <button @click="vote(song.pick_id, 'up')" class="btn">
            <font-awesome-icon icon="thumbs-up" />
          </button>
          {{ song.likes - song.dislikes }}
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
        paused: true,
      };
    },

    methods: {
      //Gets now playing and queue from rockbot api
      async getSongs() {
        try {
          const res = await SongService.getSongs();
          this.nowPlaying = res.now_playing;
          this.queue = res.queue;
        } catch (err) {
          console.log(err);
        }
      },

      //Cancels set interval for receiving song data
      cancelAutoUpdate() {
        clearInterval(this.timer);
      },

      //Pressing playing will start rotating animation for album artwork and replace play icon with a pause icon
      playSong() {
        // console.log('play');
        if (this.paused === true) {
          this.paused = false;
          document.getElementById('np-play-container').classList.add('play');
        } else {
          this.paused = true;
          document.getElementById('np-play-container').classList.remove('play');
        }
      },
      // Sends voting information to server
      // vote works for both up and down
      // API only allows one vote for up or down
      // Sends back updated queue data
      async vote(id, direction) {
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
      //when component is created, app will get songs from server
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
    padding: 0 10px;
    margin-top: 60px;
    min-height: calc(100vh - 60px - 39px);
  }
  .np-play-container {
    display: flex;
    justify-content: space-between;
    height: 100px;
    background-color: #fff;
    width: 100vw;
    max-width: 680px;
    align-items: center;
    position: fixed;
    margin-top: 1px;
  }
  .now-playing {
    display: flex;
    flex-direction: row;
  }
  .now-playing img {
    border: 1px solid black;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: rotate 3s linear infinite;
    animation-play-state: paused;
  }

  .np-play-container.play .now-playing img {
    animation-play-state: running;
  }

  .play button {
    display: flex;
    background-color: #fff;
    border: 0;
    color: #dfdbdf;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    margin: 0 20px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .queue-container {
    margin-top: 110px;
    overflow: scroll;
    padding-bottom: 50px;
    overflow-y: auto;
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
