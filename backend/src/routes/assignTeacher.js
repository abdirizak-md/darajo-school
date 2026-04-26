import express from 'express';
import  assignTeacherRoutes  from '../modules/subjectAssignTeacher/route.js';

const routeAssignTeacher = express.Router();
routeAssignTeacher.post('/assignTeachers', assignTeacherRoutes);

export default routeAssignTeacher;