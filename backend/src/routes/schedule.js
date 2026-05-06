import express from 'express'

import route from '../modules/schedule/route.js'
const routerSchedule = express.Router();

routerSchedule.use('/schedules', route);

export default routerSchedule