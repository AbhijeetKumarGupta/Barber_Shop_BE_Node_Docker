const express = require("express");
const Router = express.Router();
const {
  getBusinessListController,
  viewBusinessDetailsController
} = require("../../controllers/user/customers/index");

Router.get("/get-business", getBusinessListController);
Router.get("/business/:business_id", viewBusinessDetailsController);

module.exports = Router;