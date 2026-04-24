import asyncHandler from "../../common/utils/asyncHandler.js";
import apiResponse from "../../common/utils/apiResponse.js";

import * as scheduleService from "./examSchedule.service.js";
import scheduleMessages from "./examSchedule.constants.js";

import statusCodes from "../../common/constants/statusCodes.js";

export const createSchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.createSchedule(req.body);

  return apiResponse(res, {
    success: true,
    message: scheduleMessages.CREATED,
    statusCode: statusCodes.CREATED,
    data: schedule,
  });
});

export const getSchedules = asyncHandler(async (req, res) => {
  const schedules = await scheduleService.getSchedules();

  return apiResponse(res, {
    success: true,
    message: scheduleMessages.FETCHED,
    statusCode: statusCodes.SUCCESS,
    data: schedules,
  });
});

export const updateSchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.updateSchedule(req.params.id, req.body);

  return apiResponse(res, {
    success: true,
    message: scheduleMessages.UPDATED,
    statusCode: statusCodes.SUCCESS,
    data: schedule,
  });
});

export const deleteSchedule = asyncHandler(async (req, res) => {
  await scheduleService.deleteSchedule(req.params.id);

  return apiResponse(res, {
    success: true,
    message: scheduleMessages.DELETED,
    statusCode: statusCodes.SUCCESS,
  });
});