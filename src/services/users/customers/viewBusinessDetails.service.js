const Business = require("../../../models/business");

const getBusinessDetails = async (req, callback) => {
    const {business_id} = req.params
    try {
        const BusinessDetails = await Business.query().findById(business_id);
        return callback(null, BusinessDetails);
    } catch (err) {
        return callback(err);
      }
    };

module.exports = getBusinessDetails;