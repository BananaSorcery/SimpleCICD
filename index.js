const app = require('express')();

app.get('/', (req, res) =>
    //res.json({ message:'Hello World!' })
    res.send("Deployment Success!!! App is running")
);

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Example app is working on port ${port}`);
})
