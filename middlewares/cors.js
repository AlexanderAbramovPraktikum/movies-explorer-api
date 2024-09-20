const cors = require('cors');

const corsConfig = cors({
  origin: [
    'https://movies-explorer-frontend-two-vert.vercel.app',
    'http://movies-explorer-frontend-two-vert.vercel.app',
  ],
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-type'],
});

module.exports = corsConfig;
