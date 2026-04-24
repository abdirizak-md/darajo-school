import {asyncHandler} from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/responseApi.js";
import * as authService from "./service.js";
import messages from "../../common/constant/message.js";
import statusCodes from "../../common/constant/statusCode.js";

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, ...rest } = req.body;

  const user = await authService.createUserWithProfile({
    name,
    email,
    password,
    role,
    ...rest,
  });

  return apiResponse(res, {
    success: true,
    message: messages.AUTH.USER_CREATED,
    statusCode: statusCodes.CREATED,
    data: user,
  });
});

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