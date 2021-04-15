const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const songs = require('./routes/api/songs');

app.use('/api/songs', songs);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
