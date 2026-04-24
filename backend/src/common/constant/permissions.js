const permissions = Object.freeze({
  // 👤 User
  CREATE_USER: "CREATE_USER",

  // 🎓 Student
  CREATE_STUDENT: "CREATE_STUDENT",
  VIEW_STUDENT: "VIEW_STUDENT",
  UPDATE_STUDENT: "UPDATE_STUDENT",
  DELETE_STUDENT: "DELETE_STUDENT",

  // 📊 Attendance
  MARK_ATTENDANCE: "MARK_ATTENDANCE",
});

export default permissions;