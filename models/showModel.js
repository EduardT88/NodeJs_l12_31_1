const moongoose = require("mongoose");
const Joi = require("joi");

const showSchema = new moongoose.Schema({
  name: String,
  genere: String,
  kind: String,
});

exports.showModel = moongoose.model("shows", showSchema);

exports.validateShow = (_reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    genere: Joi.string().min(2).max(100).required(),
    kind: Joi.string().min(2).max(100).required(),
    views: Joi.number().min(1).max(999999).required(),
    images: Joi.string().min(2).max(300).required(),
    description: Joi.string().min(2).max(500).required(),
  });
};
