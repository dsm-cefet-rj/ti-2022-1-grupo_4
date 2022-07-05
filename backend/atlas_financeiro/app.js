const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const passport = require('passport')
const authenticate = require('./authenticate')
const { MongoClient, ServerApiVersion } = require('mongodb')
const config = require('./config')

const url = config.mongoUrl

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const indexRouter = require('./routes/index')
const signup = require('./routes/signup')
const login = require('./routes/login')
const ativosRouter = require('./routes/ativos')
const carteirasRouter = require('./routes/carteira')

const mongoose = require('mongoose')
const connect = mongoose.connect(url, connectionParams)

connect.then( () => {
    console.log('Conectado ao servidor do Mongo DB')
}, (err) => { console.log(err)})

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(cookieParser());

app.use(bodyParser.json())

app.use((req, res, next) => {
    next()
})

app.use(passport.initialize())

// Middleware
app.use('/', indexRouter)
app.use('/ativos', ativosRouter)
app.use('/usuarios/sign-up', signup)
app.use('/usuarios/login', login)
app.use('/carteira', carteirasRouter)
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
