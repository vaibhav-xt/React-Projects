const express = require('express')
const database = require('./database')
const PizzasRoute = require('./routes/pizzasRoutes');
const userRoute = require('./routes/userRoute')
const paymentRoute = require('./routes/paymentRoutes')
const orderModel = require('./models/orderModel')
const UserModel = require('./models/userModel')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server working' + port);
})

app.use('/api/pizzas', PizzasRoute)
app.use("/api/users/", userRoute)
app.use('/api', paymentRoute)

app.post('/api/OrderList', async (req, res) => {
    const data = req.body;

    try {
        await Promise.all(data.map(async (item) => {
            const orderExists = await orderModel.findOne({ _id: item._id });
            if (!orderExists) {
                const order = new orderModel({
                    name: item.name,
                    email: item.email,
                    address: item.address,
                    image: item.image,
                    item: item.item,
                    price: item.price,
                    quantity: item.quantity,
                    varient: item.varient,
                    _id: item._id,
                    date_Time: item.dateTime
                });
                await order.save();
            }
        }));
        res.status(200).json({ message: 'Order saved successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to save order' });
    }
});

app.get('/api/getAllOrders', async (req, res) => {
    try {
        const Orders = await orderModel.find({})
        res.send({ statue: "ok", data: Orders })
    } catch (error) {
        console.log("Data fetching error")
    }
})

app.get('/api/getAllUsers', async (req, res) => {
    try {
        const allUsers = await UserModel.find({})
        res.send({ status: "ok", data: allUsers })
    } catch (error) {
        console.log("Data fetching error")
    }
})

const port = process.env.PORT || 5000;

app.listen(port, () => "Server running on port")
