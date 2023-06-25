const Joi = require('joi');

const schema = Joi.object().keys({ 
  username: Joi
    .string()
    .min(5)
    .max(30)
    .required()
    .messages({
      'string.empty': 'username should not be empty'
    }),
  password: Joi
    .string()
    .min(1)
    .required()
    .messages({
      'string.empty': 'password should not be empty'
    })
}); 

module.exports = schema;
