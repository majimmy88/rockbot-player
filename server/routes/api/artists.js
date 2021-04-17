const express = require('express');
const axios = require('axios');

const router = express.Router();

const url = 'https://api.rockbot.com/v3/engage/top_artists';

//Get artists
router.get('/', async (req, res) => {
  await axios
    .get(url, {
      headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
    })
    .then((response) => {
      console.log(response.data.response.slice(0, 3));
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
