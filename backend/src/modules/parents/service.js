import Parent from "./modal.js";
import User from "../user/modal.js";
import roles from "../../common/constant/roles.js";
import AppError from "../../common/utils/appError.js";
import { hashPassword } from "../../common/utils/hashPassword.js";

// ➕ CREATE PARENT + USER
export const createParentService = async (data) => {
  const { fullName, email, password, phone } = data;

  // 1. validation
  if (!fullName || !email || !password) {
    throw new AppError("Missing required fields", 400);
  }

  // 2. check duplicate user
  const exists = await User.findOne({
    identifier: email,
  });

  if (exists) {
    throw new AppError("Parent already exists", 409);
  }

  let parent;

  try {
    // 3. create parent first
    parent = await Parent.create({
      fullName,
      email,
      phone,
    });

    // 4. hash password
    const hashedPassword = await hashPassword(password);

    // 5. create user account (same pattern as student/teacher)
    const user = await User.create({
      name: fullName,
      email,
      identifier: email,
      password: hashedPassword,
      role: roles.PARENT,
      profile: parent._id,
      profileModel: "Parent",
    });

    return { parent, user };
  } catch (error) {
    // rollback parent if user fails
    if (parent?._id) {
      await Parent.findByIdAndDelete(parent._id);
    }

    throw new AppError(
      error.message || "Failed to create parent account",
      500
    );
  }
};