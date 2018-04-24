const path = require("path");
const router = require("express").Router();
const postsController = require('../controllers/postsController')

router.route("/")
  .get(postsController.getAll)
  .post(postsController.saveArticle);

router.route('/api/scraper')
  .post(postsController.scraper)
  .get(postsController.scraper)

  router.route('/api/articles')
    .post(postsController.saveArticle)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
