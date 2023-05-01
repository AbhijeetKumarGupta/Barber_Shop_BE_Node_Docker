const Status = require("../common/code.status");
const Message = require("../common/message.status");

const AuthenticationError = (res, message, error) => {
  const response = {
    success: false,
    message: message,
  };
  if (error) {
    response.status_code = Status.ERROR;
    response.message = error.message;
  } else {
    if (message === Message.UNAUTHORIZED) {
      response.status_code = Status.UNAUTHENTICATED;
    }
  }

  return res.status(Status.UNAUTHENTICATED).send(response);
};

module.exports = AuthenticationError;
