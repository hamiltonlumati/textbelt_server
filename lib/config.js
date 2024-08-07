const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
  host: process.env.HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.SECURE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  }
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: 'hamilton.lumati@utocria.com',
  },
  debugEnabled: true,
};
