const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


// port
const PORT = 3000;
// console.log('this is URI',process.env.URI)

// require in our routers
const usersRouter = require('./routes/users');
const newsRouter = require('./routes/news');

// controllers
const friendsController = require('./controllers/user-controller');
const sessionController = require('./controllers/session-controller')

//handle incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// check if user is in session
app.get('/insess',
  sessionController.isLoggedIn,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  })

// send static files, when requeted from / endpoint
app.get('/', (req, res) => {
  console.log('request to /');
  console.log('GET REQUEST RECEIVED, sending HTML file');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


// router for users
app.use('/users', usersRouter);
// router for news
app.use('/news', newsRouter);

// create new user
app.post('/signup', 
  friendsController.createUser, 
  sessionController.setSSIDCookie, 
  sessionController.startSession, 
  (req, res) => {
  console.log('request to /signup');
  console.log('redirect to homepage');
  return res.status(200).json(res.locals.user);
});

// login
app.post('/login', 
  friendsController.verifyUser, 
  sessionController.setSSIDCookie, 
  sessionController.startSession,
  (req, res) => {
    if (res.locals.user.length === 0) return next({ log: 'invalid login' });
    return res.status(200).json(res.locals.user);
});


// not sure what this is for. 
app.post('/send', friendsController.sendMessage, (req, res) => {
  console.log('post to /send');
  res.sendStatus(200);
});

// catch all
app.use((req, res) => {
  const err = {
    log: '404 page not found',
    status: 404,
    message: { err: '404 error' } 
  }
  return next(err);
});

// global error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'an error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log('global error handler caught: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listener
app.listen(PORT, () => {
  console.log("listening to port: ", PORT);
});

module.exports = app;
