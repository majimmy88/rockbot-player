import axios from 'axios';

const url = 'http://localhost:5000/api/songs/';

//Get Songs from server
class SongService {
  static getSongs() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data.response;
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  //Posts either up or down vote for song based on ID and then updates song queue
  static vote(id, data) {
    return new Promise((resolve, reject) => {
      axios
        .post(url + id, data)
        .then((res) => {
          const data = res.data.response;
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

export default SongService;
