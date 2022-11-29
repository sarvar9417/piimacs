const { Schema, model, Joi } = require("../../packages");

const chapter = new Schema({
  number: { type: Number },
  name: { type: String, required: true },
  level: { type: Schema.Types.ObjectId, ref: "Level" },
});

const validateChapter = (chapter) => {
  const schema = Joi.object({
    number: Joi.number(),
    name: Joi.string().required(),
    level: Joi.string().required(),
  });

  return schema.validate(chapter);
};

module.exports.validateChapter = validateChapter;
module.exports.Chapter = model("Chapter", chapter);
