const indexR = require("./index");
const usersR = require("./users");
const carsR = require("./cars");
const showsR = require("./shows");

exports.routesInit = (app) => {
  // הגדרת ראוטים לאיזה ראוטר הם שייכים
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/cars", carsR);
  app.use("/shows", showsR);
};
