const router = require('express').Router();
const ClientController = require('../controllers/ClientController');
const { body, validationResult } = require('express-validator');

/** GET clients listing. */
router.get('/', async (req, res) => {
  ClientController.get(res);
});

/* Register client. */
router.post('/', [
    body('email').isEmail().normalizeEmail(),
    body('name').exists().isAlpha(),
    body('phone').exists(),
    body('document').exists()
  ],async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ 
        success: false,
        message: "Unprocessable Entity",
        errors: errors.array() 
      });
    }
    ClientController.store(req.body, res);
});

/* Check balance */
router.post('/balance', [
  body('phone').exists(),
  body('document').exists()
],async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Unprocessable Entity",
      errors: errors.array() 
    });
  }

  ClientController.getClient(req.body, res);
});

module.exports = router;
