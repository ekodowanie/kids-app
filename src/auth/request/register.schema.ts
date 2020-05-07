import * as Joi from '@hapi/joi';

export const RegisterSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
});
