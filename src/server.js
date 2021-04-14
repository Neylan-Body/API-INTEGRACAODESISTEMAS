// importar dependencia
const express = require('express');
const path = require('path');
const cors = require('cors');
// iniciando o express

app = express();
app.use(cors())
app
    // ultilizar body do req
    .use(express.urlencoded({extended: true}))
    // ultilizando os arquivos estaticos
    .use(express.static('public'))
    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    // rotas da aplicação
    .get('/', function (req, res) {
        return res.render('index')
    })
// ligar o servidor
app.listen(5500);

