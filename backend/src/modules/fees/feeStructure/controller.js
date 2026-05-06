import * as service from "./service.js";
import {asyncHandler} from "../../../common/utils/asyncHandler.js";
import apiResponse from "../../../common/utils/responseApi.js";

export const createFeeStructure = asyncHandler(async (req, res) => {
  const data = await service.createFeeStructure(req.body);
  return apiResponse(res, 201, "Fee structure created", data);
});

export const getFeeStructures = asyncHandler(async (req, res) => {
  const data = await service.getFeeStructures();
  return apiResponse(res, 200, "Fetched", data);
});