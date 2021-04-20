const express = require('express');
const axios = require('axios');
//API KEYS HIDDEN IN ENV FILE
require('dotenv').config();

const router = express.Router();

const topArtistsUrl = 'https://api.rockbot.com/v3/engage/top_artists';

const searchUrl = 'https://api.rockbot.com/v3/engage/search_artists';

const requestUrl = 'https://api.rockbot.com/v3/engage/request_artist';

//Gets top 10 artists
router.get('/', async (req, res) => {
  await axios
    .get(topArtistsUrl, {
      headers: { Authorization: process.env.RB_API },
    })
    .then((response) => {
      const data = response.data.response.slice(0, 10);
      res.json(data);
    })
    .catch((err) => console.log(err));
});

//Searches for artists based on search query and returns first 9 results
router.get('/search', async (req, res) => {
  console.log(req.query);
  await axios
    .get(searchUrl, {
      headers: { Authorization: process.env.RB_API },
      params: req.query,
    })
    .then((response) => {
      const data = response.data.response.slice(0, 9);
      res.json(data);
    })
    .catch((err) => console.log(err));
});

//Adds song based on artist ID to queue
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
