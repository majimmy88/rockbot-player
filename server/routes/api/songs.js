const express = require('express');
const axios = require('axios');

const router = express.Router();

const url = 'https://api.rockbot.com/v3/engage/now_playing';

//Get songs
router.get('/', async (req, res) => {
  await axios
    .get(url, {
      headers: { Authorization: '2ab742c917f872aa88644bc8f995e03159b2' },
      params: { queue: 1 },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});
//Update songs

module.exports = router;
