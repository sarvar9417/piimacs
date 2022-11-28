const { Schema, model, Joi } = require("../../packages");

const level = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const validateLevel = (level) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
  });

  return schema.validate(level);
};

module.exports.validateLevel = validateLevel;
module.exports.Level = model("Level", level);
