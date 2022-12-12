const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb://saswat:mypassword@mongo:27017/?authSource=admin")
    .then(() => { console.log("successfully connected to db") })
    .catch((err) => { console.log(err) })

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// 1:53:43