const customerRoutes = require("./User/customer");
const isAuth = require("../middlewares/isAuth");

const allRoutes = (app) => {
  app.use("/api/v1/bs", isAuth, customerRoutes);
};

module.exports = allRoutes;