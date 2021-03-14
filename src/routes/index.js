const router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const clientRoutes = require('./clients')

router.use('/clients', clientRoutes)

module.exports = router;
