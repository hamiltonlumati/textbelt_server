/* const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
}; */

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
  host: 'utocria.com',
  port: 465,
  auth: {
    user: 'hamilton.lumati@utocria.com',
    pass: 'ZQvq7&*F#*42xDCzZt6H',
  },
  secureConnection: 'true',
  tls: {
    ciphers: 'SSLv3',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Hamilton Lumati" hamilton.lumati@utocria.com',
  },
  debugEnabled: false,
};