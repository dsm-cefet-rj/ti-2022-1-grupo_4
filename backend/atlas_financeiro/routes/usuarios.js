const express = require('express')
const router = express.Router()
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')
const authenticate = require('../authenticate')
const Usuario = require('../models/usuario')


router.use(bodyParser.json());

// router.post('/signup', cors.corsWithOptions, (req, res, next) => {
router.post('/sign-up', (req, res, next) => {
  Usuario.register(new User({username: req.body.username}), req.body.password, 
  (err, user) => {
    if(err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.json({err: err})
    } else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      })
    }
  })
})

router.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({_id: req.user._id})
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({success: true, token: token, status: 'You are successfully logged in!'})
})

// router.route('/login').options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
// router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
router.post('/', (req, res) => {
  // var token = authenticate.getToken({_id: req.user._id});
  Usuario.find({}).then((usuarios) => {
    console.log(usuarios);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // res.json({id: req.user._id, token: token});
  }, (error) => next(error)).catch((error) => next(error));
});
  
  // router.get('/logout', cors.corsWithOptions, (req, res) => {
  router.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy();
      res.clearCookie('session-id');
      res.redirect('/');
    }
    else {
      var err = new Error('You are not logged in!');
      err.status = 403;
      next(err);
    }
  });

  
module.exports = router;