'use strict';

import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/mod_03', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  res.json({ output: req.body });
});

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);