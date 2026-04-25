import rolePermissions from "../constant/rolePermissions.js";
import statusCodes from "../constant/statusCode.js";

const permissionMiddleware = (requiredPermission) => {
  return (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res
          .status(statusCodes.UNAUTHORIZED)
          .json({ message: "Unauthorized access waryaa " });
      }

      const userPermissions = rolePermissions[user.role] || [];


        // ✅ DEBUG HERE (CORRECT PLACE)
      console.log("ROLE:", user.role);
      console.log("USER PERMISSIONS:", userPermissions);
      console.log("REQUIRED:", requiredPermission);
      console.log("AUTH HEADER:", req.headers.authorization);
      console.log("Headers:", req.headers);
      console.log("Body:", req.body);

      if (!userPermissions.includes(requiredPermission)) {
        return res
          .status(statusCodes.FORBIDDEN)
          .json({ message: "Access denied" });
      }

      next();
    } catch (error) {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Permission error" });
    }
  };
};

export default permissionMiddleware;