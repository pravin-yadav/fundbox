const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

// Create Order
router.post('/', async (req, res) => {
	// Initialize Payment gateway
	var instance = new Razorpay({
		key_id: process.env.APIKEY,
		key_secret: process.env.APISECRET
	});

	var options = {
		amount: req.body.amount, // amount in the smallest currency unit
		currency: req.body.currency,
		payment_capture: '1'
	};

	instance.orders.create(options, function(err, order){
		if (err) {
			throw err;
		}
		else {
			res.status(201).json(order);
		}
	});
});

module.exports = router;
