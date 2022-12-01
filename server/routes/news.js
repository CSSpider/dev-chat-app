const express = require('express');

const router = express.Router();
const newsController = require('../controllers/news-controller');

// sends array of user objects when request to /users endpoint is received
router.get('/', 
  newsController.getTopNews,
  newsController.getArticleURL,
  (req, res) => {
  // sending array of top 20 news object of title and url
  res.status(200).json(res.locals.newsArray);
});

// router.get('/:id', newsController.getArticleURL, (req, res) => {
//     // console.log('sending article url')
//     res.status(200).json(res.locals.articleObj);
// })
// redirect to user router
// app.use('/:username', userRouter);

module.exports = router;
