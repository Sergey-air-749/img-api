const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const listRouter = require('./src/Router/listRouter.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use("", listRouter)

PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO)
    .then(console.log("Есть!"))
    .catch((error) => console.error(error))

app.listen(PORT, () => {
    console.log(`на http://localhost:${PORT}`);
})