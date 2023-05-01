const CustomError = require("./custom-error");
const Message = require("../common/message.status");
const Status = require("../common/code.status");

class ApplicationError extends CustomError {
  statusCode = Status.ERROR;
  message = Message.ERROR;

  constructor(message) {
    super("Application Error");

    Object.setPrototypeOf(this, ApplicationError.prototype);
    this.message = message;
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
module.exports = ApplicationError;
