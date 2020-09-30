const express = require('express')
const router = express.Router()
let User = require('../models/userModel')

router.get('/', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (err) {
        res.status(500).json({"error:": err})
    }
})

router.post('/add', (req, res) => {
    const name = req.body.name
    const age = req.body.age

    const newUser = new User({
        name,
        age
    })

    newUser.save()
       .then(() => res.json(newUser))
       .catch(err => res.status(400).json(err))
})

module.exports = router