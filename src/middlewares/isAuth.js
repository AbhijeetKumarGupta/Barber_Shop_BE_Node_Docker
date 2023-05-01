const AuthenticationError = require("../errors/authentication.error");
const Users = require("../models/user");
const Message = require("../common/message.status");

const isAuth = async (req, res, next) => {
  try {
    const usersQuery = await Users.query()
    .findById(1)
    if (usersQuery) {
      delete usersQuery.password;
      req.user = usersQuery;
      next();
    } else {
      return AuthenticationError(res, Message.UNAUTHORIZED, null);
    }
  } catch (error) {
    return AuthenticationError(res, Message.UNAUTHENTICATED, error);
  }
};

module.exports = isAuth;
