const environment = "mysql";
const config = require("./knexfile.js")[environment];

module.exports = require("knex")(config);