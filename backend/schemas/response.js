const Joi = require("joi");

const responseSchema = Joi.object({
  success: Joi.boolean().required(),
  data: Joi.object().required(),
  message: Joi.string().empty(""),
});

const response = (
  res,
  data,
  message = "",
  success = true,
  statusCode = 200
) => {
  const { error, value } = responseSchema.validate({ success, data, message });
  if (error) {
    res.status(statusCode).json({
      success: false,
      data: {},
      message: error.details[0].message,
    });
    return;
  }
  res.json(value);
};

module.exports = response;
