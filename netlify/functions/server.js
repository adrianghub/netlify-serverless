'use strict';

import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/mod_03', (req, res) => {

  const resultArray = req.body.map(item => item.result === 'true' ? 1 : 0);
  res.status(200).send(resultArray);
});

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);