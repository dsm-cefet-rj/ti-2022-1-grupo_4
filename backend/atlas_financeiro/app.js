var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ativosRouter = require('./routes/ativos');
var carteirasRouter = require('./routes/carteiras');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // console.log('Acessou o middleware.');
    app.use(cors());
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ativos', ativosRouter);
app.use('/carteiras', carteirasRouter);

module.exports = app;
