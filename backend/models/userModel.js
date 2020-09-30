const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    }
})

const User = mongoose.model('TempUsers', userSchema)
module.exports = User