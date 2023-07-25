const express = require('express')
const { checkout, paymentVerification } = require('../controllers/paymentController')

const router = express.Router();

router.route('/payment').post(checkout)
router.route('/paymentVerification').post(paymentVerification)

module.exports = router