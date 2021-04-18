const express = require('express');
const axios = require('axios');

const router = express.Router();

const topArtistsUrl = 'https://api.rockbot.com/v3/engage/top_artists';

const searchUrl = 'https://api.rockbot.com/v3/engage/search_artists';

const requestUrl = 'https://api.rockbot.com/v3/engage/request_artist';

//Get artists
router.get('/', async (req, res) => {
  await axios
    .get(topArtistsUrl, {
      headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

router.get('/search', async (req, res) => {
  console.log(req.query);
  await axios
    .get(searchUrl, {
      headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
      params: req.query,
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

router.post('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await axios
    .post(requestUrl, `artist_id=${id}`, {
      headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
