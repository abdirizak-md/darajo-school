import jwt from "jsonwebtoken";
import User from "../../modules/user/modal.js";
import messages from "../constant/message.js";
import statusCodes from "../constant/statusCode.js";

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(statusCodes.UNAUTHORIZED).json({
        message: messages.AUTH.UNAUTHORIZED,
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId); // ✅ FIXED (was decoded.id)

    if (!user) {
      return res.status(statusCodes.UNAUTHORIZED).json({
        message: messages.AUTH.USER_NOT_FOUND,
      });
    }

    // ✅ STANDARDIZED USER OBJECT
    req.user = {
      userId: user._id,
      role: user.role,
      profileId: user.profile || null, // 🔥 FIXED KEY (IMPORTANT)
      identifier: user.identifier,
      email: user.email,
    };

    next();
  } catch (error) {
    return res.status(statusCodes.UNAUTHORIZED).json({
      message: messages.AUTH.TOKEN_INVALID,
    });
  }
};

export default authMiddleware;