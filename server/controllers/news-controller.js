const axios = require('axios');

const newsController = {};

newsController.getTopNews = async (req, res, next) => {

  // the api calls the end point to pull 500 top hacker news
  try {
    const topNewsArr = await axios(
      'https://hacker-news.firebaseio.com/v0/newstories.json'
    );
    // returns only top 20 hacker news id
    res.locals.topNews = topNewsArr.data.slice(0, 20);
    return next();
  } catch (err) {
    return next({ err });
  }
};

newsController.getArticleURL = async (req, res, next) => {
  // const { id } = req.params;
  let newsArray = [];
  try {
    for (const id of res.locals.topNews) {
      // console.log(id)
      const response = await axios(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
      );
      const { title, url } = response.data;
      newsArray.push({ title: title, url: url });
    };
    res.locals.newsArray = newsArray;
    return next();
  } catch (err) {
    return next({ err });
  }
};

module.exports = newsController;
