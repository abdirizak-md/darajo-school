import bcrypt from "bcrypt";

export const comparePassword = async (password, hashed) => {
  return await bcrypt.compare(password, hashed);
};