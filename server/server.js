const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const usersRouter = require('./routes/users');
const newsRouter = require('./routes/news');
const friendsController = require('./controllers/friends-controller');

//handle incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, '../dist')));;

//serves the html file
app.get('/', (req, res) => {
  console.log('GET REQUEST RECEIVED, sending HTML file');
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// sends array of user objects when request to /users endpoint is received
app.use('/users', usersRouter);

// send signup html file
// app.get('/signup', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/signup.html'));
//   });

// create new user
app.post('/signup', friendsController.createUser, (req, res) => {
  // redirect user to their homepage
  // res.redirect('/');
  console.log('redirect to homepage');
  res.sendStatus(200);
});

//login
app.post('/login', friendsController.verifyUser, (req, res) => {
  //   res.redirect('/');
  //  redirect user to homepage on success
  //   console.log(res.locals.user.length);
  if (res.locals.user.length === 0) return next({ log: 'invalid login' });
  return res.status(200).json(res.locals.user);
});

app.post('/send', friendsController.sendMessage, (req, res) => {
  res.sendStatus(200);
});

app.use('/news', newsRouter);

//error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: '!!!!an error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);

  res.status(errorObj.status).json(errorObj.message);
});

//listener
app.listen(PORT, () => {
  console.log("hello there I'm a server at ", PORT);
});

module.exports = app;
