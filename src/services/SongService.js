import axios from 'axios';

const url = 'http://localhost:8000/api/songs/';

//Get Songs from server
class SongService {
  static getSongs() {
    return axios
      .get(url)
      .then((res) => {
        const data = res.data.response;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Posts either up or down vote for song based on ID and then updates song queue
  static vote(id, data) {
    return axios
      .post(url + id, data)
      .then((res) => {
        const data = res.data.response;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default SongService;
