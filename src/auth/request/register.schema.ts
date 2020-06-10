import * as Joi from '@hapi/joi';

export const RegisterSchema: Joi.ObjectSchema = Joi.object({
  email: Joi.number().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  role: Joi.number(),
});
