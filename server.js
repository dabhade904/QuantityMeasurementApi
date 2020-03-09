const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port =4000;
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())

//setting notes routes to express app
require('./main/source/routes/routes')(app)

//listening to request
// app.listen(4000, () => {
    // console.log("server is listening on port 4000");
// });

app.get('/',(req,res)=>{
    res.send('PORT 4000');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('Listening on port------> ',port);
    
})