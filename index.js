const app = require('express')();

app.get('/', (req, res) =>
    //res.json({ message:'Hello World!' })
    res.send(<h1>"Hello World!"</h1>)
);

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Example app is working on port ${port}`);
})

// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();

// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.render('index');
// });

// // router.get('/about',function(req,res){
// //   res.sendFile(path.join(__dirname+'/about.html'));
// // });

// // router.get('/sitemap',function(req,res){
// //   res.sendFile(path.join(__dirname+'/sitemap.html'));
// // });

// //add the router
// // app.use('/', router);
// app.listen(process.env.port || 8080);

// app.listen(port,() => {
//     console.log(`Example app is working on port ${port}`);
// })
