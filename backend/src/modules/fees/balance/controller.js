import * as service from "./service.js";
import {asyncHandler} from "../../../common/utils/asyncHandler.js";
import apiResponse from "../../../common/utils/responseApi.js";

export const getBalance = asyncHandler(async (req, res) => {
  const { studentId, feeTypeId } = req.params;

  const data = await service.getBalance(studentId, feeTypeId);

  return apiResponse(res, 200, "Balance fetched successfully", data);
});