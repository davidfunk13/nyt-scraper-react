const request = require('request');
const mongoose = require('mongoose');
const db = require('./models');

const scraper = (queryData) => {
  console.log(`@scraper ${queryData}`)
  let articleData = []
  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "a039a30e45144355ba84c17a25a0796c",
      "q": queryData
    },
  }, function (err, response, body) {
    body = JSON.parse(body);
    let articles = body.response.docs
    articles.forEach(element => {
      // console.log(element)
      let title = element.headline.main
      let url = element.web_url
      let synopsis = element.abstract
      let snippet = element.snippet
      let source = element.source
      let pubDate = element.pub_date

      let article = {
        title: title,
        url: url,
        synopsis: synopsis,
        snippet: snippet,
        source: source,
        pubDate: pubDate,
      }
      console.log(article)
      articleData.push(article)
      db.Post.create(article).then(article => {
        console.log(article)
      }).catch(err => {
        console.log(err)
      })
    });
    return articleData

  });

}

module.exports = scraper;


