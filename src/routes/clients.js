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
  body('value').exists().isFloat({min:1}).withMessage('valor de recarga es minimo 1'),
  body('phone').exists(),
  body('document').exists(),
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
router.post('/pay', [
    body('phone').exists(),
    body('document').exists(),
    body('value').exists().isFloat({min:1}).withMessage('valor a pagar es minimo 1'),
  ],async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Unprocessable Entity",
      errors: errors.array() 
    });
  }

  ClientController.pay(req.body, res);
});

/* Confirm pay */
router.post('/:id/pays/:pay', [
    body('code').exists().isString(),
    check('id').isMongoId(),
    check('pay').isMongoId()
  ],async (req, res, next) => {
  const errors = validationResult(req)

  const { id, pay } = req.params;

  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      success: false,
      message: "Unprocessable Entity",
      errors: errors.array() 
    });
  }

  ClientController.confirm(id, pay, req.body, res);
});

module.exports = router;
