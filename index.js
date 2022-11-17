const app = require('express')();

app.get('/', (req, res) =>
    //res.json({ message:'Hello World!' })
    res.send("Hello world!")
);

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Example app is working on port ${port}`);
})
