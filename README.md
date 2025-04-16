# Nodemailer Contact API

A simple Node.js and Express.js API for sending emails using **Nodemailer**.

## Features
- Send emails via **Nodemailer**.
- Uses **Express.js** for handling API requests.
- Supports **Gmail, SMTP, and other email services**.
- Environment variable support for secure credentials.

## Prerequisites
Before running this project, ensure you have:
- Node.js installed
- A valid SMTP email account (e.g., Gmail, Outlook, or a custom SMTP server)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/nodemailer-contact.git
   cd nodemailer-contact
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your email credentials:
   ```sh
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

## Usage

1. Start the server:
   ```sh
   npm start
   ```
2. Send a POST request to the API endpoint:
   ```sh
   POST http://localhost:3000/send
   ```
   **Example Request Body:**
   ```json
   {
     "name": "John Doe",
     "email": "johndoe@example.com",
     "message": "Hello, this is a test message!"
   }
   ```

## API Endpoints
| Method | Endpoint     | Description            |
|--------|-------------|------------------------|
| POST   | /send       | Sends an email message |

## Built With
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/)
