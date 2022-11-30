const express = require('express');

const router = express.Router();
const friendsController = require('../controllers/user-controller');

// sends array of user objects when request to /users endpoint is received
router.get('/', friendsController.getUsers, (req, res) => {
  // send json of array of user objects
  // console.log('sending array of users');
  res.status(200).json(res.locals.users);
});

router.get('/:user/:friend', friendsController.getMessages, (req, res) => {
  console.log('getting messages');
  res.status(200).json(res.locals.messages);
})

// redirect to user router
// app.use('/:username', userRouter);

module.exports = router;
