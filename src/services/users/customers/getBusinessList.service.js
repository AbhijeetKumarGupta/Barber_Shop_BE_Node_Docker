const Business = require("../../../models/business");

const getBusinessList = async (req, callback) => {
    try {
        const BusinessList = await Business.query();
        return callback(null, BusinessList);
    } catch (err) {
        return callback(err);
      }
    };

module.exports = getBusinessList;