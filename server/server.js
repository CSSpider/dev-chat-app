const express = require('express');
const app = express();
const path = require('path');

// dotENV
require('dotenv').config();

// port
const PORT = process.env.PORT || 3000;

// require in our routers
const usersRouter = require('./routes/users');
const newsRouter = require('./routes/news');

// controllers
const friendsController = require('./controllers/friends-controller');

//handle incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// send static files, when requeted from / endpoint
app.get('/', (req, res) => {
  console.log('request to /');
  console.log('GET REQUEST RECEIVED, sending HTML file');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// routher for users
app.use('/users', usersRouter);
// roucter for news
app.use('/news', newsRouter);

// create new user
app.post('/signup', friendsController.createUser, (req, res) => {
  console.log('request to /signup');
  console.log('redirect to homepage');
  res.sendStatus(200);
});

// login
app.post('/login', friendsController.verifyUser, (req, res) => {
  console.log('request to /login');
  if (res.locals.user.length === 0) return next({ log: 'invalid login' });
  res.sendStatus(200);
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
