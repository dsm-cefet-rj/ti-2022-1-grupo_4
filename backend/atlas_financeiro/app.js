const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ativosRouter = require('./routes/ativos');
var carteirasRouter = require('./routes/carteira');

const connect = mongoose.connect('mongodb://localhost:27017/atlas_financeiro');

connect.then((db) => {
    console.log('Conectado ao servidor do Mongo DB');
}, (err) => { console.log(err)})


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
