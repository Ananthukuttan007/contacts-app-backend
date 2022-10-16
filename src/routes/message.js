const router = require('express').Router();
const messageModel = require('../Models/messageModel')
const fast2sms = require('fast-two-sms')

var options = {
    authorization: "wKc5jgbfpoRDSHEzU0Zed4VYtiQN1ynvx7sLaPJThG9mXulWkFc1JuyqlvUE2QwRXxtIC8ifzsnVKNY3",
}


router.get('/', async (req, res) => {
    try {
        const message = await messageModel.find();
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        let otp = parseInt(Math.random() * 1000000)
        otp = "" + otp;
        if (otp.length < 6) {
            while (otp.length < 6) {
                otp += "0"
            }
        }
        let tailEnd = "Your Otp is " + otp
        options.message = req.body.message + "\n" + tailEnd;
        options.numbers = [req.body.number];
        if (req.body.message.length > 0) {
            const response = await fast2sms.sendMessage(options)
            console.log(response)
        }
        const Message = await messageModel.create({
            name: req.body.name,
            number: req.body.number,
            message: req.body.message,
            otp: otp,
            date: new Date().toLocaleDateString() + "    " + new Date().toLocaleTimeString()
        })
        res.status(200).json({
            message: "success",
            Message
        })
    } catch (e) {
        console.log(e.message)
        res.status(400).json({
            message: e.message
        })
    }
})


module.exports = router;