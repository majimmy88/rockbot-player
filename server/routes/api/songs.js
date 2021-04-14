const express = require('express');

const router = express.Router();

//Get songs
router.get('/', (req, res) => {
  res.send({
    response: {
      venue: 'Rockbot HQ',
      street: '1308 Broadway',
      city: 'Oakland',
      state: 'CA',
      zip: '94612',
      current_users: 3,
      status: 'online',
      now_playing: {
        pick_id: 1456298284,
        artist_id: 6597,
        artist: 'DeBarge',
        song_id: 34242,
        song: 'Rhythm Of The Night',
        artwork_small:
          'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/150/1/10271.jpg',
        artwork_large:
          'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/500/1/10271.jpg',
        user: 'Rockbot',
        user_image_small:
          'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-150.png',
        user_image_large:
          'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-300.png',
        likes: 0,
        dislikes: 0,
        duration: 234,
        remaining: 104,
      },
      queue: [
        {
          pick_id: 1456298290,
          artist_id: 940,
          artist: 'Tamia',
          song_id: 32340,
          song: 'Beautiful Surprise',
          artwork_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/150/9/26409.jpg',
          artwork_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/500/9/26409.jpg',
          user: 'Rockbot',
          user_image_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-150.png',
          user_image_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-300.png',
          likes: 0,
          dislikes: 0,
        },
        {
          pick_id: 1456298291,
          artist_id: 2801,
          artist: 'Sly & The Family Stone',
          song_id: 15896,
          song: "Soul Clappin'",
          artwork_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/150/7/10257.jpg',
          artwork_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/albums/500/7/10257.jpg',
          user: 'Rockbot',
          user_image_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-150.png',
          user_image_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-300.png',
          likes: 0,
          dislikes: 0,
        },
        {
          pick_id: 1456298286,
          artist_id: 807,
          artist: 'Mary J. Blige',
          song_id: 31549,
          song: 'Just Fine',
          artwork_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/artists/150/1/25611.jpg',
          artwork_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/upload/live/artists/500/1/25611.jpg',
          user: 'Rockbot',
          user_image_small:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-150.png',
          user_image_large:
            'https://d2x3f3hu3pbot6.cloudfront.net/static/assets/logos/square-300.png',
          likes: 0,
          dislikes: 0,
        },
      ],
    },
  });
});
//Update songs

module.exports = router;
