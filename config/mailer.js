const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Verify the transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error("Nodemailer setup failed:", error);
    } else {
        console.log("Nodemailer is ready to send emails");
    }
});

// Function to send an email
const sendEmail = async ({ from, to, subject, text, html }) => {
    try {
        const info = await transporter.sendMail({
            from: `<${process.env.EMAIL}>`,
            to,
            subject,
            text,
            html,
        });
        console.log(`Email sent: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Email failed:", error);
        return { success: false, error };
    }
};

module.exports = sendEmail;
