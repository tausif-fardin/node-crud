const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users.js')
require('dotenv').config()

const app = express();

app.use(bodyParser.json());

//Get
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('You just hit  the get method huhu.');
})









const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
})