import axios from 'axios';

const url = 'http://localhost:8000/api/artists/';

//Gets top artists from server
class ArtistService {
  static getArtists() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  //Searches for artists based on search query and returns first 9 results
  static searchArtists(query) {
    // console.log(query);
    return new Promise((resolve, reject) => {
      axios
        .get(url + 'search', { params: query })
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  //Adds song based on artist ID to queue
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

  static browseArtists(data) {
    // console.log(data);
    return new Promise((resolve, reject) => {
      axios
        .get(url + 'browse', { params: data })
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}

export default ArtistService;
