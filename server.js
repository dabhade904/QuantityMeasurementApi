const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const expressValidator=require('express-validator')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())
app.use(expressValidator())

//setting notes routes to express app
require('./main/source/routes/routes')(app)

// listening to request
var server = app.listen(4000, () => {
    console.log("server is listening on port 4000");
});
module.exports = server