const Business = require("../../../models/business");

const getDetails = async (req, callback) => {
    try {
        const BusinessDetails = await Business.query().findById(1);
        return callback(null, BusinessDetails);
    } catch (err) {
        return callback(err);
      }
    };

module.exports = getDetails;