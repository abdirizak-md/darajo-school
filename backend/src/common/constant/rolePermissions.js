import roles from "./roles.js";
import permissions from "./permissions.js";

const rolePermissions = {
  [roles.ADMIN]: Object.values(permissions), // full access

  [roles.TEACHER]: [
    permissions.VIEW_STUDENT,
    permissions.MARK_ATTENDANCE,
  ],

  [roles.STUDENT]: [],
};

export default rolePermissions;