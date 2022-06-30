const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");

router.post('/send', async (req, res) => {

    let transporter = nodemailer.createTransport({
        service: req.body.senderService,
        port: 587,
        secure: false, 
        auth: {
            user: req.body.senderEmail,
            pass: req.body.senderPassword
        },
    });

    let info = await transporter.sendMail({
        from: req.body.senderEmail, 
        to: req.body.recieversList,
        subject: req.body.messageHeader,
        text: req.body.messageText, 
    });
    res.end("Success");
})


module.exports = router;