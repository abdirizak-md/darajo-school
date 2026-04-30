import User from "../../modules/user/modal.js";
import { hashPassword } from "../../common/utils/hashPassword.js";
import roles from "../../common/constant/roles.js";

/**
 * AUTO CREATE USER FOR ANY PROFILE
 */
export const createUserForProfile = async ({
  name,
  email,
  password,
  identifier,
  role,
  profileId,
  profileModel,
}) => {
  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    identifier,
    password: hashedPassword,
    role,
    profile: profileId,
    profileModel,
  });

  return user;
};