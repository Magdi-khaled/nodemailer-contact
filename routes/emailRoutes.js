const express = require("express");
const sendEmail = require("../config/mailer");

const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const emailOptions = {
        to: process.env.EMAIL,
        subject: `Portfolio Message - ${name}`,
        text: `Info : <${email}> - ${name}\n${message}`,
        html: `<p><strong>Info:</strong> ${email} - ${name}</p>
                <p>${message}</p>`,
    };

    const response = await sendEmail(emailOptions);

    if (response.success) {
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } else {
        res.status(500).json({ success: false, message: "Failed to send email", error: response.error });
    }
});

module.exports = router;
