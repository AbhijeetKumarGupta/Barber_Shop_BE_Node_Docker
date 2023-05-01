const CustomError = require("./custom-error");
const Message = require("../common/message.status");
const Status = require("../common/code.status");

class ValidationError extends CustomError {
  statusCode = Status.VALIDATION_FAILED;
  message = Message.VALIDATION_FAILED;
  errors;

  constructor(errors) {
    super("Invalid request parameters");
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.errors = errors;
  }

  serializeErrors() {
    const errorResponse = {
      status_code: this.statusCode,
      success: false,
      message: this.message,
      error: {},
      data: null,
    };
    if (this.errors) {
      const message = this.errors.details[0].message;
      errorResponse.error[this.errors.details[0].path[0]] = [message];
    }
    return errorResponse;
  }
}

module.exports = ValidationError;
