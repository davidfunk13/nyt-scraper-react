const scraper = require('../scraper')
const db = require('../models');

module.exports = {
    saveArticle: function (req, res) {
console.log(req.body)
        // let article = {
            
        //     title: req.body.title,
        //     url: req.body.url,
        //     snippet: req.body.snippet || 'No Description',
        //     source: req.body.source,
        //     pubDate: req.body.pubDate
        // };
        // console.log(article)
        db.Post
            .create(req.body)
            .then(dbmodel => res.json(dbmodel))
                .catch(err =>console.log(err))
    },
    getAll: function (req, res) {
        console.log(req.body)
        db.Post
            .find({})
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    scraper: function (req, res) {
        let queryData = req.body.query
          scraper(queryData)

    },
    deleteArticle: function (req, res) {
        let id = {'_id':req.body.id}

        console.log(id)
        db.Post.deleteOne(id).catch(err => {
            res.json(err)
        })
    }
}

