const express = require('express');
const { processPayment, sendStripeApi } = require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middleWare/authenticate');
const router = express.Router();


router.route('/payment/process').post( isAuthenticatedUser, processPayment);
router.route('/stripeapi').get( isAuthenticatedUser, sendStripeApi);


module.exports = router;