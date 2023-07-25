const express = require('express')
const router = express.Router();
const pizzaModel = require('../models/pizza')

router.get('/getallpizzas', async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

module.exports = router;