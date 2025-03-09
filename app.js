const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `${email} - ${name}`,
        to: process.env.EMAIL,
        subject: subject,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({
            state: 'Success',
            message: 'Email sent successfully!',
            mail: mailOptions
        });
    } catch (error) {
        res.status(500).json({
            state: 'Error',
            message: 'Failed to send email.',
            error: error
        });
    }
});

app.listen(process.env.PORT, () => console.log('Server running on port', process.env.PORT)); 