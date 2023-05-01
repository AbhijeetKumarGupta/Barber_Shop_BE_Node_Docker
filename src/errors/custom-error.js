class CustomError extends Error {
  statusCode;
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  serializeErrors() {
    return {};
  }
}

module.exports = CustomError;
