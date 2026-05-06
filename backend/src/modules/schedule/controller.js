import * as scheduleService from "./service.js";
import apiResponse from "../../common/utils/responseApi.js";
import { asyncHandler } from "../../common/utils/asyncHandler.js";

export const createSchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.createSchedule(req.body);
    console.log("CREATED:", schedule); // 👈 add this

  return apiResponse(res, 201, "Schedule created successfully", schedule);
});

export const getSchedules = asyncHandler(async (req, res) => {
  const schedules = await scheduleService.getSchedules();
  return apiResponse(res, 200, "Schedules fetched", schedules);
});

export const getSchedule = asyncHandler(async (req, res) => {
  const schedule = await scheduleService.getScheduleById(req.params.id);
  return apiResponse(res, 200, "Schedule fetched", schedule);
});

export const updateSchedule = asyncHandler(async (req, res) => {
  const updated = await scheduleService.updateSchedule(req.params.id, req.body);
  return apiResponse(res, 200, "Schedule updated", updated);
});

export const deleteSchedule = asyncHandler(async (req, res) => {
  await scheduleService.deleteSchedule(req.params.id);
  return apiResponse(res, 200, "Schedule deleted");
});