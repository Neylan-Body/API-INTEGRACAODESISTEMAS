const express = require('express')
const cors = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
const port = 3000

app.post('/', async (req, res) => {
    console.log(req.body)
    //const {latitude, longitude} = req.body
    var data = new Date();
    var hora = data.getHours()+":"+ data.getMinutes()+":"+ data.getSeconds();    
    // res.json({ latitude, longitude, data, hora });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
