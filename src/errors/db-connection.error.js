const Status = require("../common/code.status");
const { ERROR } = require("../common/message.status");

const DBConnectionError = (res, err) => {
  const response = {
    status_code: Status.ERROR,
    success: false,
    message:
      err.message.includes("select") ||
      err.message.includes("update") ||
      err.message.includes("insert")
        ? ERROR
        : err.message,
    data: null,
  };
  return res.status(Status.ERROR).send(response);
};

module.exports = DBConnectionError;
