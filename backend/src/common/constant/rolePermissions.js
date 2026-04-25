import roles from "./roles.js";
import permissions from "./permissions.js";

const rolePermissions = {
  // 👨‍💼 ADMIN (FULL ACCESS)
  [roles.ADMIN]: Object.values(permissions),

  // 👨‍🏫 TEACHER (EXAM + MARKS + STUDENTS VIEW)
  [roles.TEACHER]: [
    permissions.VIEW_STUDENT,
    permissions.VIEW_CLASS,
    permissions.VIEW_SUBJECT,

    permissions.CREATE_EXAM,
    permissions.VIEW_EXAM,

    permissions.CREATE_MARKS,
    permissions.UPDATE_MARKS,
    permissions.VIEW_MARKS,

    permissions.VIEW_RESULT,
    permissions.VIEW_REPORT_CARD,

    permissions.MARK_ATTENDANCE,
    permissions.VIEW_ATTENDANCE,
  ],

  // 🎓 STUDENT (READ ONLY)
  [roles.STUDENT]: [
    permissions.VIEW_EXAM,
    permissions.VIEW_RESULT,
    permissions.VIEW_REPORT_CARD,
    permissions.VIEW_GPA,
    permissions.VIEW_CGPA,
    permissions.VIEW_ATTENDANCE,
  ],
};

export default rolePermissions;