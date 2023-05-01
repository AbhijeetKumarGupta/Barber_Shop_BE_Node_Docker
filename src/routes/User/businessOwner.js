const express = require("express");
const Router = express.Router();
const {
    getDetailsController
} = require("../../controllers/user/businessOwner/index");

Router.get("/business/details", getDetailsController);

module.exports = Router;