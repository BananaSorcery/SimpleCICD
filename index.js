// const app = require('express')();

// app.get('/', (req, res) =>
//     //res.json({ message:'Hello World!' })
//     res.send('<h1>Hello World!</h1>')
// );

// const port = process.env.PORT || 8080;

// app.listen(port,() => {
//     console.log(`Example app is working on port ${port}`);
// })

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port,() => {
    console.log(`Example app is working on port ${port}`);
    console.log((path.join(__dirname, '/views/index.html')));
})