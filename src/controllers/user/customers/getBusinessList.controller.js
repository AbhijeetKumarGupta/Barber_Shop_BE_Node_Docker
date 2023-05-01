const DBConnectionError = require("../../../errors/db-connection.error");
const { Success } = require("../../../common/response");
const Message = require("../../../common/message.status");
const { getBusinessListService } = require("../../../services/users/customers/index");

const getBusinessList = async (req, res) => {
    getBusinessListService(req, (err, response) => {
    if (err) return DBConnectionError(res, err);
    return Success(req, res, response, Message.SUCCESS);
  });
};

module.exports = getBusinessList;