import * as Joi from '@hapi/joi';

export const loginSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().required(),
  pass: Joi.string().required(),
});
