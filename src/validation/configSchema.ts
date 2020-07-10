import * as Joi from '@hapi/joi'

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .required(),

  SERVICE_NAME: Joi.string()
    .required(),

  PORT: Joi.number()
    .required(),

  SECRET_KEY: Joi.string()
    .required(),

  DB_HOST: Joi.string()
    .required(),

  DB_PORT: Joi.string()
    .required(),

  DB_DATABASE: Joi.string()
    .required(),

  DB_USERNAME: Joi.string()
    .required(),

  DB_PASSWORD: Joi.string()
    .required(),

  LOG_LEVEL: Joi.string()
    .default('debug'),

  LOG_PRETTY_PRINT: Joi.string()
    .default('true'),

})
