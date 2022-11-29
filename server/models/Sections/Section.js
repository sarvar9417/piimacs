const { Schema, model, Joi } = require("../../packages");

const section = new Schema({
  number: { type: Number, required: true },
  name: { type: String, required: true },
  level: { type: Schema.Types.ObjectId, ref: "Level" },
  chapter: { type: Schema.Types.ObjectId, ref: "Chapter" },
});

const validateSection = (section) => {
  const schema = Joi.object({
    number: Joi.number().required(),
    name: Joi.string().required(),
    level: Joi.string().required(),
    chapter: Joi.string().required(),
  });

  return schema.validate(section);
};

module.exports.validateSection = validateSection;
module.exports.Section = model("Section", section);
