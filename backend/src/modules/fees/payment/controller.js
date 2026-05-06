import * as service from "./service.js";
import {asyncHandler} from "../../../common/utils/asyncHandler.js";
import apiResponse from "../../../common/utils/responseApi.js";

export const createPayment = asyncHandler(async (req, res) => {
  const data = await service.createPayment(req.body);
  return apiResponse(res, 201, "Payment recorded", data);
});

export const getPayments = asyncHandler(async (req, res) => {
  const data = await service.getPayments();
  return apiResponse(res, 200, "Fetched", data);
});