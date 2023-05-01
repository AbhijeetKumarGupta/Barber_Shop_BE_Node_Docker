const DBConnectionError = require("../../../errors/db-connection.error");
const { Success } = require("../../../common/response");
const Message = require("../../../common/message.status");
const { getDetailsService } = require("../../../services/users/businessOwner/index");

const getDetails = async (req, res) => {
    getDetailsService(req, (err, response) => {
    if (err) return DBConnectionError(res, err);
    return Success(req, res, response, Message.SUCCESS);
  });
};

module.exports = getDetails;