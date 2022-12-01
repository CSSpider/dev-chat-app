const db = require('../models/database');

const sessionController = {};

sessionController.setSSIDCookie = (req, res, next) => {
  console.log('in setting SSID...')
  // set ssid to username
  console.log('this is username', res.locals.user.username)
  res.cookie('ssid', res.locals.user.username, {httpOnly: true, overwrite: true});
  console.log('this is ssid');

  return next();
};

sessionController.startSession = async (req, res, next) =>  {
  console.log('in starting session...')
  console.log(res.locals.user.username)

  // make sure session query is upsert. insert if doesn't exist, and update if it does

  const query = `
    INSERT INTO session (ssid, time_created) VALUES ($1, $2)
    ON CONFLICT (ssid)
    DO UPDATE SET time_created = $2;
    `;
  const params = [res.locals.user.username, Date.now()]

  const insertResult = await db.query(query, params);
  console.log('result of insert: ', insertResult.rows[0]);

  return next();
};

sessionController.isLoggedIn = async (req, res, next) => {

  console.log('in is logged in...')
  const ssid = res.locals.user.username;
  console.log(ssid)

  const query = `SELECT * FROM session WHERE ssid='${ssid}'`

  const selectResult = await db.query(query);
  console.log(selectResult.rows[0])
  console.log(selectResult.rows[0].time_created)

  const time_created = selectResult.rows[0].time_created;
  const time_current = Date.now();
  console.log('time created (in milliseconds) ', time_created);
  console.log('time current (in milliseconds) ', time_current);
  console.log('time elapsed', time_current - time_created);

  // compares time in milliseconds: set to 5 seconds
  if (time_current - time_created > 5000) {
    console.log('timed out!')
    return res.redirect('/signup');
  } else {
    console.log('still logged in')
    return next();
  }
};

module.exports = sessionController;

