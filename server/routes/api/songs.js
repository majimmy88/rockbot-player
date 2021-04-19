const express = require('express');
const axios = require('axios');
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
// Update songs

router.post('/:id', async (req, res) => {
  //update votes
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
