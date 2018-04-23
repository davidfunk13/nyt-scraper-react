const router = require("express").Router();
const postsController = require('../../controllers/postsController.js')

// Matches with "/api/books"
router.route("/")
  .get(postsController.getAll)
  .post(postsController.create);

module.exports = router;
