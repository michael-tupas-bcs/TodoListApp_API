const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        username: joi.string().max(45).required(),
        first_name: joi.string().max(45).allow(''),
        last_name: joi.string().max(45).allow(''),
        gender: joi.string().valid("m", "f", "o").allow(''),
        email: joi.string().allow(''),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        number: joi.number().allow('')
    }),
    login: joi.object({
        username: joi.string().required(),
        password: joi.string().max(30).required()
    })
};

module.exports = schema;