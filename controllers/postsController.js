const scraper = require('../scraper')
const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    },
    getAll: function (req, res) {
        db.Post
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    scraper: function (req, res) {
        let queryData = req.body.query
          scraper(queryData)
    },
    scraperGet: function (req, res) {
        scraper()
        console.log(res.body)
    }

}

