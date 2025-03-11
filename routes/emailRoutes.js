const express = require("express");
const sendEmail = require("../config/mailer");

const router = express.Router();

router.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const emailOptions = {
        to: process.env.EMAIL,
        subject: `${subject} - Message from ${name}`,
        text: `From: ${name} - <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
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
