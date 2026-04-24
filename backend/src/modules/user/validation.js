import statusCodes from "../../common/constant/statusCode.js";
import messages from "../../common/constant/message.js";

export const validateCreateUser = (req, res, next) => {
  const { name, password, role } = req.body;

  if (!name || !password || !role) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: messages.GENERAL.REQUIRED_FIELDS,
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { identifier, password } = req.body;

  if (!identifier || !password) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: messages.GENERAL.REQUIRED_FIELDS,
    });
  }

  next();
};