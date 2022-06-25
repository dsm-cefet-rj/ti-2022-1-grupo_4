var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ativosRouter = require('./routes/ativos');
var carteirasRouter = require('./routes/carteira');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/atlas_financeiro';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Conectado ao servidor do Mongo DB');
}, (err) => { console.log(err)})

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
app.use('/users', usersRouter);
app.use('/ativos', ativosRouter);
app.use('/carteira', carteirasRouter);

module.exports = app;
