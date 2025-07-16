const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailObject = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: subject,
    html: `<h1>${message}</h1>`,
  }

  transporter.sendMail(mailObject, (error, info) => {
    if (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ message: 'Email sending failed', error: error.message });
    }
    res.status(200).json({ message: 'Email sent successfully', info });
  });
};
