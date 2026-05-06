import { asyncHandler } from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";
import * as authService from "./service.js";
import messages from "../../common/constant/message.js";
import statusCodes from "../../common/constant/statusCode.js";

// ✅ CREATE USER
export const createUser = asyncHandler(async (req, res) => {
  const user = await authService.createUserWithProfile(req.body);

  return apiResponse(res, {
    success: true,
    message: messages.AUTH.USER_CREATED,
    statusCode: statusCodes.CREATED,
    data: user,
  });
});

// ✅ LOGIN
export const login = asyncHandler(async (req, res) => {
  const { identifier, password } = req.body;

  const { user, token, profile } =
    await authService.loginUnified(identifier, password);

  return apiResponse(res, {
    success: true,
    message: messages.AUTH.LOGIN_SUCCESS,
    statusCode: statusCodes.SUCCESS,
    data: {
      user,
      token,
      profile,
    },
  });
});