import axios from 'axios';

const url = 'https://api.rockbot.com/v3/engage/now_playing';

class SongService {
  //Get Songs
  static getSongs() {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
          params: { queue: 1 },
        })
        .then((res) => {
          const data = res.data.response;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default SongService;
