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
friendsController.createUser = async (req, res, next) => {
  // deconstruct user data
  const { username, password, firstName, lastName, email } = req.body;
  console.log('incoming data', req.body);

  try {
    const salt_work_factor = 10;
    const encryptedPW = await bcrypt.hash(password, salt_work_factor);

    // find the password that matches this username in the DB
    const query = `INSERT INTO users
                  (firstname, lastname, username, password, email)
                  VALUES ($1, $2, $3, $4, $5)`;
    const params = [firstName, lastName, username, encryptedPW, email];

    const insertResult = await db.query(query, params);
    console.log('result of insert: ', insertResult.rows[0]);

    // add username to res.locals to send to frontend
    res.locals.user = {username};
    next();
  }
  catch (err) {
    console.log('incoming error', err);
    next({
      log: 'error in friendsController.createUser',
      status: 400,
      message: {err: 'username or emial already in use'}
    })
  }
};

// verify user
friendsController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log('incoming data', req.body);

  try{
    // find the password that matches this username in the DB
    const query = `SELECT password FROM users WHERE username = '${username}'`;
    const params = [];

    const result = await db.query(query, params);

    console.log('pw input:', password, 'ps in db', result.rows[0].password);

    const pwcompare = await bcrypt.compare(password, result.password);

    // if nothing is found, OR password username mismatch, throw error
    if (result.rows[0] === undefined || !pwcompare) throw 'Wrong username or password';

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
  console.log('request sender', sender, receiver, body);
  const values = [sender, receiver, body];
  

};

module.exports = friendsController;
