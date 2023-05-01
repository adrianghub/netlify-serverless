import express from 'express';
import serverless from 'serverless-http';


const app = express();

app.get('/', function (req, res) {

  return {
    statusCode: 200,
    body: JSON.stringify({ input: "Caught" }),
  }
});

module.exports.handler = serverless(app);
