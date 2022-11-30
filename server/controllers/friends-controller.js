const db = require('../models/database');
const bcrypt = require('bcrypt');

const friendsController = {};

// why is this here? we dont need this.
friendsController.getUsers = (req, res, next) => {
  const GET_USERS = 'SELECT username, firstName, lastName FROM users';
  console.log('in getUsers middleware');
  db.query(GET_USERS)
    .then((data) => {
      // console.log('response data', data);
      res.locals.users = data.rows;
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

// create user
friendsController.createUser = (req, res, next) => {
  // deconstruct user data
  // we are no-longer requiring first and last name - this will be replaced with email
  const { username, password, firstName, lastName } = req.body;
  const values = [username, password, firstName, lastName];
  const CREATE_USER =
    'INSERT INTO users (username, password, firstName, lastName) VALUES ($1, $2, $3, $4);';
  console.log('in createUser middleware');
  db.query(CREATE_USER, values)
    .then((response) => {
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

// verify user
friendsController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  const values = [username, password];

  console.log('incoming username / pw:', values);

  try{
    // find the password that matches this username in the DB
    const query = `SELECT password FROM users WHERE username = '${username}'`;
    const params = [];

    console.log('db', await db.query(query));
    const result = await db.query(query, params);
    console.log('loging query result:', result.rows[0].password);

    console.log('pw input:', password, 'ps in db', result.rows[0].password);

    const pwcompare = await bcrypt.compare(password, result.password);

    // if nothing is found, OR password username mismatch, throw error
    if (result.rows[0] === undefined || pwcompare) throw 'Wrong username or password';

    // otherwise continue
    res.locals.user = {username};
    return next();
  }
  catch (err) {
    next({
      log: 'userController.verifyUser error - wrong user/pass',
      status: 400,
      message: { err: err }
    })
  }
};

// getting messages for chat history?
friendsController.getMessages = (req, res, next) => {
  //get variables from params
  const { user, friend } = req.params;

  //set values from params
  const values = [user, friend];

  //set sql query
  const GET_MESSAGES =
    'SELECT * FROM messages WHERE sender=$1 AND receiver=$2 OR sender=$2 AND receiver=$1';
  console.log('in getMessages middleware');
  db.query(GET_MESSAGES, values)
    .then((data) => {
      console.log('response data', data);
      res.locals.messages = data.rows;
      return next();
    })
    .catch((err) => {
      return next({ err });
    });
};

// meant for chat history?
friendsController.sendMessage = (req, res, next) => {
  console.log('in sendMessage, req.body =', req.body);
  const { sender, receiver, body } = req.body;
  console.log('request sender', sender);
  const values = [sender, receiver, body];
  const SEND_MESSAGE =
    'INSERT INTO messages (sender, receiver, body) VALUES ($1, $2, $3);';
  db.query(SEND_MESSAGE, values)
    .then((response) => {
      return next();
    })
    .catch((err) => {
      console.log('caught error in sendMessage');
      return next({ err });
    });
};

module.exports = friendsController;
