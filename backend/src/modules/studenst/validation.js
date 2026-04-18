import Joi from "joi";

export const createStudentSchema = Joi.object({
  fullName: Joi.string().required(),
  admissionNumber: Joi.string().required(),

  dateOfBirth: Joi.date().required(),
  gender: Joi.string().valid("male", "female").required(),

  classId: Joi.string().required(),
  section: Joi.string().required(),

  admissionDate: Joi.date().required(),

  parentName: Joi.string().required(),
  parentPhone: Joi.string().required(),

  email: Joi.string().email().optional(),

  address: Joi.string().required(),
  emergencyContact: Joi.string().required(),

  status: Joi.string().valid("active", "inactive").optional(),

  medicalInfo: Joi.string().optional(),
});