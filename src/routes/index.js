const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const userRoutes = require('./users')
//const slackRoutes = require('./slack')

router.use('/users', userRoutes)

module.exports = router;
