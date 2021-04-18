import axios from 'axios';

const url = 'http://localhost:5000/api/artists/';

class ArtistService {
  //Gets top artists from server
  static getArtists() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data.response.slice(0, 3);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  static searchArtists(query) {
    console.log(query);
    return new Promise((resolve, reject) => {
      axios
        .get(url + 'search', { params: query })
        .then((res) => {
          const data = res.data.response.slice(0, 9);
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  static addToQueue(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
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

export default ArtistService;
