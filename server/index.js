const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const songs = require('./routes/api/songs');

const artists = require('./routes/api/artists');

app.use('/api/songs', songs);
app.use('/api/artists', artists);

const port = 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
