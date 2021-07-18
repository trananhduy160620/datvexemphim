const nodemailer = require('nodemailer');

exports.send = async function (to, subject, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'ltweb1082@gmail.com',
      pass: 'laptrinhweb1082'
    }
  });

  const info = await transporter.sendMail({
    from: 'ltweb2@gmail.com',
    to,
    subject,
    text: content,
  });
  console.log(info);
};