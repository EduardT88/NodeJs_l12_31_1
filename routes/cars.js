const express = require("express");
const router = express.Router();
const { CarModel, validateCar } = require("../models/carModel");

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/", async (req, res) => {
  try {
    const data = await CarModel.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ msg: "there problem, come back later" });
  }
});

router.post("/", async (req, res) => {
  //בדיקה תקינות לבאדי
  const validBody = validateCar(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try {
    const car = new CarModel(req.body);
    await car.save();
    res.json(car);
    // return res.json({ msg: "cars post 444", body: req.body });
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  const validBody = validateCar(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const id = req.params.id;
    const data = await CarModel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //בקשה מחיקה לפי מאפיין האיי די
    const data = await CarModel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

// export default
module.exports = router;
