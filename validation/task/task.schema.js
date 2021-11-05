const joi = require("@hapi/joi");

const schema = {
    task: joi.object({
        taskTitle: joi.string().max(45).required(),
        taskDesc: joi.string().max(45).allow(''),
        assignedTo: joi.number().required(),
        sorting: joi.number().allow(null),
        status: joi.number().allow(null)
    })
};

module.exports = schema;