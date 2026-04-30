import mongoose from "mongoose";
import User from "./modal.js";
import Student from "../student/modal.js";
import Teacher from "../teachers/modal.js";

import { hashPassword } from "../../common/utils/hashPassword.js";
import { comparePassword } from "../../common/utils/comparePassword.js";
import { generateToken } from "../../common/utils/generateToken.js";

import roles from "../../common/constant/roles.js";
import messages from "../../common/constant/message.js";

export const createUserWithProfile = async (data) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password, role } = data;

    let identifier;

    if (role === roles.STUDENT) {
      identifier = data.admissionNumber;
    } else {
      identifier = email;
    }

    const exists = await User.findOne({ identifier }).session(session);
    if (exists) throw new Error(messages.AUTH.USER_EXISTS);

    const hashed = await hashPassword(password);

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

    let profile;

    if (role === roles.STUDENT) {
      profile = await Student.create(
        [
          {
            user: user[0]._id,
            fullName: data.name,
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
            user: user[0]._id,
            subjects: data.subjects || [],
          },
        ],
        { session }
      );
    }

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

// 🔥 unified login
export const loginUnified = async (identifier, password) => {
  try {
    console.log("LOGIN INPUT:", identifier);

    const user = await User.findOne({
      $or: [
        { email: identifier },
        { identifier: identifier },
      ],
    }).select("+password");

    console.log("USER FOUND:", user);

    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await comparePassword(password, user.password);

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) { 
      throw new Error("Wrong password");
    }

    const token = generateToken({
      id: user._id,
      role: user.role,
      identifier: user.identifier,
    });

    return {
      user,
      token,
      profile: user.profile,
    };

  } catch (error) {
    console.error("🔥 REAL LOGIN ERROR:", error);
    throw error;
  }
};