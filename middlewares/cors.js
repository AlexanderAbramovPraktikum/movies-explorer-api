const cors = require('cors');

const corsConfig = cors({
  origin: [
    'https://lovemovies.nomoredomains.sbs',
    'http://lovemovies.nomoredomains.sbs',
  ],
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-type'],
});

module.exports = corsConfig;
