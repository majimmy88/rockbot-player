import axios from 'axios';

const url = 'http://localhost:5000/api/songs/';

class SongService {
  //Get Songs from server
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

  static vote(id, data) {
    //Sends vote post request to server
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
