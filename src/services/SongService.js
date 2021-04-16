import axios from 'axios';

const url = 'http://localhost:5000/api/songs/';

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
          console.log(err);
        });
    });
  }

  static upVote(id) {
    return new Promise((resolve, reject) => {
      console.log(id);
      axios
        .post(url + id)
        .then(() => {
          console.log(`Data is sent to express`);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

export default SongService;
