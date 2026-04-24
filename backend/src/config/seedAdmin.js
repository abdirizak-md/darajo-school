import User from "../modules/user/modal.js";
import { hashPassword } from "../common/utils/hashPassword.js";
import roles from "../common/constant/roles.js";

const seedAdmin = async () => {
  try {
    const exists = await User.findOne({ role: roles.ADMIN });

    if (exists) {
      console.log("✅ Admin already exists");
      return;
    }

    const password = await hashPassword("admin123"); // 🔥 change later

    const admin = await User.create({
      name: "Super Admin",
      email: "admin@gmail.com",
      identifier: "admin@gmail.com",
      password,
      role: roles.ADMIN,
    });

    console.log("🔥 Admin created:", admin.email);
  } catch (error) {
    console.error("❌ Admin seed error:", error.message);
  }
};

export default seedAdmin;