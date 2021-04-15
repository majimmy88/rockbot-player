import axios from 'axios';

const url = 'http://localhost:5000/api/songs';

class SongService {
  //Get Songs
  static getSongs() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
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
