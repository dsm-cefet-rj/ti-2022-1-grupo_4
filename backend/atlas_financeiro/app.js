var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var ativosRouter = require('./routes/ativos');
var carteirasRouter = require('./routes/carteira');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/ativos', ativosRouter);
app.use('/carteira', carteirasRouter);

module.exports = app;
