const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const topArtistsUrl = 'https://api.rockbot.com/v3/engage/top_artists';

const searchUrl = 'https://api.rockbot.com/v3/engage/search_artists';

const requestUrl = 'https://api.rockbot.com/v3/engage/request_artist';

//Get artists
router.get('/', async (req, res) => {
  await axios
    .get(topArtistsUrl, {
      headers: { Authorization: process.env.RB_API },
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
      headers: { Authorization: process.env.RB_API },
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
      headers: { Authorization: process.env.RB_API },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
