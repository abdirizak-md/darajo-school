import express from "express";

import routeFeeType from '../modules/feeType/route.js'

const routeFeeTypes = express.Router();


routeFeeTypes.use("/feeTypes", routeFeeType);



export default routeFeeTypes;

