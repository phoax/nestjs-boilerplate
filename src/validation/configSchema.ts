import * as Joi from '@hapi/joi'

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .required(),

  APP_NAME: Joi.string()
    .required(),

  PORT: Joi.number()
    .required(),

  DATABASE_HOST: Joi.string()
    .required(),

  DATABASE_PORT: Joi.string()
    .required(),

  DATABASE_DATABASE: Joi.string()
    .required(),

  DATABASE_USERNAME: Joi.string()
    .required(),

  DATABASE_PASSWORD: Joi.string()
    .required(),

})
