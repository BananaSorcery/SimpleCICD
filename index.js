// const app = require('express')();

// app.get('/', (req, res) =>
//     //res.json({ message:'Hello World!' })
//     res.send('<h1>Simple CI/CD project using: Docker, Jenkins (CI) and Azure App Service (CD)</h1>')
// );

// const port = process.env.PORT || 8080;

// app.listen(port,() => {
//     console.log(`App is working on port ${port}`);
// })

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

//Set folder to load css, images, js...
app.use(express.static(__dirname + '/public')); 

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port,() => {
    console.log(`Example app is working on port ${port}`);
})
