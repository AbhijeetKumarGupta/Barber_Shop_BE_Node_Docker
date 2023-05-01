const customerRoutes = require("./User/customer");
const businessOwnerRoutes = require("./User/businessOwner");
const isAuth = require("../middlewares/isAuth");

const allRoutes = (app) => {
  app.use("/api/v1/bs/customer", isAuth, customerRoutes);
  app.use("/api/v1/bs/owner", isAuth, businessOwnerRoutes)
};

module.exports = allRoutes;