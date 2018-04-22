const db = require('../models');

module.exports = {
    create: function (req, res) {
        db.Post
            .create(req.body)
            .then(dbmodel=> res.json(dbmodel))
            .catch(err => res.status(422).json(err))
    }
}