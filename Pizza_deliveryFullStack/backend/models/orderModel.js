const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        name: { type: String, require },
        email: { type: String, require },
        address: { type: String, require },
        item: { type: String, require },
        price: { type: Number, require },
        quantity: { type: Number, require },
        varient: { type: String, require },
        _id: { type: String },
        date: { type: String },
        date_Time: { type: String },
    }
)

const orderModel = mongoose.model('Orders', orderSchema)

module.exports = orderModel