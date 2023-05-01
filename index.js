const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/index");
const errorHandler = require("./src/middlewares/error-handler");
const NotFoundError = require("./src/errors/not-found.error");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.use(errorHandler);

app.all("*", (req, res) => {
    throw new NotFoundError();
});

process.on("unhandledRejection", (reason, p) => {
    console.log("Unhandled Rejection at: Promise --- reason:", reason);
});

app.listen(8080, _ => console.log('app listening on port 8080!'));