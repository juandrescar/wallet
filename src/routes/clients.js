const router = require('express').Router();
const ClientController = require('../controllers/ClientController');
const { check, body, validationResult } = require('express-validator');

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

/* Recharge balance */
router.post('/recharge', [
  body('phone').exists(),
  body('document').exists(),
  body('value').exists().isFloat({min:1}).withMessage('valor de recarga es minimo 1')
],async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Unprocessable Entity",
      errors: errors.array() 
    });
  }

  ClientController.recharge(req.body, res);
});

/* Pay */
router.post('/:id/pay', [
  body('value').exists().isFloat({min:1}).withMessage('valor de recarga es minimo 1'),
  check('id').isMongoId()
],async (req, res, next) => {
  const errors = validationResult(req)

  const { id } = req.params;

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Unprocessable Entity",
      errors: errors.array() 
    });
  }

  ClientController.pay(id, req.body, res);
});

module.exports = router;
