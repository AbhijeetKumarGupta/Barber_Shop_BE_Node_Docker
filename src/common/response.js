const Message = require("./message.status");
const Status = require("./code.status");

const SuccessResponse = (req, res, data = null, message = Message.SUCCESS) => {
  return res.status(Status.SUCCESS).json({
    status_code: Status.SUCCESS,
    success: true,
    message,
    data,
  });
};

const NotFoundResponse = (
  req,
  res,
  data = null,
  message = Message.NOT_FOUND
) => {
  return res.status(Status.SUCCESS).json({
    status_code: Status.SUCCESS,
    success: true,
    message,
    data,
  });
};

module.exports = { Success: SuccessResponse, NotFound: NotFoundResponse };
