const path = require('path');

const dotenv = require('dotenv');
const express = require('express');

const app = express();
const root = path.join.bind(this, __dirname);
dotenv.config({ path: root(`.env.${process.env.NODE_ENV}`) });

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => res.send('pong'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen({ host: process.env.HOST, port: process.env.PORT }, () => {
  console.log(`Server is running on:
     host: ${process.env.HOST}
     port: ${process.env.PORT}`);
});
