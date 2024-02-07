const moongoose = require("mongoose");
const Joi = require("joi");

const carSchema = new moongoose.Schema({
  name: String,
  year: Number,
  color: String,
});

exports.CarModel = moongoose.model("cars", carSchema);

//פונקציה שתבדוק תקינות הבאדי שנשלח בהתאם לסכמה
exports.validateCar = (_reqBody) => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    year: Joi.number().min(1900).max(2050).required(),
    color: Joi.string().min(2).max(100).required(),
  });
  return joiSchema.validate(_reqBody);
};
