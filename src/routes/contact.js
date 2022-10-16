const router = require('express').Router();
const contactModel = require('../models/contactModel')

router.get('/', async (req, res) => {
    try {
        const contact = await contactModel.find(); //gets and array of all saved contacts from db
        res.status(200).json(contact);
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const contact = await contactModel.create({ //create new contact
            name: req.body.name,
            number: req.body.number
        })
        res.status(200).json({
            message: "success",
            contact
        })
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
})


module.exports = router;