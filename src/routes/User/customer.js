const express = require("express");
const Router = express.Router();
const {
  getBusinessListController,
  viewBusinessDetailsController
} = require("../../controllers/user/customers/index");

Router.get("/customer/get-business", getBusinessListController);
Router.get("/customer/business/:business_id", viewBusinessDetailsController);

module.exports = Router;