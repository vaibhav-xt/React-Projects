const express = require("express")
const cors = require('cors')
const app = express()
const mongoose = require("mongoose")

const userRouter = require('./routes/users.routes')
const userNotes = require('./routes/notes.routes')

require('dotenv').config()

const port = process.env.PORT || 5000

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB connected!")
})

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use('/notes', userNotes)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
