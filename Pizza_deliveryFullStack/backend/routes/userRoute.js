const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.post('/register', (req, res) => {
    const { firstName, lastName, email, address, password } = req.body
    const newUser = new User({ firstName, lastName, email, address, password })

    try {
        newUser.save()
        res.send("User Register Successfully")
    } catch (error) {
        return res.status(400).json({ message: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.find({ email, password })
        if (user.length > 0) {
            const currentUser = {
                firstName: user[0].firstName,
                lastName: user[0].lastName,
                email: user[0].email,
                address: user[0].address,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id
            }
            res.send(currentUser)
        } else {
            return res.status(400).json({ message: 'User Login Failed' })
        }
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' })
    }
})

module.exports = router