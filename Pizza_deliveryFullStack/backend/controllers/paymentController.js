const crypto = require("crypto");
const Razorpay = require('razorpay')
const instance = new Razorpay({
    key_id: 'rzp_test_jb0qcC5pemGfB6',
    key_secret: 'iqecGn0vkIKqON6886ue2jqt'
});

const checkout = async (req, res) => {
    var options = {
        amount: Number(req.body.amount) * 100,
        currency: "INR",
    }

    const order = await instance.orders.create(options)
    console.log(order)
    res.status(200).json({
        success: true,
        order
    })
}

const paymentVerification = (req, res) => {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', instance.key_secret)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === razorpay_signature) {
        return res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    }
    res.send('Payment Verification Successfull');


}

module.exports = { checkout, paymentVerification }