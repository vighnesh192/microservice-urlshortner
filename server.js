import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

import { getUrlController, postUrlController } from './src/controllers/index.js';
import makeExpressCallback from './src/express-callback/express-callback.js';

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/shorturl/:id', makeExpressCallback(getUrlController))
app.post('/api/shorturl', makeExpressCallback(postUrlController))

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
