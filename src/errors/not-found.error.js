const CustomError = require("./custom-error");
const Message = require("../common/message.status");
const Status = require("../common/code.status");

class NotFoundError extends CustomError {
  statusCode = Status.NOT_FOUND;
  message = Message.NOT_FOUND;

  constructor() {
    super("Route Not Found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return {
      status_code: this.statusCode,
      success: false,
      message: this.message,
      data: null,
    };
  }
}
module.exports = NotFoundError;
