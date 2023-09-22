const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  forgotPassword: {
    from: 'support@mywebsite.fr',
    replyTo: 'support@mywebsite.fr',
    emailTemplate: forgotPasswordTemplate,
  },
});
