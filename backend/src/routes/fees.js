import express from "express";

import feesRoute from '../modules/fees/route.js'

const feesRoutes = express.Router();


feesRoutes.use("/fees", feesRoute);



export default feesRoutes;

