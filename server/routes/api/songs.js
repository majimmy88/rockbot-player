const express = require('express');
const axios = require('axios');
//API KEYS HIDDEN IN ENV FILE
require('dotenv').config();

const router = express.Router();
const url = 'https://api.rockbot.com/v3/engage/now_playing';

//Get songs
router.get('/', async (req, res) => {
  await axios
    .get(url, {
      headers: { Authorization: process.env.RB_API },
      params: { queue: 1 },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

//Posts either up or down vote for song based on ID and then sends updated song queue to client
router.post('/:id', async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const direction = req.body.direction;
  // console.log(direction);

  await axios
    .post(
      `https://api.rockbot.com/v3/engage/vote_${direction}`,
      `pick_id=${id}`,
      {
        headers: { Authorization: process.env.RB_API },
      }
    )
    .then((response) => {
      console.log(response.data.response.queue);
    })
    .catch((err) => {
      console.log(err);
    });
  await axios
    .get(url, {
      headers: { Authorization: process.env.RB_API },
      params: { queue: 1 },
    })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
