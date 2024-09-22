const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,

    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "Jonas Schmedtmann <hello@jonas.io>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 4) Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.error("Error sending email: ", err);
    else console.log("Email sent: ", info.response);
  });
  // 3) Actually send the emaiil
  //   await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
