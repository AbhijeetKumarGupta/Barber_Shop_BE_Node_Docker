const CustomError = require("../errors/custom-error");
const Message = require("../common/message.status");
const Status = require("../common/code.status");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  const sendResponse = {
    status_code: Status.ERROR,
    success: false,
    message: Message.UNKNOWN_ERROR,
    data: null,
  };
  if (err.message) {
    sendResponse.message = err.message;
  }
  res.status(Status.ERROR).send(sendResponse);
};

module.exports = errorHandler;
