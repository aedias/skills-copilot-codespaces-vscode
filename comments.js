// create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// use public directory
app.use(express.static('public'));

// parse the body of the request
app.use(express.json());

// get comments
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname + '/data/comments.json'));
});

// post comments
app.post('/comments', (req, res) => {
  let comments = require('./data/comments.json');
  let newComment = req.body;
  comments.push(newComment);
  res.json(comments);
});

// start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});