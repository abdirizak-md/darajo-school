import mongoose from "mongoose";
import User from "./modal.js";
import Student from "../student/modal.js";
import Teacher from "../teachers/modal.js";

import { hashPassword } from "../../common/utils/hashPassword.js";
import { comparePassword } from "../../common/utils/comparePassword.js";
import { generateToken } from "../../common/utils/generateToken.js";

import roles from "../../common/constant/roles.js";
import messages from "../../common/constant/message.js";

// ✅ CREATE USER WITH PROFILE (UNIFIED)
export const createUserWithProfile = async (data) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password, role } = data;

    // ✅ identifier logic
    const identifier =
      role === roles.STUDENT
        ? data.admissionNumber
        : data.employeeId || email;

    if (!identifier) {
      throw new Error("Identifier is required");
    }

    // ✅ check existing
    const exists = await User.findOne({
      $or: [{ identifier }, { email }],
    }).session(session);

    if (exists) throw new Error(messages.AUTH.USER_EXISTS);

    // ✅ hash password
    const hashed = await hashPassword(password);

    // ✅ create user FIRST
    const user = await User.create(
      [
        {
          name,
          email,
          identifier,
          password: hashed,
          role,
        },
      ],
      { session }
    );

    let profile = null;

    // ================= CREATE PROFILE =================

    if (role === roles.STUDENT) {
      profile = await Student.create(
        [
          {
            user: user[0]._id,
            fullName: name,
            admissionNumber: data.admissionNumber,
            classId: data.classId,
            sectionId: data.sectionId,
            parentId: data.parentId,
          },
        ],
        { session }
      );
    }

    if (role === roles.TEACHER) {
      profile = await Teacher.create(
        [
          {
            user: user[0]._id, // 🔥 CRITICAL LINK
            fullName: name,
            employeeId: data.employeeId,
            email,
            gender: data.gender,
          },
        ],
        { session }
      );
    }

    // ================= LINK PROFILE =================
    if (profile) {
      user[0].profile = profile[0]._id;
      await user[0].save({ session });
    }

    await session.commitTransaction();
    session.endSession();

    return user[0];
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

// 🔥 LOGIN (CLEAN)
export const loginUnified = async (identifier, password) => {
  const user = await User.findOne({
    $or: [{ email: identifier }, { identifier }],
  })
    .select("+password")
    .populate("profile"); // 🔥 IMPORTANT ADD

  if (!user) throw new Error("User not found");

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error("Wrong password");

  const token = generateToken({
    userId: user._id,        // 🔥 FIXED (clear naming)
    role: user.role,
    profileId: user.profile?._id, // 🔥 IMPORTANT FOR TEACHER LINK
  });

  return {
    user,
    token,
    profile: user.profile,
  };
};