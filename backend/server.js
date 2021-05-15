const express = require('express')
const cors = require('cors');
const axios = require('axios');
var bodyParser = require('body-parser')
const app = express()
app.use(cors())
const port = 3000

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', async (req, res) => {
    const {latitude, longitude} = req.body
    var data = new Date()
    var segundos = data.getSeconds()
    var minutos = data.getMinutes();
    var horas = data.getHours()
    if(segundos<10){
        segundos = "0"+data.getSeconds()
    }
    if(minutos<10){
        minutos = "0"+data.getMinutes()
    }
    if(horas<10){
        horas = "0"+data.getHours()
    }
    var horario = horas+":"+minutos+":"+segundos;
    console.log(horario);
    res.json({latitude, longitude, horario});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
