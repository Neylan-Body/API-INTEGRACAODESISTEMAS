const express = require('express')
const cors = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
const port = 3000

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, async (req, res) => {
    const {ip} = req.body   
    const response = await axios('http://ip-api.com/json/'+ip)
    res.json(response.data);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
