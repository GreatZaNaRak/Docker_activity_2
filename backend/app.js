const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
const port = process.env.PORT || 3000
const uri = process.env.ATLAS_URI
const connection = mongoose.connection
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true})

connection.once('open', () => {
	console.log('connected to database...')
})

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello Home 123")
})

const userRoute = require('./routes/userRoute')
app.use('/users', userRoute)


app.listen(port, () => {
    console.log(`server running on port ${port}...`)
})
